package com.springmvc.dao;

import com.springmvc.entity.UserStateimg;

public interface UserStateimgMapper {
    int deleteByPrimaryKey(Integer siId);

    int insert(UserStateimg record);

    int insertSelective(UserStateimg record);

    UserStateimg selectByPrimaryKey(Integer siId);

    int updateByPrimaryKeySelective(UserStateimg record);

    int updateByPrimaryKey(UserStateimg record);
}