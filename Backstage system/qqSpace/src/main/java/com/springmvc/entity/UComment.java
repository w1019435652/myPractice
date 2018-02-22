package com.springmvc.entity;

public class UComment {
    private Integer cId;

    private Integer sId;

    private String cAccount;

    private String cAcomment;

    private String cBeaccount;

    private String cBcomment;

    public Integer getcId() {
        return cId;
    }

    public void setcId(Integer cId) {
        this.cId = cId;
    }

    public Integer getsId() {
        return sId;
    }

    public void setsId(Integer sId) {
        this.sId = sId;
    }

    public String getcAccount() {
        return cAccount;
    }

    public void setcAccount(String cAccount) {
        this.cAccount = cAccount == null ? null : cAccount.trim();
    }

    public String getcAcomment() {
        return cAcomment;
    }

    public void setcAcomment(String cAcomment) {
        this.cAcomment = cAcomment == null ? null : cAcomment.trim();
    }

    public String getcBeaccount() {
        return cBeaccount;
    }

    public void setcBeaccount(String cBeaccount) {
        this.cBeaccount = cBeaccount == null ? null : cBeaccount.trim();
    }

    public String getcBcomment() {
        return cBcomment;
    }

    public void setcBcomment(String cBcomment) {
        this.cBcomment = cBcomment == null ? null : cBcomment.trim();
    }
}