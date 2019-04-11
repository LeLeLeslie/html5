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
    //5. 2级导航、3级导航显示与隐藏pointIt
    $(".pointIt").on("mouseover",function(){
        $("#guide").show();
    })
    //5.  3级导航动画
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
            $(this).addClass("highBlue").css({
                "cursor":"pointer",
            });
        });
    })
    $(".nav3").on("mouseover",function(){
        $("#guide").show();//3级导航hover时二级导航仍然药存在
        $(".nav3").show();
    })
    $(".nav3").on("mouseout",function(){
        $(".nav3").hide();
        $(".nav3").find("li").removeClass("highBlue");
        $("#guide").children("li").removeClass("highBlue").children("a").css({
            "color":"#fff",
        });
        $("#guide").hide();
    })
    //6. classify区域hover字体变蓝
    $(".classify").on("mouseover","li",function(){
        $(this).addClass("blueColor").css({
            "cursor":"pointer",
        });
    }).on("mouseout","li",function(){
        $(this).removeClass("blueColor");
    })
    //7. aside下拉菜单显示/隐藏
    $(".classifyFolder").on("click","span",function(){
        $(this).parent("dt").toggleClass("up");
        if($(this).parent("dt").hasClass("up")){
            $(this).parent("dt").next("dd").show();
        }
        else if(!$(this).parent("dt").hasClass("up")){
            $(this).parent("dt").next("dd").hide();
        }
        // console.log($(this).parent("dt"));
    })


})