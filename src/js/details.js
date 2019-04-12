jQuery(function ($) {
    //1.导航栏显示
    $(".list").on("mouseover", "li", function () {
        if ($(this).hasClass("myweb")) {
            $(".drugWeb").show();
        }
        else if ($(this).hasClass("phoneCode")) {
            $(".code2D").show();
        }
        else if ($(this).hasClass("webGuide")) {
            $(".webNav").show();
        }
        else {
            $(this).addClass("whiteBG");
            // console.log($(this));
        }
    }).on("mouseout", "li", function () {
        $(".drugWeb").hide();
        $(".code2D").hide();
        $(".webNav").hide();
        $(this).removeClass("whiteBG");
    })
    //2.移动到display仍然要显示
    $(".hoverNav").on("mouseover", "div", function () {
        if ($(this).hasClass("drugWeb")) {
            $(".drugWeb").show();
        }
        else if ($(this).hasClass("code2D")) {
            $(".code2D").show();
        }
        else if ($(this).hasClass("webNav")) {
            $(".webNav").show();
        }
        // console.log($(this));
    })
        //3. highBlue
        .on("mouseover", "li", function () {
            $(this).css({
                cursor: "pointer",
            })
            // console.log($(this));
            if (!$(this).hasClass("highRed")) {
                $(this).addClass("highBlue");
            }
        }).on("mouseout", function () {
            $(".drugWeb").hide();
            $(".code2D").hide();
            $(".webNav").hide();
        }).on("mouseout", "li", function () {
            $(this).removeClass("highBlue");
        })
    //4.频繁词汇样式
    $(".frequentWord").on("mouseover", "li", function () {
        $(this).addClass("highRed").css({
            cursor: "pointer",
        });
    }).on("mouseout", "li", function () {
        $(this).removeClass("highRed");
    })
    //main区域-->start
    var params = location.search.slice(1);
    params = params.split("=");
    var guid = params[1] * 1;
    $.ajax({
        type: "get",
        url: "api/details.php",
        data: { "guid": guid },
        success: function (res) {
            res = JSON.parse(res).goodslist;
            console.log(res);
            //导航条渲染:
            $(".drugInfo").text("医药网>" + res[0].sectionDescription + ">" + res[0].diseaseType + ">" + res[0].brand + ">" + res[0].goodsName);
            //放大镜渲染
            //大图
            var $bigImg = $("<img/>").prop("src", res[0].imgUrl).attr("jqimg", res[0].imgUrl).appendTo($(".jqzoom"));
            //小图
            // for(let i=0;i<5;i++){
            //     let minImg = $("<img/>").prop("src",res[0].imgUrl).appendTo($(".b_container"));
            // }
            // // /*使用jqzoom*/
            // // //放大镜实现js
            // $(".jqzoom").jqueryzoom({
            //     xzoom: 400, //放大图的宽度(默认是 200)
            //     yzoom: 400, //放大图的高度(默认是 200)
            //     offset: 10, //离原图的距离(默认是 10)
            //     position: "right", //放大图的定位(默认是 "right")
            //     preload: 1
            // });
            // //底部图片hover切换实现js
            // $('.b_container img').hover(function () {
            //     $('.jqzoom img').attr('src', $(this).attr('src'));
            //     $('.jqzoom img').attr('jqimg', $(this).attr('src'));
            // }, function () {
            //     $.noop();
            // });
            let $h = $("<h1/>").text(res[0].goodsName).insertBefore($(".goodsPrice"));
            let $p2 = $("<p/>").text("用途:" + res[0].diseaseType).insertAfter($h);
            let $p3 = $("<p/>").text("商品编码:guid" + res[0].guid).insertAfter($p2);
            let $p4 = $("<p/>").text("生产厂家:" + res[0].brand).insertAfter($p3);
            let $p5 = $("<span/>").text("￥" + res[0].price).insertAfter($(".sales")).addClass("redColor");


        }
    })
    //用户名显示
    function unameRender() {
        if ($.cookie("user")) {
            $(".user").addClass("login").html('<span>欢迎!' + $.cookie("user") + '</span>&nbsp;&nbsp;<span class="logout" style="color:orange;">退出</span>');
        }
        else{
            $(".user").removeClass("login").html("请登录");
        }
        console.log($.cookie("user"));
    }
    unameRender();
    //用户退出
    $(".logout").on("click", function () {
        // $.cookie("user", null);
        Cookie.removeCookie("user","/")
        location.href = "html/login.html";
    })
    //用户登陆
    $(".user").on("click", function () {
        location.href = "html/login.html";
    })
    //用户注册
    $(".register").on("click", function () {
        location.href = "html/register.html";
    })
    //数量增减
    $(".num").on("mouseover", "span", function () {
        $(this).css({ "cursor": "pointer" });
    })//手型显示
        .on("click", "span", function (e) {
            e.preventDefault();
            if ($(this).hasClass("minus")) {
                if ($("#numInp")[0].value > 1) {
                    $("#numInp")[0].value--;
                }
                else if ($("#numInp")[0].value <= 1) {
                    $("#numInp")[0].value = 1;
                }
            }
            if ($(this).hasClass("plus")) {
                $("#numInp")[0].value++;
            }
        })
        //购物车数量显示：发送请求mySQL数据,渲染
        $.ajax({
            type: "get",
            url: "api/details.php",
            data: { "msg": "cartNum", "uname": $.cookie("user") },
            success: function (res) {
                res = JSON.parse(res).cartlist;
                var num = 0;
                res.map(function (item, idx) {
                    num += item.qty * 1;
                })
                $(".cart_num").text(num);
                console.log(res,num);
            }
        })
    //加入购物车
    $("#add_cart").on("click", function () {
        //判断是否登陆
        if ($(".user").hasClass("login")) {
            // 前端直接渲染
            // var prevNum = $(".cart_num").text() *1;
            // var curNum = prevNum + $("#numInp")[0].value*1;
            // $(".cart_num").text(curNum);
            //数据请求
            var guid = location.search.slice(1).split("=")[1];
            var qty = $("#numInp").val() * 1;
            $.ajax({
                type: "get",
                url: "api/details_cart.php",
                data: {
                    "uname": $.cookie("user"),
                    "guid": guid,
                    "qty": qty,
                },
                success: function (res) {
                    res = JSON.parse(res).goodslist;
                    var num = 0;
                    res.map(function (item, idx) {
                        num += item.qty * 1;
                    })
                    $(".cart_num").text(num);
                    console.log(res, num);
                }
            })

        }
        else {
            alert("请先登陆后再添加商品~！")
        }
    })








})