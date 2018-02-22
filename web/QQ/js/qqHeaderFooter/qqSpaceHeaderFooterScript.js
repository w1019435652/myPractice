/**
 * Created by 王旭 on 2017/9/24.
 */

$(function () {

    //第一导航搜索栏增加长度
    var search_friends = $("#user_query .search_friends");
    var music = document.getElementById("music");
    var timer;
    var correlation_apply = document.getElementById("user_query").getElementsByClassName("sub_nav")[0];
    var correlation_apply_height = correlation_apply.offsetHeight;
    var search_friends_index;
    search_friends.focus(function () {
        clearInterval(timer);
        search_friends.css({"width": "173px", "background-color": "#ffffff"});
        correlation_apply.style.border = "1px solid #C5C5C5";
        music.style.display = "none";
        timer = setInterval(function () {
            correlation_apply_height += 3;
            correlation_apply.style.height = correlation_apply_height + "px";
            if (correlation_apply_height > 186) {
                correlation_apply.style.height = 186 + "px";
                clearInterval(timer);
            }
        }, 1);
        search_friends.blur(function () {
            clearInterval(timer);
            music.style.display = "";
            search_friends_index = $(this).index() - 1;
            timer = setInterval(function () {
                cah_sw(search_friends_index);
            }, 1);
        });
    });
    function cah_sw(index) {
        correlation_apply_height -= 3;
        correlation_apply.style.height = correlation_apply_height + "px";
        if (correlation_apply_height <= 0) {
            correlation_apply.style.cssText = "height:0px;border:none;";

            search_friends.eq(index).css({"width": "", "background-color": ""});
            clearInterval(timer);
        }
    }

    //第二导航搜索栏增加长度
    var sc_all_sf = document.getElementById("sc_all").getElementsByClassName("search_friends")[0];
    sc_all_sf.onfocus = function () {
        sc_all_sf.style.width = "230px";
        sc_all_sf.onblur = function () {
            sc_all_sf.style.width = "90px";
        }
    }
});

$(function () {
    $.ajax({
        url: 'http://localhost:63345/QQ/html/qqSpaceHomePageBody/qqSpacePersonalCenter/qqSpaceHomePageBody.html',
        type: 'get',
        async: true,
        dataType: 'html',
        success: function (data) {
            $("#body").html(data);
        }
    });
});
$(function(){
    $(".nav_background_color").mouseover(function(){
        try{
            if($(this).index()>1){
                var lay = $(".nav_background_color:eq("+$(this).index()+") .sub_nav .lay")[0].src;
            }
            if(lay == "" || lay == null) {
                switch ($(this).index()) {
                    case 2:
                        $("#rac_all img").lazyload({
                            effect: "fadeIn"
                        });
                        break;
                    case 3:
                        $("#games img").lazyload({
                            effect: "fadeIn"
                        });
                        break;
                    case 4:
                        $("#dress_up img").lazyload({
                            effect: "fadeIn"
                        });
                        break;
                }
            }
        }catch(err){}

    });
});
var user_close_friend_wight = null;//用户好友信息
var dress_up = null;//装扮信息
function init_data() {
    //用户最近添加好友信息
    user_close_friend_wight = new Vue({
        el: '#rac_all',
        data: ({
            items: []
        })
    });
    //游戏信息
    var games_info = new Vue({
        el: '#games_info',
        data: ({
            items: [
                {
                    g_id: 1,
                    g_location: '',
                    g_name: '星球大乱斗',
                    g_img: 'https://i.gtimg.cn/open/app_icon/05/52/64/22/1105526422_50.png'
                },
                {
                    g_id: 2,
                    g_location: '',
                    g_name: '帝王霸业',
                    g_img: 'https://i.gtimg.cn/open/app_icon/03/26/66/14/1103266614_50.png'
                },
                {
                    g_id: 3,
                    g_location: '',
                    g_name: 'qq斗地主',
                    g_img: 'https://i.gtimg.cn/open/app_icon/00/00/03/82/382_50.png'
                },
                {
                    g_id: 4,
                    g_location: '',
                    g_name: 'qq餐厅',
                    g_img: 'https://i.gtimg.cn/open/app_icon/00/00/03/72/372_50.png'
                }
                ,
                {
                    g_id: 5,
                    g_location: '',
                    g_name: '欢乐斗地主',
                    g_img: 'https://i.gtimg.cn/open/app_icon/00/00/03/63/363_50.png'
                }
                ,
                {
                    g_id: 6,
                    g_location: '',
                    g_name: '攻沙正版传奇',
                    g_img: 'https://i.gtimg.cn/open/app_icon/06/21/72/26/1106217226_50.png'
                }
                ,
                {
                    g_id: 7,
                    g_location: '',
                    g_name: '炫舞时代',
                    g_img: 'https://i.gtimg.cn/open/app_icon/01/32/83/22/1101328322_50.png'
                }
                ,
                {
                    g_id: 8,
                    g_location: '',
                    g_name: '传奇霸业',
                    g_img: 'https://i.gtimg.cn/open/app_icon/04/21/63/74/1104216374_50.png'
                }
                ,
                {
                    g_id: 9,
                    g_location: '',
                    g_name: '龙神契约',
                    g_img: 'https://i.gtimg.cn/open/app_icon/06/19/30/11/1106193011_50.png'
                },
                {
                    g_id: 10,
                    g_location: '',
                    g_name: '神仙劫',
                    g_img: 'https://i.gtimg.cn/open/app_icon/05/69/59/53/1105695953_50.png'
                }
                ,
                {
                    g_id: 11,
                    g_location: '',
                    g_name: '楚乔传',
                    g_img: 'https://i.gtimg.cn/open/app_icon/06/11/18/44/1106111844_50.png'
                }
                ,
                {
                    g_id: 12,
                    g_location: '',
                    g_name: '更多应用',
                    g_img: 'https://qzonestyle.gtimg.cn/qzonestyle/act/qzone_publicize_img/appwall_allappicon.png'
                }
            ]
        })
    });
    var du_on_a_index = 0;
    //装扮信息
    dress_up = new Vue({
        el: '#dress_up',
        data: ({
            items: [
                {
                    du_name:'心已飞远',
                    du_img_all: [
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/0/106352_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/11/106347_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/15/106367_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/4/106372_2.gif'}
                    ]
                },
                {
                    du_name:'路过心灵的句子',
                    du_img_all: [
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/6/107430_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/6/107414_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/2/107410_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/14/107406_2.gif'}
                    ]
                },
                {
                    du_name:'急速传说',
                    du_img_all: [
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/11/108059_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/7/108055_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/3/108051_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/9/103033_2.gif'}
                    ]
                },
                {
                    du_name:'新潮流',
                    du_img_all: [
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/1/107233_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/8/107208_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/11/107243_2.gif'},
                        {du_img: 'http://ctc.qzonestyle.gtimg.cn/qzone/space_item/pre/0/107264_2.gif'}
                    ]
                }
            ]
        }),methods:{
            /**
             * 皮肤选择
             * @param index
             */
            mouseover:function(index){
                var dup_tsi = document.getElementById("dress_up_page").getElementsByClassName("the-skin-img");
                dup_tsi[du_on_a_index].style.display = "none"
                dup_tsi[index].style.display = "block";
                if(index !== du_on_a_index){
                    document.getElementById("du-name").getElementsByTagName("li")[du_on_a_index].getElementsByTagName("span")[0].style.color = "";
                }
                document.getElementById("du-name").getElementsByTagName("li")[index].getElementsByTagName("span")[0].style.color = "black";
                du_on_a_index = index;
            }
        },beforeCreate: function () {
            console.group('beforeCreate 创建前状态===============》');
        },
        created: function () {
            console.group('created 创建完毕状态===============》');
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》');
        },
        mounted: function () {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);//已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);//已被初始化
            console.log("%c%s", "color:red","message: " + this.message);//已被初始化
            //初始化随机皮肤显示
            var length = this.items.length-1;
            var random = Math.round(Math.random()*length);
            document.getElementById("dress_up_page").getElementsByClassName("the-skin-img")[random].style.display = "block";
            document.getElementById("du-name").getElementsByTagName("li")[random].getElementsByTagName("span")[0].style.color = "black";
            du_on_a_index = random;
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
        }
    });

}
$(function(){
    init_data();//初始化页面数据
    const login_url = "http://localhost:63345/QQ/html/qqSpaceHomeLoginrRgistration/login.html";
    try{
        var uPwd = $.cookie("uPwd");
        var uAccount = $.cookie("uAccount");

        if(uAccount == null || uAccount == "" || uPwd == null || uPwd == ""){
            location.href = login_url;
        }
        $.ajax({
            url:'http://localhost:8080/User/user_info',
            type:'post',
            async:'true',
            dataType:'json',
            data:{'uAccount': uAccount,'uPwd':uPwd},
            success:function(data){
                $.each(data,function(i,list){
                    $(".user-img").attr("src",list.uImg);
                    $(".user-name").text(list.uName);
                    $(".u-friend-num").text(list.uFriendNum);
                });
            }
        });
        $.ajax({
            url:'http://localhost:8080/User/the_query_recently_added_friends',
            type:'post',
            async:'true',
            data:{'uAccount':uAccount},
            success:function(data){
                user_close_friend_wight.items = data;

            }
        });
    }catch(err){
        location.href = login_url;
    }
    document.getElementById("esc").onclick = function(){
        var flag = confirm("您确定要退出吗？");
        if(flag === true){
            $.ajax({
                url:'http://localhost:8080/User/user_esc',
                type:'post',
                async:'true',
                data:{'uAccount':uAccount},
                success:function(data){
                    if(data === 1){
                        $.cookie('uAccount',"",{path:'/'});
                        $.cookie('uPwd',"",{path:'/'});
                        location.href = login_url;
                    }else{
                        alert("没有退出成功")
                    }
                }
            });
        }
    }
});


