/**
 * Created by 王旭 on 2017/11/21.
 */
/**
 * 扫一扫小动画
 */
$(function(){
    var timer;
    var qr_code = $("#qr-code");
    var scan_background = $("#scan-background");
    qr_code.mouseover(function(){
        $(this).stop().animate();
        $(this).animate({right:'60px'});
        timer = setTimeout(function(){
            scan_background.fadeIn(300);
        },400);
    });
    qr_code.mouseout(function(){
        scan_background.css("display","none");
        clearTimeout(timer);
        $(this).stop().animate();
        $(this).animate({right:'0px'});
    });
});
/**
 * 登录注册点击样式
 * @param index
 * @param fb
 */
$(function(){
    var aii = $("#anc .inputOuter input");
    aii.focus(function(){
        $(this).parent().css("background","url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -1px -45px no-repeat");
    });
    aii.blur(function(){
        $(this).parent().css("background","url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -1px -1px no-repeat");
    });
})
/**
 * 单击改变登录方式
 */
$(function(){
    document.getElementById("anc-login").onclick = function(){
        $("#advertising-login .login-all:nth-child(2)").css("display","none");
        $("#advertising-login .login-all:nth-child(3)").css("display","block");
    };
});
/**
 * 下载到不同类型系统上的qq空间鼠标移动到上面上下移动
 */
$(function(){
    var dul = $("#dtw ul li");
    dul.mouseenter(function(){
        $(this).stop().animate();
        $(this).animate({bottom:'10px'},200);
    });
    dul.mouseleave(function(){
        $(this).stop().animate();
        $(this).animate({bottom:'0px'},200);
    });
});
/**
 * 页面加载时的背景图随机选取
 */
$(function(){
    var body_backgroundImg = ["http://img.1ppt.com/uploads/allimg/1711/1_171109084742_1.jpg","http://bpic.588ku.com/back_pic/00/04/27/49/34e896fb7cca1c93f170bfafd998913d.jpg!/fh/300/quality/90/unsharp/true/compress/true"]
    document.getElementById("login-body").style.backgroundImage = "url("+body_backgroundImg[parseInt(Math.random()*2)]+")";//选取随机背景图
});
/**
 * 登录验证与后台获取数据
 */
$(function(){
    var els = document.getElementById("els");
    var account_number = document.getElementById("account-number");
    var pwd = document.getElementById("cipher");
    account_number.onfocus = function(){
        els.style.display = "";
    }
    pwd.onfocus = function(){
        els.style.display = "";
    }
    /**
     * 进行登录后台获取数据
     */
    document.getElementById("user-login").onclick = function(){
        var elt = document.getElementById("err-login-text");
        if(account_number.value === null || account_number.value === "" || pwd.value === null || pwd.value === ""){
            els.style.display = "block";
            elt.innerText = "你的账号或密码不能为空";
        }else{
            var uPwd = md5(document.getElementById("cipher").value);
            var uAccount = document.getElementById("account-number").value;
            $.ajax({
                url:'http://localhost:8080/User/login',
                type:'post',
                async:'true',
                data:{'uAccount':uAccount,'uPwd':uPwd},
                success:function(data){
                    if(data !== null && data !== ""){
                        $.cookie('uPwd',uPwd,{expires:7,path:'/'});
                        $.cookie('uAccount',uAccount,{expires:7,path:'/'});
                        location.href=data;
                    }else{
                        els.style.display = "block";
                        elt.innerText = "账号或密码错误请重新输入";
                    }
                }
            });
        }
    }
});
$(function(){
    var uAccount = $.cookie('uAccount');
    if(uAccount != null && uAccount != ""){
        location.href = "http://localhost:63345/QQ/html/qqHeaderFooter/qqSpaceHeaderFooter.html";
    }
})