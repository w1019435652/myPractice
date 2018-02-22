package com.springmvc.dao;

import com.springmvc.entity.UserState;

public interface UserStateMapper {
    int deleteByPrimaryKey(Integer sId);

    int insert(UserState record);

    int insertSelective(UserState record);

    UserState selectByPrimaryKey(Integer sId);

    int updateByPrimaryKeySelective(UserState record);

    int updateByPrimaryKey(UserState record);
}