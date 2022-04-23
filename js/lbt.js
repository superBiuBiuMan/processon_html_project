(function (window) {
    //轮播图item
    var $lbtItems = $(".lbt .banner-wrap > .banner_item");
    //轮播图导航点
    var $dots = $(".lbt .banner-wrap > .banner_foot > div");
    //新的索引
    var newIndex = 0;
    //旧的索引
    var oldIndex = 0;
    //hover所需
    var $lbtBox = $(".lbt .banner_box");

    // 滑动区域取消默认行为 PC端
    var lbt = document.querySelector(".lbt");
    lbt.onmousedown = function (event) {
        event = event || window.event;
        //最初始的位置
        let originX = event.clientX;
        let afterX;
        document.onmouseup = function (event) {
            event = event || window.event;
            afterX = event.clientX;
            // 10为一个容差值
            if (originX - afterX > 10) {
                //左滑
                console.log("右滑");
                newIndex++;
                newIndex %= $dots.length;
                update();
            } else if (originX - afterX < -10) {
                //右滑
                console.log("左滑");
                newIndex--;
                newIndex %= $dots.length;
                update();
            }
            // console.log(originX, afterX);
        }



        event.preventDefault();
        return false;
    }

    // 移动端滑动
    bindSwiperEvent(lbt, function (event) {
        console.log("左滑");
        //先清除浮动下
        clearInterval(id);
        newIndex++;
        newIndex %= $dots.length;
        update(function () {
            id = setInterval(function () {
                newIndex++;
                newIndex %= $dots.length;
                update();
            }, 2000);
        });
    }, function (event) {
        console.log("右滑");
        //先清除浮动下
        clearInterval(id);
        newIndex--;
        newIndex %= $dots.length;
        update(function () {
            id = setInterval(function () {
                newIndex++;
                newIndex %= $dots.length;
                update();
            }, 2000);
        });
    })

    //移动端
    // lbt.addEventListener("touchstart", function (event) {
    //     clearInterval(id);
    //     //最初始的位置
    //     let originX = event.touches[0].clientX;
    //     let afterX;
    //     document.addEventListener("touchend", function (event) {
    //         afterX = event.changedTouches[0].clientX;
    //         // console.log(event.changedTouches[0].clientX);
    //         // 10为一个容差值
    //         if (originX - afterX > 10) {
    //             console.log("右滑");
    //             newIndex++;
    //             newIndex %= $dots.length;
    //             update();
    //         } else if (originX - afterX < -10) {
    //             console.log("左滑");
    //             newIndex--;
    //             newIndex %= $dots.length;
    //             update();
    //         }
    //         //清除自动轮播的
    //         clearInterval(id);
    //         id = setInterval(function () {
    //             newIndex++;
    //             newIndex %= $dots.length;
    //             update();
    //         }, 4000);
    //         event.preventDefault();
    //         return false;
    //     })
    //     event.preventDefault();
    //     return false;
    // })


    // 轮播图点点击事件
    $dots.click(function () {
        newIndex = $(this).index();
        update();
    });

    // 自动轮播
    var id = setInterval(function () {
        newIndex++;
        newIndex %= $dots.length;
        update();
    }, 2000);
    // 鼠标经过停止/开始轮播
    $lbtBox.hover(function () {
        clearInterval(id);
    }, function () {
        clearInterval(id);
        id = setInterval(function () {
            newIndex++;
            newIndex %= $dots.length;
            update();
        }, 4000);
    });

    /**
     * 
     * @param 
     *  callback回调函数
     */
    function update(callback) {
        //兼容IE 默认值写法
        callback = typeof callback === 'undefined' ? null : callback;
        // 获取之前的item
        var $selectItemBef = $lbtItems.eq(oldIndex);
        //隐藏item
        $selectItemBef.removeClass("active");
        //移除导航点
        $dots.eq(oldIndex).removeClass("active");
        //获取现在的item
        var $selectItemNow = $lbtItems.eq(newIndex);
        // 显示item
        $selectItemNow.addClass("active");
        //添加导航点
        $dots.eq(newIndex).addClass("active");
        oldIndex = newIndex;

        callback === null ? callback : callback();
    }

    /**
     * @description 实现渐渐移出
     * @param
     *  obj移动对象
     *  distance 移动距离 
     *  speed 速度
     *  time持续时间
     * @return 定时器索引
     */
    function execuMoOut(obj, distance, speed, time) {
        //文字的
        let opa = 1;
        let current = 0;
        // 头像的参数
        let speedT = 1;
        let currentT = 0;
        let opaT = 1;
        let nextObj = obj.next();
        var id = setInterval(function () {
            current -= speed;
            opa -= 0.02;
            if (current <= distance || opa <= 0) {
                clearInterval(id);
            }
            //图片的
            if (current <= -20) {
                // 开始执行
                currentT -= speedT;
                opaT -= 0.03;
                nextObj.css({
                    "left": currentT,
                    "opacity": opaT
                });
            }
            //文字的
            obj.css({
                "left": current,
                "opacity": opa
            });
        }, time);
        return id;
    }


    //移进 obj为文本节点
    function execuMoIn(obj, time) {
        //获取外壳
        let $item = obj.parent();
        //获取头像
        let $picT = obj.next();

        let currLeft = 100; //当前的left
        let currLeftT = 100; //头像的left

        let opa = 0; //当前透明度
        let opaT = 0; //头像的透明度
        //left一直减少
        let id = setInterval(function () {
            opa += 0.1;
            currLeft -= 0.5;
            if (currLeft <= 50 || opa >= 1) {
                clearInterval(id);
                //
                currLeft = 50;
                opa = 1;
                opaT = 1;
                currLeftT = 50;
                // $item.css("display", "block");
                $item.addClass("active");
                obj.css({
                    "left": 50 + "%",
                    "opacity": 1
                });
                //设置外壳left
                $item.css({
                    "left": 50 + "%",
                    "opacity": 1,
                    "transform": "translateX(-50%)"
                });
                $picT.css({
                    "left": 50 + "%",
                    "opacity": 1
                });
            }

            //设置文字left的值
            obj.css({
                "left": currLeft + "%",
                "opacity": opa
            })
            //设置外壳left
            $item.css({
                "left": currLeft + "%",
                "opacity": opa
            })
            //百分之80的时候,头像开始动画
            if (currLeft <= 80 && opa != 1) {
                opaT += 0.1;
                currLeftT -= 4;
                $picT.css({
                    "left": currLeftT + "%",
                    "opacity": opaT
                })
            }

        }, time);


        // return id;
    }


    //滑动事件
    function bindSwiperEvent(dom, leftCallBack, rightCallback) {
        // 判断手势的条件
        // 必须滑动 滑动距离超过10px
        var isMove = false;
        var startX = 0;
        var distanceX = 0;

        dom.addEventListener('touchstart', function (e) {
            startX = e.touches[0].pageX;
        })

        dom.addEventListener('touchmove', function (e) {
            isMove = true;
            var moveX = e.touches[0].pageX;
            distanceX = moveX - startX;
        })

        dom.addEventListener('touchend', function (e) {
            if (isMove && Math.abs(distanceX) >= 10) {
                // 右滑动
                if (distanceX > 0) {
                    rightCallback && rightCallback.call(this, e);
                }
                // 左滑动
                else {
                    leftCallBack && leftCallBack.call(this, e);
                }
            }
            // 重置参数
            isMove = false;
            startX = 0;
            distanceX = 0;
        })
    }
})(window);