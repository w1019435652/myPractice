package com.springmvc.dao;

import com.springmvc.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(Integer uId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer uId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User login(User user);//登录用户查询

    int latest_addition_of_friends_num(@Param("account")String account);//查询最近一年内添加用户数量

    List<User> the_query_recently_added_friends(@Param("account")String account);//查询最近一年内添加用户信息

    int registered_user(User user);//注册用户

    int user_state(@Param("account")String account);//用状态为登录状态

    int query_user_state(@Param("account")String account);//查询用户状态

    int user_esc(@Param("account")String account);//修改用户状态
}