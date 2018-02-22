/**
 * Created by 王旭 on 2017/11/21.
 */
$(function(){
    var i = 1;
    var lrcs = ["https://4.url.cn/zc/v3/img/01-1.jpg","https://4.url.cn/zc/v3/img/01-3.jpg","https://4.url.cn/zc/v3/img/01-4.jpg"];
    var lrc = document.getElementById("lrc")
    setInterval(function(){
        if(i > 2){
            i = 0;
        }
        lrc.style.backgroundImage = "url("+lrcs[i++]+")";
    },5000)

});

/**
 * 点击用输入账号名与密码显示方式
 */
$(function () {
    var u_name_pwd = $("#registration-all .registration-style .u-name-pwd");
    u_name_pwd.keydown(function () {
        var evt = (evt) ? evt : ((window.event) ? window.event : ""); //兼容IE和Firefox获得keyBoardEvent对象
        var key = evt.keyCode ? evt.keyCode : evt.which;
        if (key != 8 && key != 46) {
            $(this).next("label").css("display", "none");
        }
    });
    u_name_pwd.keyup(function () {
        if ($(this).val() === "" || $(this).val() === null) {
            $(this).next("label").css("display", "block");
        }
    });
    /**
     * 手机号码点击显示短信验证码
     * @type {HTMLElement}
     */
    var sms = document.getElementById("sms");
    var svc_count = true;
    var mobile_number = document.getElementById("mobile-number");
    var svc = document.getElementById("svc");
    var wti_is_con = document.getElementById("bn-mpn").getElementsByClassName("wti-is-con");
    mobile_number.onfocus = function () {
        svc.style.display = "inline-block";
        svc_count = true;
        sms.style.cssText = "";
        wti_is_con[0].style.display = "block";
        wti_is_con[1].style.height = "0px";
    }
    mobile_number.onblur = function () {
        if(this.value === "" || this.value === null){
            $(this).parent().css("border-color","");
        }else{
            if (/^[0-9]*[1-9][0-9]*$/.exec(this.value)) {
                $(this).nextAll(".input-ok").css("display", "block");
                wti_is_con[0].style.display = "block";
                wti_is_con[1].style.height = "0px";
                $(this).parent().css("border-color","");
            } else if (this.value !== null && this.value !== "") {
                wti_is_con[0].style.display = "none";
                wti_is_con[1].style.height = "26px";
                $(this).parent().css("border-color","#ff5b5b");
            }
        }
        if (svc_count) {
            svc.style.display = "";
        }
    }
    sms.onmouseenter = function () {
        svc.style.display = "inline-block";
        svc_count = false;
        sms.onclick = function () {
            this.style.cssText = ";background-color:#F0F0F0;color:#D2D2D;";
            document.getElementById("svc").style.display = "inline-block";
            svc_count = false;
        };
    };
    sms.onmouseleave = function () {
        if (svc_count) {
            svc.style.display = "none";
        }
        svc_count = true;
    }
});
/**
 * 提示输入账号密码状态
 * @param obj
 * @param fb
 */
function considerations(obj,obj2, fb, flag) {
    var c = document.getElementById(obj + "");
    var p = document.getElementById(obj2 + "");
    var u_pwd_all = document.getElementById("u-pwd-all");
    var eye = u_pwd_all.getElementsByClassName("eye")[0];
    if (fb === "focus") {
        c.style.height = "75px";
        eye.style.right = "";
    } else if (fb === "blur") {
        c.style.height = "0px";
        if (flag === false) {
            p.style.borderColor = "#ff5b5b";
            u_pwd_all.getElementsByClassName("input-ok")[0].style.display = "none";
            document.getElementById("pwd-error").style.height = "26px";
        }else {
            eye.style.right = "50px";
        }
    }
}
/**
 * 签署空间协议
 */
$(function () {
    var rpi1 = $("#relevant-provisions p img:nth-child(1)");
    var rpi2 = $("#relevant-provisions p img:nth-child(2)");
    var rpp_index = 0;
    var rpp_flag = true;
    $("#relevant-provisions p").mouseover(function () {
        rpp_index = $(this).index();
    });
    rpi1.click(function () {
        if (rpp_index === 0 && rpp_flag) {
            $("#rule-privacy a:last").remove();
            rpp_flag = false;
        }
        $(this).css("display", "none");
        $(this).next().css("display", "inline-block");
    });
    rpi2.click(function () {
        if (rpp_index === 0 && rpp_flag === false) {
            $("#rule-privacy").append("<a href=''>《QQ空间服务协议》</a>");
            rpp_flag = true;
        }
        $(this).css("display", "none");
        $(this).prev().css("display", "inline-block");
    });
    var rpi3 = $("#relevant-provisions p img:nth-child(3)");
    var rpi3_flag = true;
    var rule_privacy = document.getElementById("rule-privacy");
    rpi3.click(function () {
        if (rpi3_flag) {
            rpi3_flag = false;
            $(this).attr("src", "//4.url.cn/zc/v3/img/up.png");
            rule_privacy.style.opacity = "1";
        } else {
            rpi3_flag = true;
            $(this).attr("src", "//4.url.cn/zc/v3/img/down.png");
            rule_privacy.style.opacity = "0";
        }
    });
});
/**
 * 初始化电话号码开头号以及点击更换开头号
 */
$(function () {
    var begin_phone = document.getElementById("begin-phone");
    var begin_phone_num_all = new Vue({
        el: '#begin-phone-num',
        data: ({
            items: [
                {country_area: "中国 +86", begin_phone_num: "+86"},
                {country_area: "中国香港特别行政区 +852", begin_phone_num: "+852"},
                {country_area: "中国澳门特别行政区 +853", begin_phone_num: "+853"},
                {country_area: "台湾 +886", begin_phone_num: "+886"},
                {country_area: "中国香港特别行政区 +852", begin_phone_num: "+853"},
                {country_area: "中国香港特别行政区 +852", begin_phone_num: "+853"},
                {country_area: "中国香港特别行政区 +852", begin_phone_num: "+853"},
                {country_area: "中国香港特别行政区 +852", begin_phone_num: "+853"},
                {country_area: "中国香港特别行政区 +852", begin_phone_num: "+853"}
            ]
        }),
        methods: {
            begin_phone_num: function (index) {
                begin_phone.value = this.items[index].begin_phone_num;
                begin_phone_num.style.display = "";
                begin_phone_up_down.src = "//4.url.cn/zc/v3/img/down.png";
                begin_phone_up_down_flag = true;
            }
        }
    });
    var begin_phone_up_down_flag = true;
    var begin_phone_num = document.getElementById("begin-phone-num");
    var begin_phone_up_down = document.getElementById("up-down");
    var begin_phone_up_down_img = begin_phone_up_down.getElementsByTagName("img")[0];
    begin_phone_up_down.onclick = function () {
        var begin_phone_up_down_img = this.getElementsByTagName("img")[0];
        if (begin_phone_up_down_flag) {
            begin_phone_up_down_img.src = "//4.url.cn/zc/v3/img/up.png";
            begin_phone_num.style.display = "block";
            begin_phone_up_down_flag = false;
        } else {
            begin_phone_up_down_img.src = "//4.url.cn/zc/v3/img/down.png";
            begin_phone_num.style.display = "";
            begin_phone_up_down_flag = true;
        }
    }
    begin_phone.onfocus = function () {
        begin_phone_up_down_img.src = "//4.url.cn/zc/v3/img/up.png";
        begin_phone_num.style.display = "block";
        begin_phone_up_down_flag = false;
    }
    begin_phone.onblur = function () {
        begin_phone_up_down_img.src = "//4.url.cn/zc/v3/img/down.png";
        setTimeout(function () {
            begin_phone_num.style.display = "";
        }, 120);
        begin_phone_up_down_flag = false;
    }
    $(".u-name-pwd").focus(function () {
        begin_phone_up_down_img.src = "//4.url.cn/zc/v3/img/down.png";
        begin_phone_num.style.display = "";
        begin_phone_up_down_flag = true;
    })
});
/**
 * 账号密码提示功能,注册
 */
$(function () {
    var pwd_considerations = document.getElementById("pwd-considerations").getElementsByTagName("div");
    var u_name_pwd = $(".registration-style .u-error");
    var u_pwd = document.getElementById("u-pwd");
    var u_name_pwd_flag = true;
    var u_name = document.getElementById("u-name");
    var mobile_number = document.getElementById("mobile-number");
    u_name.onblur = function(){
        if (this.value === "" || this.value === null) {
            $(this).parent().nextAll(".error").text("账号不能为空");
        }
    };
    u_name_pwd.focus(function () {
        $(this).parent().nextAll(".error").css("height", "0px");
        $(this).parent().css("border-color", "#359EFF");
        $(this).nextAll(".input-ok").css("display", "none");
    });
    u_name_pwd.blur(function () {
        var u_name_pwd_val = $(this).val();
        $(this).parent().css("border-color", "");
        if (u_name_pwd_val === "" || u_name_pwd_val === null) {
            $(this).parent().nextAll(".error").css("height", "26px");
            $(this).parent().css("border-color", "#ff5b5b");
        }else if($(this).val().indexOf(" ") >= 0){
            $(this).parent().nextAll(".error").text("不能包括空格");
            $(this).parent().nextAll(".error").css("height", "26px");
            $(this).parent().css("border-color", "#ff5b5b");
        }else if (u_name_pwd_val !== "" && u_name_pwd_val !== null) {
            $(this).nextAll(".input-ok").css("display", "block");
        }
    });
    u_pwd.onblur = function () {
        considerations('pwd-considerations','u-pwd-all', 'blur', u_name_pwd_flag);
    }
    u_pwd.onkeyup = function () {
        var error = $(this).parent().nextAll(".error");
        if (this.value === "" || this.value === null) {
            u_pwd_eye.style.display = "none";
            pwd_considerations[0].style.backgroundImage = "";
            error.text("密码不能为空");
            return;
        } else {
            u_pwd_eye.style.display = "block";
        }
        if (this.value.indexOf(" ") >= 0) {
            pwd_considerations[0].style.backgroundImage = "url(https://4.url.cn/zc/v3/img/info.png)";
            u_name_pwd_flag = false;
        } else {
            u_name_pwd_flag = true;
            pwd_considerations[0].style.backgroundImage = "";
        }
        if (this.value.length >= 8 && this.value.length <= 16) {
            pwd_considerations[1].style.backgroundImage = "url(https://4.url.cn/zc/v3/img/green.png)";
        } else {
            if (u_name_pwd_flag) {
                error.text("长度为8-16的字符");
                u_name_pwd_flag = false;
            }
            pwd_considerations[1].style.backgroundImage = "";
        }
        if ((/^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){2,}$/).exec(this.value) && this.value.indexOf(" ") < 0) {
            pwd_considerations[2].style.backgroundImage = "url(https://4.url.cn/zc/v3/img/green.png)";
        } else {
            if (u_name_pwd_flag) {
                error.text("必须包含字母、数字、符号中至少2种");
                u_name_pwd_flag = false;
            }
            pwd_considerations[2].style.backgroundImage = "";
        }
    };
    //显示密码
    var u_pwd_eye = document.getElementById("u-pwd-all").getElementsByClassName("eye")[0];
    u_pwd_eye.onmousedown = function () {
        this.style.backgroundImage = "url(https://4.url.cn/zc/v3/img/eye.png)";
        u_pwd.type = "text";
    }
    u_pwd_eye.onmouseup = function () {
        this.style.backgroundImage = "";
        u_pwd.type = "password";
    }
    document.getElementById("registration-submit").onclick = function(){
        var md5_pwd = md5(u_pwd.value);
        $.ajax({
            url:'http://localhost:8080/User/registered_user',
            type:'post',
            async:'true',
            data:{'uName':u_name.value,'uPwd':md5_pwd,'uPhone':mobile_number.value},
            success:function(data){
                if(data !== null && data !== ""){
                    document.getElementById("registration-npp").style.display = "none";
                    document.getElementById("registration-account").style.display = "block";
                    document.getElementById("account-text").innerText = data;
                }
            }
        });
    };
});