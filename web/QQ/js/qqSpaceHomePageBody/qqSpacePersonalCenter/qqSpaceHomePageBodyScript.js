/**
 * Created by 王旭 on 2017/10/8.
 */

/**
 * 好友动态
 */
$(function () {
    $.ajax({
        url: 'http://localhost:63345/QQ/html/qqSpaceHomePageBody/qqSpacePersonalCenter/qqSpaceBodyCenter/qqSpacePublishedTellMeAbout.html',
        type: "get",
        async: true,
        dataType: 'html',
        success: function (data) {
            $("#dynamics").html(data);
        }
    });
    $.ajax({
        url: 'http://localhost:63345/QQ/html/qqSpaceHomePageBody/qqSpacePersonalCenter/qqSpaceBodyRight/qqSpaceMyState.html',
        type: "get",
        async: true,
        dataType: 'html',
        success: function (data) {
            $("#view-info").html(data);
        }
    });
});
$(function () {
    $(document).on("click", "#hp", function () {
        document.getElementById("cwf").style.display = "none";
    });
});
/**
 * 左下角广告栏动态
 */
$(function () {
    $(document).on("mouseover", ".ae-nav", function () {
        $(".ae-nav i:nth-child(1)").css("opacity", "0");
    });
    $(document).on("mouseout", ".ae-nav", function () {
        $(".ae-nav i:nth-child(1)").css("opacity", "1");
    });
});
/**
 * 关闭左下角广告
 */
$(function () {
    $(document).on("click", "#ae-esc", function () {
        document.getElementById("ae").style.display = "none";
        document.getElementById("ae-esc").style.display = "none";
        document.getElementById("ae-nav").style.display = "none";
    });
});

