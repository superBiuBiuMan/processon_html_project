(function (window) {
    //加载完成后
    window.onload = function () {
        // 模板库滚动动画
        var $slideAll = $(".advantage-2-wrap .pic .slide");
        var $slide_1 = $slideAll.eq(0);
        var $slidePicHeight_1 = -1 * $slide_1.children("img:eq(0)").height(); //获取渲染的大小
        console.log($slidePicHeight_1);

        var $slide_2 = $slideAll.eq(1);
        var $slidePicHeight_2 = -1 * $slide_2.children("img:eq(0)").height(); //获取渲染的大小
        $slide_2.css("top", $slidePicHeight_2 / 2);


        var $slide_3 = $slideAll.eq(2);
        var $slidePicHeight_3 = -1 * $slide_3.children("img:eq(0)").height(); //获取渲染的大小


        var $slide_4 = $slideAll.eq(3);
        var $slidePicHeight_4 = -1 * $slide_4.children("img:eq(0)").height(); //获取渲染的大小
        $slide_4.css("top", $slidePicHeight_4 / 2);

        // 上滚
        slideMove($slide_1, true, 1000 / 50, 1, $slidePicHeight_1 - 50);
        slideMove($slide_3, true, 1000 / 40, 1, $slidePicHeight_3 - 50);
        //下滚
        slideMove($slide_2, false, 1000 / 50, 1, $slidePicHeight_2);
        slideMove($slide_4, false, 1000 / 50, 1, $slidePicHeight_4);
    }


    /**
     * @description 移动功能
     * @param
     *      obj jQUery移动对象
     *      dire 向上滚还是向下滚  true 向上滚  false向下滚
     *      second 每秒执行多少次  speed<0 -    >0  +
     *      speed 速度
     *      end回滚终点
     * @return timer 循环定时器索引
     */
    function slideMove(obj, dire, second, speed, end) {
        //设置滚动方向
        dire ? speed *= -1 : speed;
        //当前位置
        let current;
        //重置位置
        let resetPosition = dire ? 0 : end;
        //减少位置
        // let reduceTop = dire ? -50 : 0;
        let reduceTop = dire ? -50 : 0;
        let timer = setInterval(function () {
            current = parseInt(obj.css("top"));
            current += speed;
            //是否达到回滚距离
            //向下滚动 -1245为终点,   当第一次触发current>=1的时候,终点修改为-1245-50=1249 触发current<=end事件
            if (current <= end || current >= 0) {
                current = resetPosition + reduceTop;
            }
            //设置值
            obj.css("top", current);
        }, second);

        return timer;
    }


})(window);