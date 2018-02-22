package com.springmvc.dao;

import com.springmvc.entity.AccountAll;
import org.apache.ibatis.annotations.Param;

public interface AccountAllMapper {
    int deleteByPrimaryKey(Integer aId);

    int insert(AccountAll record);

    int insertSelective(AccountAll record);

    AccountAll selectByPrimaryKey(Integer aId);

    int updateByPrimaryKeySelective(AccountAll record);

    int updateByPrimaryKey(AccountAll record);

    String dont_use_account();//获取未被注册账号

    int modify_account_status(@Param("account") String account);//修改账号为注册状态
}