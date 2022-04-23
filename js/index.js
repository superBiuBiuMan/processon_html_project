// 滚动
var $headWrap = $(".head-wrap");
var $headCloseWrap = $(".head-close-wrap");
var $myFile = $(".head-wrap .enter-file>a");
$(window).scroll(function () {
    //用户滚动距离
    let userScroll = $(window).scrollTop();
    // console.log(userScroll);
    // >=70
    if (userScroll >= 70) {
        // 固定头部
        $headWrap.css("position", "fixed");
        // 设置间距,因为头部脱离文档流
        $headCloseWrap.css("margin-top", "100px");
        // 设置"进入我的文件样式"
        // >=700
        if (userScroll >= 700) {
            $myFile.css({
                "backgroundColor": "#067bef",
                "color": "white"
            });
            // >=3390测试
            if (userScroll >= 3390) {
                // 到达滚动显示区域
                setPosition();
            }

        } else {
            $myFile.css({
                "backgroundColor": "white",
                "color": "#007eef"
            });
        }
    }
});

// setPosition();
// 设置各个图标的位置功能
function setPosition() {
    $items = $(".logo-wrap .show-wrap > div[class^='index']");
    var cssStyle = {
        0: {
            top: "98px",
            left: '162px',
            opacity: "0.899999"
        },
        1: {
            top: "-89px",
            left: "-342px",
            opacity: "0.899999"
        },
        2: {
            top: "-156px",
            left: "121px",
            opacity: "0.899999"
        },
        3: {
            // top: "56px",
            top: "100px",
            // left: "390px",
            left: "320px",
            opacity: "0.899999"
        },
        4: {
            // top: "2px",
            // left: "277px",
            top: "-133px",
            left: "282px",
            opacity: "0.899999"
        },
        5: {
            top: "208px",
            left: "-83px",
            opacity: "0.899999"
        },
        6: {
            top: "-215px",
            left: "-73px",
            opacity: "0.899999"
        },
        7: {
            top: "26px",
            left: "313px",
            opacity: "0.899999"
        },
        8: {
            top: "80px",
            left: "-357px",
            opacity: "0.899999"
        },
        9: {
            top: "-90px",
            left: "110px",
            opacity: "0.899999"
        },
        10: {
            top: "0px",
            left: "-430px",
            opacity: "0.899999"
        },
        11: {
            top: "157px",
            left: "71px",
            opacity: "0.899999"
        },
        12: {
            top: "-155px",
            left: "-237px",
            opacity: "0.899999"
        },
        13: {
            top: "144px",
            left: "-181px",
            opacity: "0.899999"
        },
        14: {
            top: "-110px",
            left: "-96px",
            opacity: "0.899999"
        },
        15: {
            id: "15",
            top: "150px",
            left: "-350px",
            opacity: "0.899999"
        },
        16: {
            top: "185px",
            left: "228px",
            opacity: "0.899999"
        },
        17: {
            top: "-50px",
            left: "306px",
            opacity: "0.899999"
        }
    };
    let indexTemp = 0;
    //为每一个设置样式
    $items.each(function () {
        $(this).css(cssStyle[indexTemp++]);
    });

}

//浮动通知被单击
$(".float-tz .close").click(function () {
    this.parentNode.style.display = "none";
});


//窗口大小被改变
window.onresize = function () {
    let userScroll = $(window).scrollTop();
    // 再次更改,防止没有触发
    if (userScroll >= 3390) {
        // 到达滚动显示区域
        setPosition();
    }
    isMobile();
};

//判断是否是手机端,如果是 "进入我的文件改为"立即下载"
isMobile();
function isMobile() {
    let mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    //true 为手机 false不为手机
    let mobile_flag = false;
    //获取navigator对象
    let userAgentInfo = navigator.userAgent;
    //根据userAgent判断是否是手机
    for (let v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    let $changA = $(".head-close-wrap .special");
    if (mobile_flag) {
        //为真   修改字体
        //更改里面内容
        $changA.html("立即下载");
        //更改css样式
        $changA.css({
            "backgroundColor": "#067bef",
            "color": "white"
        });
    } else {
        //为假   还原字体
        //更改里面内容
        $changA.html("进入我的文件");
        //更改css样式
        $changA.css({
            "backgroundColor": "",
            "color": ""
        });
    }
}