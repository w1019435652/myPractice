package com.springmvc.dao;

import com.springmvc.entity.UComment;

public interface UCommentMapper {
    int deleteByPrimaryKey(Integer cId);

    int insert(UComment record);

    int insertSelective(UComment record);

    UComment selectByPrimaryKey(Integer cId);

    int updateByPrimaryKeySelective(UComment record);

    int updateByPrimaryKey(UComment record);
}