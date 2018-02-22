package com.springmvc.entity;

import java.util.Date;

public class UserFriend {
    private Integer fId;

    private Integer uId;

    private String fAccount;

    private Integer fIntimacy;

    private Date fAddtime;

    public Integer getfId() {
        return fId;
    }

    public void setfId(Integer fId) {
        this.fId = fId;
    }

    public Integer getuId() {
        return uId;
    }

    public void setuId(Integer uId) {
        this.uId = uId;
    }

    public String getfAccount() {
        return fAccount;
    }

    public void setfAccount(String fAccount) {
        this.fAccount = fAccount == null ? null : fAccount.trim();
    }

    public Integer getfIntimacy() {
        return fIntimacy;
    }

    public void setfIntimacy(Integer fIntimacy) {
        this.fIntimacy = fIntimacy;
    }

    public Date getfAddtime() {
        return fAddtime;
    }

    public void setfAddtime(Date fAddtime) {
        this.fAddtime = fAddtime;
    }
}