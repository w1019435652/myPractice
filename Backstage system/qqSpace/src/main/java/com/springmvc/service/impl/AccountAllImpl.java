package com.springmvc.service.impl;

import com.springmvc.dao.AccountAllMapper;
import com.springmvc.service.AccountAllService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("AccountAllService")
public class AccountAllImpl implements AccountAllService{

    @Autowired
    private AccountAllMapper accountAllMapper;

    @Override
    public String dont_use_account() {
        return accountAllMapper.dont_use_account();
    }

    @Override
    public int modify_account_status(String account) {
        return accountAllMapper.modify_account_status(account);
    }
}
