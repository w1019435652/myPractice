package com.springmvc.controller;



import com.springmvc.entity.User;
import com.springmvc.service.AccountAllService;
import com.springmvc.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "*",maxAge = 3600)
@RequestMapping("/User")
public class UserController {

    @Resource(name = "UserService")
    UserService userService;
    @Resource(name = "AccountAllService")
    AccountAllService accountAllService;
//    produces="text/html;charset=UTF-8;"

    /**
     * 登录
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.POST,produces = "text/html;charset=UTF-8")
    public String login(HttpServletRequest request){
        User user = new User();
        String account = request.getParameter("uAccount");
        user.setuAccount(account);
        user.setuPwd(request.getParameter("uPwd"));
        user = userService.login(user);
        if (user != null){
            if (userService.query_user_state(account) == 0){
                userService.user_state(account);
                return "http://localhost:63345/QQ/html/qqHeaderFooter/qqSpaceHeaderFooter.html";
            }
        }
        return null;
    }
    /**
     * 查询登录用户信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/user_info",method = RequestMethod.POST)
    public List<Map<String,Object>> user_info(HttpServletRequest request){
        String account = request.getParameter("uAccount");
        if (userService.query_user_state(account) == 1){
            List<Map<String,Object>> u_list = new ArrayList<Map<String, Object>>();
            Map<String,Object> u_map = new HashMap<String,Object>();
            User user = new User();
            user.setuAccount(account);
            user.setuPwd(request.getParameter("uPwd"));
            user = userService.login(user);
            u_map.put("uId",user.getuId());
            u_map.put("uName",user.getuName());
            u_map.put("uAccount",user.getuAccount());
            u_map.put("uImg",user.getuImg());
            u_map.put("uFriendNum",userService.latest_addition_of_friends_num(user.getuAccount()));//查询最近添加好友数量
            u_list.add(u_map);
            return u_list;
        }
        return null;
    }

    /**
     * 用户好友一年内的信息
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/the_query_recently_added_friends",method = RequestMethod.POST)
    public List<User> the_query_recently_added_friends(HttpServletRequest request){
        return userService.the_query_recently_added_friends(request.getParameter("uAccount"));
    }
    /**
     * 注册
     */
    @ResponseBody
    @RequestMapping(value = "/registered_user",method = RequestMethod.POST,produces = "text/html;charset=UTF-8")
    public String registered_user(HttpServletRequest request)throws Exception{
        User user = new User();
        user.setuName(request.getParameter("uName"));
        user.setuPwd(request.getParameter("uPwd"));
        user.setuPhone(request.getParameter("uPhone"));
        if (user.getuName() != null && user.getuName() != "" && user.getuPwd() != null || user.getuPwd() != "" && user.getuPhone() != null || user.getuPhone() != ""){
            String account = accountAllService.dont_use_account();
            int mas = accountAllService.modify_account_status(account);//将未被注册的账号改为注册状态
            user.setuAccount(account);
            if (mas == 1){
                userService.registered_user(user);
                return account;
            }
        }
        return "注册失败,请刷新页面重试";
    }

    /**
     * 用户退出
     * @param request
     * @return
     * @throws Exception
     */
    @ResponseBody
    @RequestMapping(value = "/user_esc",method = RequestMethod.POST)
    public int user_esc(HttpServletRequest request)throws  Exception{
        return userService.user_esc(request.getParameter("uAccount"));
    }
}
