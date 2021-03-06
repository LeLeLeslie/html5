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
    //商品详情显示
    $.ajax({
        type: "get",
        url: "api/details.php",
        data: { "guid": guid },
        success: function (res) {
            res = JSON.parse(res).goodslist;
            console.log(res);
            //导航条渲染:
            $(".drugInfo").on("click",function(){
                location.href="html/goodsList.html";
            }).text("医药网>" + res[0].sectionDescription + ">" + res[0].diseaseType + ">" + res[0].brand + ">" + res[0].goodsName);
            //放大镜插件-->琨/李
            $(".containerBig").fangda($(".containerBig"), {      //($(".goods_img")为放置原图、小图、放大图的外层盒子
                minPlace: 'bottom',                   //小图位置、left、top、right、默认bottom

                // position: "inner",                     //放大图位置,不写默认在原图旁边，inner为原图内展示

                fangda: [{                           //放大盒子属性，可写类名，样式
                    width: 400,
                    height: 400,
                    left:350,
                    top:70,
                }],
                big: [{                              //原图盒子属性，可写类名，样式,放置的图片数组
                    width: 300,
                    height: 300,
                    imgsrc:[res[0].imgUrl],
                    overflow: "hidden",
                }],
                min: [{                               //小图片盒子属性，宽高为小图的，可写类名，样式,放置的图片数组
                    width: 50,
                    height: 50,
                    class: "kkkk",
                }],
                move: [{
                    width: 200,
                    height: 200,
                    position: "absolute",
                    display: "none",
                    background: 'red',
                    opacity: 0.5
                }],
                // imgsrc: ['images/g1.jpg', 'images/g2.jpg', 'images/g3.jpg', 'images/g4.jpg'],            //放置的图片数组,优先级低于big[]和min[]
            });
            let $h = $("<h1/>").text(res[0].goodsName).insertBefore($(".goodsPrice"));
            let $p2 = $("<p/>").text("用途:" + res[0].diseaseType).insertAfter($h);
            let $p3 = $("<p/>").text("商品编码:guid" + res[0].guid).insertAfter($p2);
            let $p4 = $("<p/>").text("生产厂家:" + res[0].brand).insertAfter($p3);
            let $p5 = $("<span/>").text("￥" + res[0].price).insertAfter($(".sales")).addClass("redColor");


        }
    })
    //购物车显示
    $(".message_list").on("click", function () {
        if ($(".user").hasClass("login")) {
            $(".rightArea").show();
            $(".user").removeClass("login");
        }
        else {
            $(".rightArea").hide();
            $(".user").addClass("login");
        }
    })
    //用户名显示
    function unameRender() {
        if ($.cookie("user")) {
            $(".user").addClass("login").html('<span>欢迎!' + $.cookie("user") + '</span>&nbsp;&nbsp;<span class="logout" style="color:orange;">退出</span>');
        }
        else {
            $(".user").removeClass("login").html("请登录");
        }
        console.log($.cookie("user"));
    }
    unameRender();
    //用户退出
    $(".logout").on("click", function () {
        // $.cookie("user", null);
        Cookie.removeCookie("user", "/")//利用common.js删除cookie
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
    //2.1 购物车创建li
    function liMaker(res, num, parent, begin) {
        init = begin ? begin : 0;
        parent.html('');
        // console.log(init,begin);
        for (let i = init; i < num; i++) {
            var $a = $('<a/>').appendTo(parent).attr("href", "html/goodsList.html").css({
                "display": "inline-block",
            });
            var $li = $('<li/>').appendTo($a).attr("guid", res[i].guid);
            var $div = $('<div/>').appendTo($li);
            var $img = $('<img/>').appendTo($div).prop('src', res[i].imgUrl).addClass("expand");
            // var $li = $('<li/>').appendTo($li);
            var $p1 = $('<p/>').appendTo($li).text(res[i].goodsName);
            var $p2 = $('<p/>').appendTo($li);
            var $s1 = $("<span/>").appendTo($p2).html('￥' + res[i].price + "&nbsp;")
            var $s2 = $("<span/>").appendTo($p2).text('x' + res[i].qty).css({
                "color": "red",
            });
        }
        // parent.children('li').addClass('fl').css({
        // "text-align": "center",
        // });//使得元素左浮
    }
    //购物车数量显示：发送请求mySQL数据,渲染
    function cartNumRender() {
        $.ajax({
            type: "get",
            url: "api/details.php",
            data: { "msg": "cartNum", "uname": $.cookie("user") },
            success: function (res) {
                res = JSON.parse(res).cartlist;
                //显示购物车商品数量 //显示总价:
                var total = 0;
                var num = 0;
                res.map(function (item, idx) {
                    num += item.qty * 1;
                    total = total + item.qty * item.price;
                    console.log(total);
                })
                $(".cart_num").text(num);
                $(".totalPrice_s").html(res.length + '件商品,共:<br/> <span style="color:red;">' + total + '元</span>');
                //显示购物车商品
                liMaker(res, res.length, $(".rightArea ul"));
                console.log(res, num);
            }
        })
    }
    $.cookie("user") ? cartNumRender() : 0;
    //加入购物车
    $("#add_cart").on("click", function () {
        //判断是否登陆
        if ($.cookie("user")) {
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
                    console.log(res);
                    //显示购物车商品数量 //显示总价:
                    var total = 0;
                    var num = 0;
                    res.forEach(function (item, idx) {
                        num += item.qty * 1;
                        total = total + item.qty * item.price;
                        console.log(total);
                    })
                    $(".cart_num").text(num);
                    $(".totalPrice_s").html(res.length + '件商品,共:<br/> <span style="color:red;">' + total + '元</span>');
                    // $(".totalPrice_s").html(res.length + '件商品,共:<br/> <span style="color:red;">' + total + '</span>');
                    //显示购物车商品
                    liMaker(res, res.length, $(".rightArea ul"));
                    console.log(res, num);
                }
            })

        }
        else {
            alert("请先登陆后再添加商品~！")
        }
    })









})