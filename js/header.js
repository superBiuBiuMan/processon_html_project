(function (window) {
    // 单击导航,显示导航
    let $funZo=$(".head-wrap .function-zone");
    $(".head-wrap .menu-dh").click(function () {
        // 不可使用toggle
        if($funZo.css("display")=='none'){
            $funZo.css("display","block");
        }else{
            $funZo.css("display","");
        }
    });
    //进入我的文件样hover
    $(".head-wrap .enter-file >a").hover(function(){
        $(this).css({"opacity":"0.7","backgroundColor":"white","color":"#0571dd"});
    },function(){
        $(this).css({"opacity":"1","backgroundColor":"#067bef","color":"white"});
    });

})(window);