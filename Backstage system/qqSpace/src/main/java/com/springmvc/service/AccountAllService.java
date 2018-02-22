package com.springmvc.service;

import org.apache.ibatis.annotations.Param;

public interface AccountAllService {
    String dont_use_account();//获取未被注册账号

    int modify_account_status(@Param("account") String account);//修改账号为注册状态
}
