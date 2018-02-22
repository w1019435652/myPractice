/**
 * Created by 王旭 on 2017/10/26.
 */
/**
 * 初始化信息
 */

/**
 *  大家都在看上一页下一页功能
 * @param np_all_index外层下标
 * @param np_index内层显示下标
 * @param next_index下一页下标
 * @param add_html要添加的页面
 */
var wmb = 0;//0我看过谁1谁看过我2被挡访客
var everyone_pat_li_index = 0;//大家都在看vue信息下标
var wwb_pat_li_index = 0;//我看过谁谁看过我被挡访客vue信息下标
$(function () {
    $(".np-all .previous-next-page .previous").css({
        "opacity": "0.5",
        "cursor": "default",
        "background-color": "#ffffff"
    });
    $(".np-all:eq(0) .previous-next-page .next").click(function () {
        if ((everyone_pat_li_index + 1) * 3 < everyone_pat_all_length) {
            ++everyone_pat_li_index;
            next_page_all(0, 0, 0, 3, everyone_pat_li_index, everyone_pat_all_length, "next",false, "<li v-for='(item,index) in items' v-if='index>=" + (everyone_pat_li_index * 3) + "&&index<" + ((everyone_pat_li_index + 1 ) * 3) + "'><a href=''><img :src='item.ep_img' alt=''/> </a> <div class='everyone-pat-title fr'> <div> <a href=''>" + '{{item.ep_title_text}}' + "</a> </div> <div class='everyone-pat-gal-all'> <a href='' class='everyone-pat-gal'> <i class='ui-icon'></i> <span class='give-a-like-text'>赞</span> </a> <span class='gal-num-external-style'> <span>" + '{{item.ep_give_like_num}}' + "</span> <b class='left-triangle'> <b class='ui_trig'></b> <b class='ui_trig'></b> </b> </span> </div> </div> </li>");
        }
    });
    $(".np-all:eq(0) .previous-next-page .previous").click(function () {
        if (everyone_pat_li_index > 0) {
            --everyone_pat_li_index;
            next_page_all(0, 0, 0, 3, everyone_pat_li_index, everyone_pat_all_length, "previous",false, "<li v-for='(item,index) in items' v-if='index>=" + (everyone_pat_li_index * 3) + "&&index<" + ((everyone_pat_li_index + 1 ) * 3) + "'><a href=''><img :src='item.ep_img' alt=''/> </a> <div class='everyone-pat-title fr'> <div> <a href=''>" + '{{item.ep_title_text}}' + "</a> </div> <div class='everyone-pat-gal-all'> <a href='' class='everyone-pat-gal'> <i class='ui-icon'></i> <span class='give-a-like-text'>赞</span> </a> <span class='gal-num-external-style'> <span>" + '{{item.ep_give_like_num}}' + "</span> <b class='left-triangle'> <b class='ui_trig'></b> <b class='ui_trig'></b> </b> </span> </div> </div> </li>");
        }
    });
    $(".np-all:eq(1) .previous-next-page .next").click(function () {
        if ((wwb_pat_li_index + 1) * 9 < wwp_pat_all_length) {
            ++wwb_pat_li_index;
            next_page_all(1, 0, 0, 9, wwb_pat_li_index, wwp_pat_all_length, "next",false, "<li v-for='(item,index) in items' v-if='index>=" + (wwb_pat_li_index * 9) + "&&index<" + ((wwb_pat_li_index + 1 ) * 9) + "'><a href=''><img :src='item.u_img' alt=''/><span class='user_name'>" + '{{item.u_name}}' + "</span></a> <span class='wwp_time'>" + '{{item.u_seen_time}}' + "</span> </li>")
        }
    });
    $(".np-all:eq(1) .previous-next-page .previous").click(function () {
        if (wwb_pat_li_index > 0) {
            --wwb_pat_li_index;
            next_page_all(1, 0, 0, 9, wwb_pat_li_index, wwp_pat_all_length, "previous",false, "<li v-for='(item,index) in items' v-if='index>=" + (wwb_pat_li_index * 9) + "&&index<" + ((wwb_pat_li_index + 1 ) * 9) + "'><a href=''><img :src='item.u_img' alt=''/><span class='user_name'>" + '{{item.u_name}}' + "</span></a> <span class='wwp_time'>" + '{{item.u_seen_time}}' + "</span> </li>");
        }
    });
})
/**
 * 上一页下一页自写方法
 * @param np_all_index
 * @param np_index
 * @param next_previous_index
 * @param visible_nop
 * @param info_index
 * @param info_length
 * @param next_previous
 * @param add_page
 */
function next_page_all(np_all_index, np_index, next_previous_index, visible_nop, info_index, info_length, next_previous, cycle, add_page) {
    var np_all = document.getElementsByClassName("np-all")[np_all_index];
    var np = $(".np-all:eq(" + np_all_index + ") .np:eq(" + np_index + ")");
    var np_li = $(".np-all:eq(" + np_all_index + ") .np:eq(" + np_index + ") li");
    var previous = np_all.getElementsByClassName("previous")[next_previous_index];
    var next = np_all.getElementsByClassName("next")[next_previous_index];
    switch (next_previous) {
        case "next":
            np_li.remove();
            np.append(add_page);
            init_body_right();
            previous.style.cssText = "";
            if (info_index * visible_nop > info_length - 3) {
                if (cycle) {
                } else {
                    next.style.cssText = ";opacity:0.5;background-color:#ffffff;cursor: default;"
                }
            }
            break;
        case "previous":
            np_li.remove();
            np.append(add_page);
            init_body_right();
            next.style.cssText = "";
            if (info_index <= 0) {
                if (cycle) {
                } else {
                    previous.style.cssText = ";opacity:0.5;background-color:#ffffff;cursor: default;"
                }
            }
            break;
    }
}
/**
 * 主页身体右边部分初始化信息
 */
var everyone_pat_all_length;//everyone_pat_all总长度
var wwp_pat_all_length;
var br_open_yellow_diamonds_0 = true;
var br_open_yellow_diamonds_1 = true;
function init_body_right() {
    //初始化大家都在看数据
    var everyone_pat_all = new Vue({
        el: '#everyone-pat',
        data: ({
            items: [
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 111

                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 111
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 111
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 2231
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 13232
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 2231
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 13232
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 55555
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 6666
                },
                {
                    ep_img: "http://qzonestyle.gtimg.cn/qzone/space_item/boss_pic/2129_2017_11/1509697490833_18997.jpg",
                    ep_title_text: "揭秘地府十大阴帅，牛头马面只排第十",
                    ep_give_like_num: 6666
                }
            ]
        })
    });
    everyone_pat_all_length = everyone_pat_all.items.length;
    //谁看过我我看过谁与被挡访客信息
    var rac_all;
    var br_open_yellow_diamonds_all = document.getElementById("br-open-yellow-diamonds-all");
    switch (wmb) {
        case 0:
            //我看过谁
            if (br_open_yellow_diamonds_0) {
                br_open_yellow_diamonds_all.innerHTML = "<div class='br-open-yellow-diamonds'> <p class='oyd'> <span>看看大家都看了什么？开通黄钻可查看2000人的访问轨迹</span> <a href='http://google.urlshare.cn/umirror_url_check?appid=0&rappid=&url=http%3A%2F%2Fpay.qq.com%2Fipay%2Findex.shtml%3Fc%3Dxxjzgw%2Cxxjzghh%26aid%3Dzone.fangke&luin=1019435652&lpos=2&lsource=1'><img src='http://qzonestyle.gtimg.cn/qzone_v6/img/icenter/btn_qz_open.png' alt=''/></a></p><div class='oyd-esc' id='oyd-esc-1'>x</div></div>"
                br_open_yellow_diamonds_all.style.marginBottom = "10px";
                document.getElementById("oyd-esc-1").onclick = function () {
                    br_open_yellow_diamonds_0 = false;
                    init_body_right();
                };
            } else {
                br_open_yellow_diamonds_all.innerHTML = "";
                br_open_yellow_diamonds_all.style.marginBottom = "0px";
            }

            rac_all = new Vue({
                el: '#wwb',
                data: ({
                    items: [
                        {
                            u_id: 1,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                            u_name: '张三炮',
                            u_seen_time: "前天"
                        },
                        {
                            u_id: 2,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=f8d6b375d4eab9b2e35b8a3090dd7038&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F08f790529822720e7f9f138e73cb0a46f21fab75.jpg',
                            u_name: '奔跑吧兄弟',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 3,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=880c53d4cd4426cefc1152fc3c5adb20&imgtype=0&src=http%3A%2F%2Fp4.qhimg.com%2Ft01ae4a19ac3b456e47.jpg',
                            u_name: '三天打鱼',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 4,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=b8e29c8ecee8cd42be396083c39c80dc&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc259467d6ce4dde71190ef6dba.jpg',
                            u_name: '两天晒网',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 5,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=de644c9c32fe94452b5cde7c9e7f48d9&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D68b1ce20097b02080c9c37e557e9dee5%2F80cb39dbb6fd5266d6a1da91a818972bd50736a8.jpg',
                            u_name: '走马灯',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 6,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=65ef5793c38d9d5a28dd2c72a9d2ca5b&imgtype=0&src=http%3A%2F%2Fwenwen.soso.com%2Fp%2F20110307%2F20110307181210-1807453677.jpg',
                            u_name: '天分',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 7,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=51365f808a2baf8fa17ef575bd0c2aa9&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dd9dd8eaba1efce1bea7ec0ce9a61dfe8%2Ff31fbe096b63f6242252f45e8144ebf81a4ca364.jpg',
                            u_name: '啊哈哈哈哈或或或',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                    ]
                })
            });
            wwp_pat_all_length = rac_all.items.length;
            break;
        case 1:
            //谁看过我
            if (br_open_yellow_diamonds_1) {
                br_open_yellow_diamonds_all.innerHTML = "<div class='br-open-yellow-diamonds'> <p class='oyd'>黄钻用户可查看最多100个去访问过的人！ <a href='http://google.urlshare.cn/umirror_url_check?appid=0&rappid=&url=http%3A%2F%2Fpay.qq.com%2Fipay%2Findex.shtml%3Fc%3Dxxjzgw%2Cxxjzghh%26aid%3Dzone.fangke&luin=1019435652&lpos=2&lsource=1' style='display: inline-block;position: relative;bottom: 5px'><img src='http://qzonestyle.gtimg.cn/qzone_v6/img/icenter/btn_qz_open.png' alt=''/></a></p><div class='oyd-esc' id='oyd-esc-2'>x</div></div>";
                br_open_yellow_diamonds_all.style.marginBottom = "10px";
                document.getElementById("oyd-esc-2").onclick = function () {
                    br_open_yellow_diamonds_1 = false;
                    init_body_right();
                };
            } else {
                br_open_yellow_diamonds_all.innerHTML = "";
                br_open_yellow_diamonds_all.style.marginBottom = "0px";
            }
            var wih_ever_seen = new Vue({
                el: '#wwb',
                data: ({
                    items: [
                        {
                            u_id: 1,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                            u_name: '张三炮',
                            u_seen_time: "前天"
                        },
                        {
                            u_id: 2,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=f8d6b375d4eab9b2e35b8a3090dd7038&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F08f790529822720e7f9f138e73cb0a46f21fab75.jpg',
                            u_name: '奔跑吧兄弟',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 3,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=880c53d4cd4426cefc1152fc3c5adb20&imgtype=0&src=http%3A%2F%2Fp4.qhimg.com%2Ft01ae4a19ac3b456e47.jpg',
                            u_name: '三天打鱼',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 4,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=b8e29c8ecee8cd42be396083c39c80dc&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc259467d6ce4dde71190ef6dba.jpg',
                            u_name: '两天晒网',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 5,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=de644c9c32fe94452b5cde7c9e7f48d9&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D68b1ce20097b02080c9c37e557e9dee5%2F80cb39dbb6fd5266d6a1da91a818972bd50736a8.jpg',
                            u_name: '走马灯',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 6,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=65ef5793c38d9d5a28dd2c72a9d2ca5b&imgtype=0&src=http%3A%2F%2Fwenwen.soso.com%2Fp%2F20110307%2F20110307181210-1807453677.jpg',
                            u_name: '天分',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 7,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=51365f808a2baf8fa17ef575bd0c2aa9&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dd9dd8eaba1efce1bea7ec0ce9a61dfe8%2Ff31fbe096b63f6242252f45e8144ebf81a4ca364.jpg',
                            u_name: '啊哈哈哈哈或或或',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月1"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月2"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                    ]
                })
            });
            break;
        case 2:
            //被挡访客
            var blocked_visitors_info = new Vue({
                el: '#wwb',
                data: ({
                    items: [
                        {
                            u_id: 1,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                            u_name: '张三炮',
                            u_seen_time: "前天"
                        },
                        {
                            u_id: 2,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=f8d6b375d4eab9b2e35b8a3090dd7038&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F08f790529822720e7f9f138e73cb0a46f21fab75.jpg',
                            u_name: '奔跑吧兄弟',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 3,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=880c53d4cd4426cefc1152fc3c5adb20&imgtype=0&src=http%3A%2F%2Fp4.qhimg.com%2Ft01ae4a19ac3b456e47.jpg',
                            u_name: '三天打鱼',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 4,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=b8e29c8ecee8cd42be396083c39c80dc&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc259467d6ce4dde71190ef6dba.jpg',
                            u_name: '两天晒网',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 5,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=de644c9c32fe94452b5cde7c9e7f48d9&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D68b1ce20097b02080c9c37e557e9dee5%2F80cb39dbb6fd5266d6a1da91a818972bd50736a8.jpg',
                            u_name: '走马灯',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 6,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=65ef5793c38d9d5a28dd2c72a9d2ca5b&imgtype=0&src=http%3A%2F%2Fwenwen.soso.com%2Fp%2F20110307%2F20110307181210-1807453677.jpg',
                            u_name: '天分',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 7,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=51365f808a2baf8fa17ef575bd0c2aa9&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dd9dd8eaba1efce1bea7ec0ce9a61dfe8%2Ff31fbe096b63f6242252f45e8144ebf81a4ca364.jpg',
                            u_name: '啊哈哈哈哈或或或',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月1"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月2"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                        ,
                        {
                            u_id: 8,
                            u_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662782&di=d013d5257c041f0c66560e39597c76f9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda3f1b42b119ebc4c02d7e9db716e3ca%2Ffc1f4134970a304e861184ddd3c8a786c9175ce1.jpg',
                            u_name: '飞翔的荷兰人号',
                            u_seen_time: "12月21"
                        }
                    ]
                })
            });
            break;
    }

};
var a_string_of_li_index = 1;
var aso_index = 0;
/**
 * 谁看过我我看过谁被挡用户信息
 * @param wmb
 * @param a_string_of_li_index
 */
$(function () {
    wwb_all(0, 1);
})
function wwb_all(wmb, a_string_of_li_index) {
    wwb_pat_li_index = 0;
    this.wmb = wmb;
    $("#a-string-of-all .a-string-of li:nth-child(" + this.a_string_of_li_index + ") a").css({
        "font-weight": "",
        "color": "",
        "cursor": "",
        "text-decoration": ""
    });
    this.a_string_of_li_index = a_string_of_li_index;
    $("#a-string-of-all .a-string-of li:nth-child(" + a_string_of_li_index + ") a").css({
        "font-weight": "bold",
        "color": "#000000",
        "cursor": "default",
        "text-decoration": "none"
    });

    previous_next_reduction();
    var np = $(".np-all:eq(1) .np:eq(0)");
    np.append("<li v-for='(item,index) in items' v-if='index>=" + 0 + "&&index<" + 1 * 9 + "'><a href=''><img :src='item.u_img' alt=''/><span class='user_name'>" + '{{item.u_name}}' + "</span></a> <span class='wwp_time'>" + '{{item.u_seen_time}}' + "</span> </li>");
    init_body_right();
}
/**
 * 初始化上一页下一页
 */
function previous_next_reduction() {
    var np_li = $(".np-all:eq(1) .np:eq(0) li");
    np_li.remove();
    var np_all = document.getElementsByClassName("np-all")[1];
    var previous = np_all.getElementsByClassName("previous")[0].style.cssText = ";opacity:0.5;cursor: default;";
    var next = np_all.getElementsByClassName("next")[0].style.cssText = "";
}
/**
 * 初始化今日浏览,总浏览,被挡访客量
 */
$(function () {
    document.getElementById("ttb").innerText = "0";
    document.getElementById("always-browse").innerText = "891";
    document.getElementById("blocked-visitors").innerText = "185";
});
/**
 * 初始化礼物信息
 */
var gift_info_length = 0;
var gift_info_index = 0;
function gift_info_all() {
    var gift_info = new Vue({
        el: '#gift-info',
        data: ({
            items: [
                {
                    g_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                    g_name: '快快快',
                    g_fas: '最近7天看了你',
                    g_mode: '感谢来访'
                },
                {
                    g_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                    g_name: '快快快',
                    g_fas: '最近7天看了你',
                    g_mode: '生日快乐'
                },
                {
                    g_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                    g_name: '快快快',
                    g_fas: '最近7天看了你',
                    g_mode: '感谢来访'
                },
                {
                    g_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                    g_name: '快快快',
                    g_fas: '最近7天看了你',
                    g_mode: '感谢来访'
                }
            ]
        })
    });
    gift_info_length = gift_info.items.length;
}
/**
 * 向下点击礼物信息
 */
$(function () {
    gift_info_all();
    var gift = document.getElementById("gift");
    var previous = gift.getElementsByClassName("previous-next-page")[0].getElementsByClassName("previous")[0];
    previous.style.cssText = ";opacity:1;cursor: pointer;";
    gift.getElementsByClassName("previous-next-page")[0].getElementsByClassName("next")[0].onclick = function () {
        if ((gift_info_index + 1) * 3 < gift_info_length) {
            ++gift_info_index;
            next_page_all(2, 0, 0, 3, gift_info_index, gift_info_length, "next",true, "<li v-for='(item,index) in items' v-if='index>=" + (gift_info_index * 3) + "&&index<" + ((gift_info_index + 1 ) * 3) + "' > <a href='' class='fl'><img :src='item.g_img' alt=''/> </a> <div class='fl gift-user-name'> <a href='' :title='item.g_name'>" + '{{item.g_name}}' + "</a> <span class='c_7e'>" + '{{item.g_fas}}' + "</span> </div> <a href='' class='fr tyf-visiting'> <i class='ui-icon'></i> <span class='fas'>" + '{{item.g_mode}}' + "</span> </a> </li>");

        }else{
            gift_info_index = 0;
            next_page_all(2, 0, 0, 3, gift_info_index, gift_info_length, "next",true, "<li v-for='(item,index) in items' v-if='index>=" + (gift_info_index * 3) + "&&index<" + ((gift_info_index + 1 ) * 3) + "' > <a href='' class='fl'><img :src='item.g_img' alt=''/> </a> <div class='fl gift-user-name'> <a href='' :title='item.g_name'>" + '{{item.g_name}}' + "</a> <span class='c_7e'>" + '{{item.g_fas}}' + "</span> </div> <a href='' class='fr tyf-visiting'> <i class='ui-icon'></i> <span class='fas'>" + '{{item.g_mode}}' + "</span> </a> </li>");
        }
        gift_info_all();
    }
    previous.onclick = function () {
        if (gift_info_index > 0) {
            --gift_info_index;
            next_page_all(2, 0, 0, 3, gift_info_index, gift_info_length, "previous",true, "<li v-for='(item,index) in items' v-if='index>=" + (gift_info_index * 3) + "&&index<" + ((gift_info_index + 1 ) * 3) + "' > <a href='' class='fl'><img :src='item.g_img' alt=''/> </a> <div class='fl gift-user-name'> <a href='' :title='item.g_name'>" + '{{item.g_name}}' + "</a> <span class='c_7e'>" + '{{item.g_fas}}' + "</span> </div> <a href='' class='fr tyf-visiting'> <i class='ui-icon'></i> <span class='fas'>" + '{{item.g_mode}}' + "</span> </a> </li>");
        }else{
            gift_info_index = gift_info_length / 3 % 1 ? parseInt(gift_info_length / 3) : gift_info_length / 3;
            next_page_all(2, 0, 0, 3, gift_info_index, gift_info_length, "previous",true, "<li v-for='(item,index) in items' v-if='index>=" + (gift_info_index * 3) + "&&index<" + ((gift_info_index + 1 ) * 3) + "' > <a href='' class='fl'><img :src='item.g_img' alt=''/> </a> <div class='fl gift-user-name'> <a href='' :title='item.g_name'>" + '{{item.g_name}}' + "</a> <span class='c_7e'>" + '{{item.g_fas}}' + "</span> </div> <a href='' class='fr tyf-visiting'> <i class='ui-icon'></i> <span class='fas'>" + '{{item.g_mode}}' + "</span> </a> </li>");
        }
        gift_info_all();
    }
});
/**
 * 谁在意我我在意谁初始化信息
 */
$(function(){
    wi_info(true);
})
function wi_info(flag){
    document.getElementById("wi-info").innerHTML = "<li v-for='item in items' > <a href='' class='fl br-friends-img'><img :src='item.wi_img' alt=''/><b class='ranking'>"+'{{item.wi_ranking}}'+"</b><b class='floor'></b> </a> <div class='fl gift-user-name'> <a href='' :title='item.wi_name' class='wi_name'>"+'{{item.wi_name}}'+"</a> <a href='' class=''> <i class='ui-icon'></i><span>"+'{{item.wi_intimacy}}'+"</span> </a> </div> <a href='' class='fr tyf-visiting bg-f2'> <span class='fas'>详情</span> </a> </li>";
    if(flag){
        $("#wi .a-string-of li:nth-child(2) a").css({
            "font-weight": "",
            "color": "",
            "cursor": "",
            "text-decoration": ""
        });
        $("#wi .a-string-of li:nth-child(1) a").css({
            "font-weight": "bold",
            "color": "#000000",
            "cursor": "default",
            "text-decoration": "none"
        });
        var who_care_about_me = new Vue({
            el:'#wi-info',
            data:({
                items:[
                    { wi_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                        wi_name:'哈哈KKK',
                        wi_intimacy:'62',
                        wi_ranking:'1'},
                    { wi_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                        wi_name:'哈哈KKK',
                        wi_intimacy:'32',
                        wi_ranking:'2'},
                    { wi_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                        wi_name:'哈哈KKK',
                        wi_intimacy:'62',
                        wi_ranking:'3'}
                ]
            })
        });
    }else{
        $("#wi .a-string-of li:nth-child(1) a").css({
            "font-weight": "",
            "color": "",
            "cursor": "",
            "text-decoration": ""
        });
        $("#wi .a-string-of li:nth-child(2) a").css({
            "font-weight": "bold",
            "color": "#000000",
            "cursor": "default",
            "text-decoration": "none"
        });
        var i_care_about_who = new Vue({
            el:'#wi-info',
            data:({
                items:[
                    { wi_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                        wi_name:'哈哈KKK',
                        wi_intimacy:'62',
                        wi_ranking:'1'},
                    { wi_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                        wi_name:'哈哈KKK',
                        wi_intimacy:'2',
                        wi_ranking:'2'},
                    { wi_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                        wi_name:'哈哈KKK',
                        wi_intimacy:'6',
                        wi_ranking:'3'}
                ]
            })
        });
    }
}
/**
 * 猜你喜欢点击显示发表
 */
$(function(){
    var flag = true;
    var ful_iSayItToo = document.getElementById("ful-iSayItToo");
    var publish_expression_div = document.getElementById("publish-expression-div");
    ful_iSayItToo.onfocus = function(){
        this.setAttribute("placeholder","");
        publish_expression_div.style.display = "block";
        ful_iSayItToo.style.height = "70px";
    }
    ful_iSayItToo.onblur = function(){
        this.setAttribute("placeholder","我也来说一句");
        if(flag){
            publish_expression_div.style.display = "none";
            ful_iSayItToo.style.height = "";
        }
    }
    publish_expression_div.onmouseover = function(){
        flag = false;
        ful_iSayItToo.style.height = "70px";
    }
    publish_expression_div.onmouseout = function(){
        flag = true;
    }
    var timer;
    var expression_a1 = document.getElementById("expression").getElementsByTagName("a")[0];
    var expression_insert_the_expression = document.getElementById("expression").getElementsByClassName("insert-the-expression")[0];
    expression_a1.onmouseover = function(){
        clearTimeout(timer);
        expression_insert_the_expression.style.display = "block";
    };
    expression_a1.onmouseout = function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            expression_insert_the_expression.style.display = "none";
        },1000);
    }
});
/**
 * 猜你喜欢轮播图
 */
$(function(){
    var num = -1;
    document.getElementById("gyl-user-info").innerHTML = "<div v-for='(item,index) in items' v-if='index=="+(++num)+"' class='gyl-user-info'> <a href=''> <img :src='item.gyl_userImg' alt=''/> </a> <div><span class='user_name'><span class='gyl-friends-picture-name'>"+'{{item.gyl_userName}}'+"</span></span></div> </div>";
    var guess_you_like_roasting_length = gyl_user_info_all();
    document.getElementById("gul-right").onclick = function(){
        if((num + 1) * 1 < guess_you_like_roasting_length){
            document.getElementById("gyl-user-info").innerHTML = "<div v-for='(item,index) in items' v-if='index=="+(++num)+"' class='gyl-user-info'> <a href=''> <img :src='item.gyl_userImg' alt=''/> </a> <div><span class='user_name'><span class='gyl-friends-picture-name'>"+'{{item.gyl_userName}}'+"</span></span></div> </div>";
        }else{
            num = 0;
            document.getElementById("gyl-user-info").innerHTML = "<div v-for='(item,index) in items' v-if='index=="+num+"' class='gyl-user-info'> <a href=''> <img :src='item.gyl_userImg' alt=''/> </a> <div><span class='user_name'><span class='gyl-friends-picture-name'>"+'{{item.gyl_userName}}'+"</span></span></div> </div>";
        }
        gyl_user_info_all();
    };
    document.getElementById("gul-left").onclick = function(){
        if(num > 0){
            document.getElementById("gyl-user-info").innerHTML = "<div v-for='(item,index) in items' v-if='index=="+(--num)+"' class='gyl-user-info'> <a href=''> <img :src='item.gyl_userImg' alt=''/> </a> <div><span class='user_name'><span class='gyl-friends-picture-name'>"+'{{item.gyl_userName}}'+"</span></span></div> </div>";
        }else{
            num = guess_you_like_roasting_length-1;
            document.getElementById("gyl-user-info").innerHTML = "<div v-for='(item,index) in items' v-if='index=="+num+"' class='gyl-user-info'> <a href=''> <img :src='item.gyl_userImg' alt=''/> </a> <div><span class='user_name'><span class='gyl-friends-picture-name'>"+'{{item.gyl_userName}}'+"</span></span></div> </div>";
        }
        gyl_user_info_all();
    };
});
function gyl_user_info_all(){
    var guess_you_like_roasting = new Vue({
        el:'#gyl-user-info',
        data:({
            items:[
                {
                    gyl_userImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                    gyl_userName:'比的布拉格'
                },
                {
                    gyl_userImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                    gyl_userName:'rr'
                },
                {
                    gyl_userImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506771662783&di=51ec049b1875bc846df3bfec90675e9a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D97b9b3e4b4b7d0a27b9c0c99fedf5a3f%2F562c11dfa9ec8a1359aa88b6f103918fa0ecc030.jpg',
                    gyl_userName:'xxx'
                }
            ]
        })
    });
    return guess_you_like_roasting.items.length;
}
