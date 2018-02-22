package com.springmvc.dao;

import com.springmvc.entity.UserFriend;

public interface UserFriendMapper {
    int deleteByPrimaryKey(Integer fId);

    int insert(UserFriend record);

    int insertSelective(UserFriend record);

    UserFriend selectByPrimaryKey(Integer fId);

    int updateByPrimaryKeySelective(UserFriend record);

    int updateByPrimaryKey(UserFriend record);
}