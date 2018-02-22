/**
 * Created by 王旭 on 2017/10/10.
 */

/**
 * 二级导航相隔一秒后消失
 */
var timer;
var by_interval;
var i_ona = 0;
var s_ona = 0;
function bis(index, sonIndex) {
    by_interval = document.getElementsByClassName("ds")[index].getElementsByClassName("by-interval")[sonIndex];
    document.getElementsByClassName("ds")[i_ona].getElementsByClassName("by-interval")[s_ona].style.display = "none";
    by_interval.style.display = "block";
    clearTimeout(timer);
    i_ona = index;
    s_ona = sonIndex;
}
$(function(){
    var bis_index = 0;
    $(document).on("mouseenter",".bis-all",function(){
        bis_index = $(this).index();
    })
    $(document).on("mouseenter",".bis-all .bis",function(){
        if($(this).index() === 2){
            bis(bis_index+1,0);
        }else{
            bis(bis_index+1,1);
        }
    })
    $(document).on("focus",".published-function",function(){
        published(bis_index+1);
    })

})
$(function(){
    $(document).on("mouseout", ".spacing-1s", function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            by_interval.style.display = "none";
        }, 1000);
    });
    $(document).on("mouseover", ".by-interval", function () {
        clearTimeout(timer);
        $(this).css("display", "block");
        $(document).on("mouseout", ".by-interval", function () {
            $(this).css("display", "none");
        });
    });
})
/**
* 评论区发表显示
*/
function published(index) {
    var ds = document.getElementsByClassName("ds")[index];
    var sacs = ds.getElementsByClassName("sacs")[0];
    var cp = ds.getElementsByClassName("cp")[0];
    var commentaries_function = ds.getElementsByClassName("commentaries-function")[0];
    var c_irv = cp.getElementsByClassName("icon-refresh-v9")[0];
    var flag = true;

    sacs.setAttribute("placeholder", "");
    commentaries_function.style.display = "block";
    c_irv.style.cssText = ";margin-top:35px;background-position:-192px -286px";
    cp.style.height = "70px";
    sacs.onblur = function(){
        this.setAttribute("placeholder", "评论");
        if (flag) {
            commentaries_function.style.display = "none";
            c_irv.style.cssText = ";margin-top:'';background-position:''";
            cp.style.height = "";
            sacs.style.height = "";
        }
    }
    commentaries_function.onmouseover = function(){
        flag = false;
        c_irv.style.cssText = ";margin-top:35px;background-position:-192px -286px";
        sacs.style.height = "70px";
    }
    commentaries_function.onmouseout = function(){
        flag = true;
    }
}

$(function(){
    new Vue({
        el:'#space-dynamic',
        data:({
            items:[
                {
                    dynamic_head_portrait:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1506269690&di=657a2fa40c1442b9c3e5961479e30eca&src=http://sc.jb51.net/uploads/allimg/150513/14-1505130Z61c00.jpg',
                    dynamic_user_name:'陈佳明',
                    dynamic_time:'13:34',
                    dynamic_viewed:87,
                    dynamic_friends_praise:[
                        {
                            dynamic_friends_name:'xxxxe'
                        },
                        {
                            dynamic_friends_name:'ffff'
                        },
                        {
                            dynamic_friends_name:'bbb'
                        },
                        {
                            dynamic_friends_name:'aaa'
                        }
                    ],
                    dynamic_praise_num:8,
                    dynamic_user_comments:[
                        {
                            dynamic_comments_head_portrait:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1506269690&di=657a2fa40c1442b9c3e5961479e30eca&src=http://sc.jb51.net/uploads/allimg/150513/14-1505130Z61c00.jpg',
                            dynamic_comments_name:'嘿嘿嘿',
                            dynamic_comments_text:'才杀两个人',
                            dynamic_comments_time:'12:23'
                        }
                    ]
                },
                {
                    dynamic_head_portrait:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1506269690&di=657a2fa40c1442b9c3e5961479e30eca&src=http://sc.jb51.net/uploads/allimg/150513/14-1505130Z61c00.jpg',
                    dynamic_user_name:'陈佳明',
                    dynamic_time:'13:34',
                    dynamic_viewed:87,
                    dynamic_friends_praise:[
                        {
                            dynamic_friends_name:'xxxxe'
                        },
                        {
                            dynamic_friends_name:'ffff'
                        },
                        {
                            dynamic_friends_name:'bbb'
                        },
                        {
                            dynamic_friends_name:'aaa'
                        }
                    ],
                    dynamic_praise_num:8,
                    dynamic_user_comments:[
                        {
                            dynamic_comments_head_portrait:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1506269690&di=657a2fa40c1442b9c3e5961479e30eca&src=http://sc.jb51.net/uploads/allimg/150513/14-1505130Z61c00.jpg',
                            dynamic_comments_name:'嘿嘿嘿',
                            dynamic_comments_text:'才杀两个人',
                            dynamic_comments_time:'12:23'
                        }
                    ]
                }
            ]
        })
    })
});
/**
 * 说点什么发表于功能显示
 */
$(function(){
    var flag = true;
    var timer;
    var header_publish_all = document.getElementById("header-publish-all");
    var heightCount = 0;
    $(document).on("focus","#tma-text",function(){
        clearInterval(timer);
        header_publish_all.style.display = "block";
        flag = true;
        if(heightCount < 38){
            timer = setInterval(function(){
                if(heightCount >= 38){
                    clearInterval(timer);
                    header_publish_all.style.overflow="visible";
                }
                header_publish_all.style.height = (heightCount++)+"px"
            },1);
        }
    });
    $(document).on("blur","#tma-text",function(){
        clearInterval(timer);

        if(flag){
            header_publish_all.style.overflow="hidden";
            timer = setInterval(function(){
                header_publish_all.style.height = (heightCount--)+"px"
                if(heightCount<= 0){
                    clearInterval(timer);
                    header_publish_all.style.display = "none";
                }
            },1);
        }

    });
    $(document).on("mouseover","#header-publish-all",function(){
        flag = false;
    });
    $(document).on("mouseout","#header-publish-all",function(){
        flag = true;
    });
});





