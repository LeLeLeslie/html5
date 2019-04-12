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
    //8. selectList效果:onmouseover高亮红色及手型
    $(".selectList").on("mouseover","li",function(){
        $(this).addClass("highRed").css({
            "cursor":"pointer",
        });
    }).on("mouseout","li",function(){
        $(this).removeClass("highRed");
    })
    // 9. goodsList数据请求并渲染,default:page1,40/page
    function goodsMaker(res,last,parent,begin){
        init = begin?begin:0;
        // console.log(init,begin);
        for(let i=init;i<last;i++){
            var $a = $('<a/>').appendTo(parent).prop('href',"html/"+res[i].link + '?guid='+ res[i].guid);
            var $li = $('<li/>').appendTo($a).attr("guid",res[i].guid);
            var $div = $('<div/>').appendTo($li);
            var $img = $('<img/>').appendTo($div).prop('src',res[i].imgUrl).addClass("expand");
            // var $li = $('<li/>').appendTo($li);
            var $p2 = $('<p/>').appendTo($li).text('￥'+res[i].price).addClass("highRed");
            var $p1 = $('<p/>').appendTo($li).html("药名:&nbsp;&nbsp;"+res[i].goodsName);
            var $p3 = $('<p/>').appendTo($li).html("效用:&nbsp;&nbsp;"+res[i].diseaseType);
            var $p4 = $('<p/>').appendTo($li).html("品牌:&nbsp;&nbsp;"+res[i].brand);
            var $p5 = $('<p/>').appendTo($li).addClass("p5");
            var $span1 = $('<span/>').appendTo($p5).html("收藏");
            var $span2 = $('<span/>').appendTo($p5).html("加入购物车");
        }
        parent.find('li').addClass('fl').css({
            "text-align":"center",
        });//使得元素左浮
    }
    var currentPage = 1;
    var qty = 40;
    var xhr = new XMLHttpRequest();
    var status = [200,304];
    var msg = "list";
    xhr.onreadystatechange =  function(){
        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
            var res = JSON.parse(xhr.responseText);
            //goodsRender(res){
                // res = JSON.parse(res);
                var resArr = res.resArr;
                console.log(res);
                $(".classifyDrugsList ul").empty();
                goodsMaker(resArr,resArr.length,$(".classifyDrugsList ul"));
                //页码渲染:根据传回来的数量/每页数量得到页码数
                $(".selectTitle i").text(res.len).css({"color":"red"});// 显示一共有多少个商品
                var pageNum = Math.ceil(res.len/res.qty);
                $(".classifyPage").empty();
                for(var i=1;i<=pageNum;i++){
                    var span = $("<span/>").appendTo($(".classifyPage")).html(i);
                }
                // 当前页码高亮:第1页 ==> 索引0
                $(".classifyPage").children().eq(res.page-1).addClass("active");
                            
                //加入购物车高亮:边框变红
                // console.log($(".p5"));
                $(".p5").on("mouseover","span",function(){
                    console.log($(this));
                    $(this).addClass("borderRed");
                }).on("mouseout","span",function(){
                    $(this).removeClass("borderRed");
                })
            //}
        }
    }
    xhr.open("get","api/goodsList.php?msg="+msg+"&page="+currentPage+"&qty="+qty);
    xhr.send(null);
    //点击页码跳转
    $(".classifyPage").on("click","span",function(){
        var currentPage = $(this).text();
        xhr.open("get","api/goodsList.php?msg=list&page="+currentPage+"&qty="+qty);
        xhr.send(null);
    })
    //价格排序
    $(".priceSort").on("click",function(){
        $(".priceSort").toggleClass("priceUp");
        if($(".priceSort").hasClass("priceUp")){
            msg = "up";
            $(".priceSort i").text("⬆");
            currentPage = 1;
        }
        else if(!$(".priceSort").hasClass("priceUp")){
            msg = "down";
            $(".priceSort i").text("⬇");
            currentPage = 1;
        }
        xhr.open("get","api/goodsList.php?msg="+msg+"&page="+currentPage+"&qty="+qty);
        xhr.send(null);
    })
    //分类数据请求
    $(".selectList").on("click","li",function(){
        var searchName = $(this).text();
        msg = $(this).parents("dd").prev("dt").attr("class");
        console.log(msg,searchName);
        currentPage = 1;
        xhr.open("get","api/goodsList.php?msg="+msg+"&page="+currentPage+"&qty="+qty+"&searchName="+searchName);
        xhr.send(null);
        //点击页码跳转
    })

})