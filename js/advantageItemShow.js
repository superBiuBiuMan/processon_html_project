(function (window) {
    //设备列表items
    var $items = $(".more-device-wrap .device>div");
    //PC端鼠标经过显示隐藏
    $items.hover(function () {
        //先设置显示,再慢慢设置透明度显示出来
        // let $temp = $(this).find(".info-wrap");
        // $temp.css("display", "block");
        // $temp.animate({
        //     opacity: "1"
        // }, 300);
        $(this).find(".info-wrap").stop().css("display", "block").animate({
            "opacity": "1"
        }, 700);
        // $temp.css("display", "block");
        // $temp.animate({
        //     opacity: "1"
        // }, 300);

    }, function () {
        //先设置透明度,慢慢消失,然后在回调函数中隐藏
        $(this).find(".info-wrap").stop().animate({
            "opacity": "0"
        }, 700, function () {
            $(this).css("display", "none");
        });
    });
    // 移动端单击显示二级
    $items.click(function () {
        let $temp = $(this).find(".info-wrap");
        $temp.css("display", "block");
        $temp.animate({
            opacity: "1"
        }, 700);
    });
})(window);