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
        console.log($(this));
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
    //5. 轮播图
    //5.1轮播圈圈生成
    var $ul = $('.carousel');
    function dotRender() {
        var $p = $('<p/>').insertAfter($ul);
        for (let i = 0; i < $ul.children().length; i++) {
            var $span = $('<span/>').appendTo($p).css({
                'display': 'inline-block',
                'height': '10px',
                'width': '10px',
                'border-radius': '5px',
                'border': '1px solid #58bc58',
                'position': 'absolute',
                'z-index': '1',
                'top': '400px',
                'left': `5${(i + 2) * 15}px`,
            });
        }
        $p.children().eq(0).addClass('highlight');
    }
    dotRender();
    var $p = $ul.next('p');
    // console.log($p);
    //5.2左右键生成
    // $left = $('<span/>').insertAfter($p).addClass('left');
    // $right = $('<span/>').insertAfter($left).addClass('right');
    //5.3自动轮播及高亮
    var idx = 0;
    function carousel() {
        var len = $ul.children().length;
        $p.children().removeClass('highlight');
        if (idx == len) {
            idx = 1;
            $ul[0].style.left = -340 +  'px';
            // console.log($ul[0]);
            // $ul.animate({ 'left': -1920 * 1 - 340 }, 300);
            // $p.children().eq(0).addClass('highlight');
        }
        if (idx == len-1) {
        // $ul.animate({ 'left': -1920 * idx - 340 }, 300);
        $p.children().eq(0).addClass('highlight');
        }
        else {
        // $ul.animate({ 'left': -1920 * idx - 340 }, 300);
        $p.children().eq(idx).addClass('highlight');
        }
        $ul.animate({ 'left': -1920 * idx - 340 }, 300);
        // bufferAnimation($ul[0],{left:-1920*idx-340},30);
    }
    function autoPlay() {
        idx = idx + 1;
        carousel();
    }
    // console.log($ul,$ul.eq(0));
    $ul.timer = setInterval(autoPlay, 1000);
    //5.4移入暂停自动轮播并显示左右切换键:
    $('.banner').on('mouseover', function () {
        clearInterval($ul.timer);
    })
        .on('mouseout', function () {
            clearInterval($ul.timer);
            $ul.timer = setInterval(autoPlay, 1000);
        })
    //5.5 点击圆点跳转
    $p.on('click', 'span', function () {
        $p.children().removeClass('highlight');
        $(this).addClass('highlight');
        idx = $(this).index();
        carousel();
        console.log($(this).index());
    })
    //6.公告栏动画
    //6.1 棕色高亮
    $(".title").on("mouseover","h4",function(){
        $(".title").children("h4").removeClass("highBrown");
        $(this).addClass("highBrown");
        if($(this).hasClass("announce")){
            $(".notice").show();
            $(".serve").hide();
        }
        else if($(this).hasClass("service")){
            $(".serve").show();
            $(".notice").hide();
        }
    })
    //6.2 红色高亮
    $(".notice").on("mouseover","p",function(){
        $(".notice").children("p").removeClass("highRed");
        $(this).addClass("highRed").css({
            "cursor":"pointer",
        });
    })
    $(".serve").on("mouseover","li",function(){
        // $(".serve").find("li").removeClass("highRed");
        $(this).css({
            "cursor":"pointer",
        });
    })
    $(".more").on("mouseover","li",function(){
        // $(".more").find("li").removeClass("highRed");
        $(this).css({
            "cursor":"pointer",
        });
    })
    //7.  3级导航动画
    $("#guide").on("mouseover","li",function(){
        $("#guide").children("li").removeClass("highBlue").children("a").css({
            "color":"#fff",
        });
        // $(".nav3").hide();
        $(this).addClass("highBlue").children("a").css({
            "color":"#086AB3",
        });
        $(".nav3").show().on("mouseover","li",function(){
            $(".nav3").find("li").removeClass("highBlue");
            $(this).addClass("highBlue");
        });
    })
    $(".nav3").on("mouseover",function(){
        $(".nav3").show();
    })
    $(".nav3").on("mouseout",function(){
        $(".nav3").hide();
        $(".nav3").find("li").removeClass("highBlue");
        $("#guide").children("li").removeClass("highBlue").children("a").css({
            "color":"#fff",
        });
    })


})