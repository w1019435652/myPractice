package com.springmvc.entity;

public class UserState {
    private Integer sId;

    private Integer uId;

    private String sTitle;

    private Integer sBrowsenum;

    private String sVideo;

    public Integer getsId() {
        return sId;
    }

    public void setsId(Integer sId) {
        this.sId = sId;
    }

    public Integer getuId() {
        return uId;
    }

    public void setuId(Integer uId) {
        this.uId = uId;
    }

    public String getsTitle() {
        return sTitle;
    }

    public void setsTitle(String sTitle) {
        this.sTitle = sTitle == null ? null : sTitle.trim();
    }

    public Integer getsBrowsenum() {
        return sBrowsenum;
    }

    public void setsBrowsenum(Integer sBrowsenum) {
        this.sBrowsenum = sBrowsenum;
    }

    public String getsVideo() {
        return sVideo;
    }

    public void setsVideo(String sVideo) {
        this.sVideo = sVideo == null ? null : sVideo.trim();
    }
}