package com.springmvc.dao;

import com.springmvc.entity.User;
import com.springmvc.service.AccountAllService;
import com.springmvc.service.UserService;
import com.springmvc.service.impl.UserServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class test {
    public static void main(String[] args) {
//        accountAllService();
        userService();
    }
    static void userService(){
        ApplicationContext act = new ClassPathXmlApplicationContext("spring-context.xml");
        UserService us = (UserService) act.getBean("UserService");
        System.out.println(us.user_esc("1101001"));
//        User user = new User();
//        user.setuAccount("11010014");
//        user.setuPwd("w4054655");
//        user.setuPhone("12323");
//        user.setuName("hahah");
//        System.out.println(us.registered_user(user));
//        User u = us.login(user);
//        System.out.println(u.getuId());
//        System.out.println(us.latest_addition_of_friends_num("1101001"));
//        System.out.println(us.the_query_recently_added_friends("1101001").get(1).getNum());
    }
    static void accountAllService(){
        ApplicationContext act = new ClassPathXmlApplicationContext("spring-context.xml");
        AccountAllService us = (AccountAllService) act.getBean("AccountAllService");
        System.out.println(us.dont_use_account());
    }
}
