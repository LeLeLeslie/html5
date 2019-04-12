jQuery(function($){
    //1. 优惠券手型
    $(".coupon").on("mouseover","img",function(){
        $(this).not(".txt").css({
            "cursor":"pointer",
        }).on("click",function(){
            location.href = "http://www.baidu.com";
        })
    })
    //2.medical news 渲染
    //2.1 创建li
    function liMaker(res,num,parent,begin){
        init = begin?begin:0;
        // console.log(init,begin);
        for(let i=init;i<num;i++){
            var $li = $('<li/>').appendTo(parent).attr("guid",res[i].guid);
            var $div = $('<div/>').appendTo($li);
            var $img = $('<img/>').appendTo($div).prop('src',res[i].imgUrl).addClass("expand");
            // var $li = $('<li/>').appendTo($li);
            var $p1 = $('<p/>').appendTo($li).text(res[i].goodsName);
            var $p2 = $('<p/>').appendTo($li).text('￥'+res[i].price);
        }
        parent.children('li').addClass('fl').css({
            "text-align":"center",
        });//使得元素左浮
    }
    //2.2 请求ul_1数据
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"ul":"ul_1"},
        success:function(res){
            res = JSON.parse(res);
            console.log(res);
            $ul_1 = $("<ul/>").appendTo($(".hoverArea"));
            liMaker(res,res.length,$ul_1);
            }
    })
    //2.3 请求ul_2数据
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"ul":"ul_2"},
        success:function(res){
            res = JSON.parse(res);
            console.log(res);
            $ul_2 = $("<ul/>").appendTo($(".hoverArea"));
            liMaker(res,res.length,$ul_2);
            }
    })
    //2.4 请求ul_3数据
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"ul":"ul_1"},
        success:function(res){
            res = JSON.parse(res);
            console.log(res);
            $ul_3 = $("<ul/>").appendTo($(".hoverArea"));
            liMaker(res,res.length,$ul_3);
            }
    })
    //2.5 mouseover高亮效果:highWhite
    $(".medicalChild").on("mouseover","div",function(){
        // console.log($(".medicalChild").children("div"));
        //高亮
        $(".medicalChild").children("div").removeClass("highWhite");
        $(this).addClass("highWhite");
        //切换ul
        //先将所有ul隐藏，再切换对应ul
        $(".hoverArea").children().hide();
        if($(this).hasClass("newMedical")){
            $(".hoverArea").children().eq(0).show();
        }
        else if($(this).hasClass("discount")){
            $(".hoverArea").children().eq(1).show();
        }
        else if($(this).hasClass("consult")){
            $(".hoverArea").children().eq(2).show();
        }
        //显示手型
        $(".hoverArea").on("mouseover","li",function(){
            $(this).css({
                "cursor":"pointer",
            }).on("click",function(){
                location.href = "http://www.baidu.com";
            })
        })
    })
    //3. medicalType区域数据请求并渲染,用不了
    // function getTypeAjax(info,fn){
    //     $.ajax({
    //         type:"get",
    //         url:"api/index.php",
    //         data:info,
    //         success:fn,
    //     })
    //     console.log("ajax");
    // }
    //3. 定义success函数，用不了
    // function successData(res,parent){
    //     res = JSON.parse(res);
    //     console.log(res);
    //     liMaker(res,res.length,parent);
    // }
    

    //3. 定义useRender
    function useRender(arr,parent){
        arr.map(function(item,idx){
            let $li = $('<li/>').appendTo(parent).text(item.diseaseType).css({
                "width":"50%",
                "float":"left",
                "text-align":"center",
                "line-height":"55px",
                // "border":"1px solid #ccc",
            });
            // console.log($li,item.diseaseType);
        })
    }
    //定义brandImgRender
    function brandImgRender(arr,parent){
        for(let i=0;i<8;i++){
            let $li = $('<li/>').appendTo(parent).css({
                "width":"50%",
                "float":"left",
                "text-align":"center",
                "height":"55px",
                "border":"1px solid #ccc",
            });
            let $img = $("<img/>").appendTo($li).prop("src",arr[i].brandUrl).css({
                "width":"100%",
            });
            // console.log($img,parent);
        }
    }
    //定义brandNameRender
    function brandNameRender(arr,parent){
        for(let i=0;i<8;i++){
            let $li = $('<li/>').appendTo(parent).text(arr[i].brand).css({
                // "width":"50%",
                "float":"left",
                // "text-align":"center",
                "font-size":"12px",
                "height":"12px",
                "padding":"0px 16px",
                "margin":"21px 0px",
                "border-right":"1px solid #ccc",
            });
            // console.log($li,parent);
        }
    }
    //3.1 floor_1数据请求
    //3.1.1 aside
    // getTypeAjax({"f":"f1","info":"use"},successData(res,$("floorOne .use")));
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"f":"f1","info":"use"},
        success:function(res){
            res = JSON.parse(res);
            console.log(res);
            useRender(res,$(".floorOne .use"));//aside渲染
            brandImgRender(res,$(".floorOne .brandIMG"));//aside品牌图片渲染
            brandNameRender(res,$(".floorOne .brandName"));//section品牌名渲染
            liMaker(res,2,$(".floorOne .goods_1"));//轮播图右侧商品渲染
            liMaker(res,7,$(".floorOne .goods_2"),2);//轮播图下面商品渲染
        }
    })
    //3.2 floor_2数据请求
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"f":"f2"},
        success:function(res){
            res = JSON.parse(res);
            console.log(res);
            useRender(res,$(".floorTwo .use"));
            brandImgRender(res,$(".floorTwo .brandIMG"));
            brandNameRender(res,$(".floorTwo .brandName"));
            liMaker(res,2,$(".floorTwo .goods_1"));
            liMaker(res,7,$(".floorTwo .goods_2"),2);
        }
    })
    //3.3 floor_3数据请求
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"f":"f3"},
        success:function(res){
            res = JSON.parse(res);
            console.log(res);
            useRender(res,$(".floorThree .use"));
            brandImgRender(res,$(".floorThree .brandIMG"));
            brandNameRender(res,$(".floorThree .brandName"));
            liMaker(res,2,$(".floorThree .goods_1"));
            liMaker(res,7,$(".floorThree .goods_2"),2);
        }
    })
    //3.4 floor_4数据请求
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"f":"f4"},
        success:function(res){
            res = JSON.parse(res);
            // console.log(res);
            useRender(res,$(".floorFour .use"));
            brandImgRender(res,$(".floorFour .brandIMG"));
            brandNameRender(res,$(".floorFour .brandName"));
            liMaker(res,2,$(".floorFour .goods_1"));
            liMaker(res,7,$(".floorFour .goods_2"),2);
        }
    })
    //3.5 floor_5数据请求
    $.ajax({
        type:"get",
        url:"api/index.php",
        data:{"f":"f5"},
        success:function(res){
            res = JSON.parse(res);
            console.log(res);
            useRender(res,$(".floorFive .use"));
            // brandImgRender(res,$(".floorFive .brandIMG"));
            for(let i=0;i<6;i++){
                let $li = $('<li/>').appendTo($(".floorFive .brandIMG")).css({
                    "width":"33.33%",
                    "float":"left",
                    // "text-align":"center",
                    // "height":"55px",
                    "border":"1px solid #ccc",
                });
                let $img = $("<img/>").appendTo($li).prop("src",res[i].brandUrl).css({
                    "width":"160px",
                }).addClass("expand");
                // console.log($img,parent);
            }
            brandNameRender(res,$(".floorFive .brandName"));
            liMaker(res,3,$(".floorFive .goods_1"));
            liMaker(res,6,$(".floorFive .goods_2"),3);
        }
    })
    //floor1~floor5轮播图:
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        direction:'horizontal',//方向
        speed:800,//速度
        grabCursor:true,//鼠标手
        loop:true, //连续
        preventClicksPropagation:true, //阻止冒泡
        // delay:1000,//切换时间
        pagination: {
        el: '.swiper-pagination'
        },//分页器
        // effect:slide,//默认位移
        // navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev'
        // } //分页按钮
        // scrollbar: {
        // el: '.swiper-scrollbar',
        // },
        }) 
    //floor6
    //边框高亮及跳转到锚点定位
    $(".titleArea").on("mouseover","a",function(){
        $(".titleArea").children("a").css({
            "border":"none",
            "border-bottom":"1px solid #4E71AC",
            "background":"#F7F7F7",
        })
        $(this).css({
            "background":"#fff",
            "border":"1px solid #4E71AC",
            "border-bottom":"none",
        })
        $(".showArea").children("div").hide();
        if($(this).hasClass("newDrugs")){
            $('.newDrugs').show();
        }
        else if($(this).hasClass("disease")){
            $('.disease').show();
        }
        else if($(this).hasClass("family")){
            $('.family').show();
        }
        else if($(this).hasClass("healthCare")){
            $('.healthCare').show();
        }
    })
    //字体高亮
    $(".showArea").on("mouseover","li",function(){
        // console.log($(this));
        $(".showArea").find("li").removeClass("highBlue");
        $(this).addClass("highBlue").css({
            "cursor":"pointer",
        });
    })
    //图片hover膨胀动画
    $("body").on("mouseover","img",function(){
        if($(this).hasClass("expand")){
            $(this).stop().animate({
                "margin":"-20px",
            },300);
            // console.log($(this).css("margin"))
            // console.log($(this),$(this).parent());
        }
    }).on("mouseout","img",function(){
        if($(this).hasClass("expand")){
            $(this).stop().animate({
                "margin":"0px",
            },500);
        }
    })



})