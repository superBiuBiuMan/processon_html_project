(function (window) {
    //导航演示栏
    var indexDH = 0
    //导航
    var $nav = $(".animation-show-all .nav-bar .nav");
    var $navLi = $(".animation-show-all .nav-bar .nav>li")
    //动画展示区
    var $showAniDiv = $(".animation-show-all .show-all >div");
    //添加取消active
    $nav.delegate("li", "click", function () {
        // 取消上一个active
        $navLi.eq(indexDH).removeClass("active");
        // 设置上一个隐藏
        $showAniDiv.eq(indexDH).css("display", "none");
        // 更新导航索引
        indexDH = $(this).index();
        // 添加active
        $(this).addClass("active");
        //设置当前为显示
        $showAniDiv.eq(indexDH).css("display", "")
        //更新update()
        updateItemClick();
    });

    updateItemClick();

    function updateItemClick() {
        //右边白块单击样式
        let $items = $showAniDiv.eq(indexDH).find(".select > .select-item");
        //对应的动画图片
        let $picItems = $showAniDiv.eq(indexDH).find(".animation-show > .pic-item");



        $items.click(function () {
            //白块操作
            //取消其他的active
            $items.removeClass("active");
            //添加点击白块的样式
            $(this).addClass("active");

            //隐藏其他白块
            $picItems.removeClass("active");

            //显示当前白块对应图片
            $picItems.eq($(this).index()).addClass("active");

        });
    }
})(window);