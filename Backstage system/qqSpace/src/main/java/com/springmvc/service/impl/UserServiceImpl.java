package com.springmvc.service.impl;

import com.springmvc.dao.UserMapper;
import com.springmvc.entity.AccountAll;
import com.springmvc.entity.User;
import com.springmvc.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public User login(User user) {
        return userMapper.login(user);
    }

    @Override
    public int latest_addition_of_friends_num(String account) {
        return userMapper.latest_addition_of_friends_num(account);
    }

    @Override
    public List<User> the_query_recently_added_friends(String account) {
        return userMapper.the_query_recently_added_friends(account);
    }

    @Override
    public int registered_user(User user) {
        return userMapper.registered_user(user);
    }

    @Override
    public int user_state(String account) {
        return userMapper.user_state(account);
    }

    @Override
    public int query_user_state(String account) {
        return userMapper.query_user_state(account);
    }

    @Override
    public int user_esc(String account) {
        return userMapper.user_esc(account);
    }
}
