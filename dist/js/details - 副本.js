"use strict";jQuery(function(c){c(".list").on("mouseover","li",function(){c(this).hasClass("myweb")?c(".drugWeb").show():c(this).hasClass("phoneCode")?c(".code2D").show():c(this).hasClass("webGuide")?c(".webNav").show():c(this).addClass("whiteBG")}).on("mouseout","li",function(){c(".drugWeb").hide(),c(".code2D").hide(),c(".webNav").hide(),c(this).removeClass("whiteBG")}),c(".hoverNav").on("mouseover","div",function(){c(this).hasClass("drugWeb")?c(".drugWeb").show():c(this).hasClass("code2D")?c(".code2D").show():c(this).hasClass("webNav")&&c(".webNav").show()}).on("mouseover","li",function(){c(this).css({cursor:"pointer"}),c(this).hasClass("highRed")||c(this).addClass("highBlue")}).on("mouseout",function(){c(".drugWeb").hide(),c(".code2D").hide(),c(".webNav").hide()}).on("mouseout","li",function(){c(this).removeClass("highBlue")}),c(".frequentWord").on("mouseover","li",function(){c(this).addClass("highRed").css({cursor:"pointer"})}).on("mouseout","li",function(){c(this).removeClass("highRed")});var e=location.search.slice(1),s=1*(e=e.split("="))[1];function i(e,s,o,t){init=t||0;for(var i=init;i<s;i++){var n=c("<a/>").appendTo(o).attr("href","html/goodsList.html").css({display:"inline-block"}),a=c("<li/>").appendTo(n).attr("guid",e[i].guid),r=c("<div/>").appendTo(a),l=(c("<img/>").appendTo(r).prop("src",e[i].imgUrl).addClass("expand"),c("<p/>").appendTo(a).text(e[i].goodsName),c("<p/>").appendTo(a));c("<span/>").appendTo(l).html("￥"+e[i].price+"&nbsp;"),c("<span/>").appendTo(l).text("x"+e[i].qty).css({color:"red"})}}c.ajax({type:"get",url:"api/details.php",data:{guid:s},success:function(e){e=JSON.parse(e).goodslist,console.log(e),c(".drugInfo").text("医药网>"+e[0].sectionDescription+">"+e[0].diseaseType+">"+e[0].brand+">"+e[0].goodsName);c("<img/>").prop("src",e[0].imgUrl).attr("jqimg",e[0].imgUrl).appendTo(c(".jqzoom"));var s=c("<h1/>").text(e[0].goodsName).insertBefore(c(".goodsPrice")),o=c("<p/>").text("用途:"+e[0].diseaseType).insertAfter(s),t=c("<p/>").text("商品编码:guid"+e[0].guid).insertAfter(o);c("<p/>").text("生产厂家:"+e[0].brand).insertAfter(t),c("<span/>").text("￥"+e[0].price).insertAfter(c(".sales")).addClass("redColor")}}),c(".message_list").on("click",function(){c(".user").hasClass("login")?(c(".rightArea").show(),c(".user").removeClass("login")):(c(".rightArea").hide(),c(".user").addClass("login"))}),c.cookie("user")?c(".user").addClass("login").html("<span>欢迎!"+c.cookie("user")+'</span>&nbsp;&nbsp;<span class="logout" style="color:orange;">退出</span>'):c(".user").removeClass("login").html("请登录"),console.log(c.cookie("user")),c(".logout").on("click",function(){Cookie.removeCookie("user","/"),location.href="html/login.html"}),c(".user").on("click",function(){location.href="html/login.html"}),c(".register").on("click",function(){location.href="html/register.html"}),c(".num").on("mouseover","span",function(){c(this).css({cursor:"pointer"})}).on("click","span",function(e){e.preventDefault(),c(this).hasClass("minus")&&(1<c("#numInp")[0].value?c("#numInp")[0].value--:c("#numInp")[0].value<=1&&(c("#numInp")[0].value=1)),c(this).hasClass("plus")&&c("#numInp")[0].value++}),c.cookie("user")&&c.ajax({type:"get",url:"api/details.php",data:{msg:"cartNum",uname:c.cookie("user")},success:function(e){e=JSON.parse(e).cartlist;var o=0,t=0;e.map(function(e,s){t+=1*e.qty,o+=e.qty*e.price,console.log(o)}),c(".cart_num").text(t),c(".totalPrice_s").html(e.length+'件商品,共:<br/> <span style="color:red;">'+o+"元</span>"),i(e,e.length,c(".rightArea ul")),console.log(e,t)}}),c("#add_cart").on("click",function(){if(c.cookie("user")){var e=location.search.slice(1).split("=")[1],s=1*c("#numInp").val();c.ajax({type:"get",url:"api/details_cart.php",data:{uname:c.cookie("user"),guid:e,qty:s},success:function(e){e=JSON.parse(e).goodslist,console.log(e);var o=0,t=0;e.forEach(function(e,s){t+=1*e.qty,o+=e.qty*e.price,console.log(o)}),c(".cart_num").text(t),c(".totalPrice_s").html(e.length+'件商品,共:<br/> 元<span style="color:red;">'+o+"</span>"),i(e,e.length,c(".rightArea ul")),console.log(e,t)}})}else alert("请先登陆后再添加商品~！")})});