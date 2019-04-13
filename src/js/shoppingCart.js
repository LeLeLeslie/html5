jQuery(function ($) {
    var xhr = new XMLHttpRequest();
    var status = [200,304];
    xhr.onreadystatechange =  function(){
        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
            var res = JSON.parse(xhr.responseText).cartlist;
            // var resArr = res.cartlist;
            console.log(res);
            // cartRender(resArr);
            $(".goods_line").get(0).innerHTML = '';
        $(".tol").get(0).innerHTML = '';
        //购物车渲染
         res.forEach(function (item, idx) {
            //  console.log($(".goods_line").get(0));
            $(".goods_line").get(0).innerHTML += `<div data-guid="${item.guid}" class="top list last" style="margin-left: 0;">
            <div class="check">
                <input type="checkbox" class="Each " name="checkItem" checked="true">
            </div>
            <div class="goods">
                <dl>
                    <a href="/c/goods-1091160-892.html">
                        <dt><img src="${item.imgUrl}"
                                alt=""></dt>
                        <dd>
                            <span>${item.goodsName}<i style="color:#CD6E00;">[特例]</i></span>
                            
                        </dd>
                    </a>
                </dl>
            </div>
            <div class="pices">￥${item.price}</div>
            <div class="num">
                <span class="reduc">&nbsp;-&nbsp;</span>
                <input type="text" value="${item.qty}" class="itxt" minnum="1"
                    onkeyup="this.value=this.value.replace(/\D/g,'')"
                    onafterpaste="this.value=this.value.replace(/\D/g,'')">
                <span class="add">&nbsp;+</span>
            </div>
            <div class="totle">￥${item.price*item.qty}</div>
            <div class="available">有货</div>
            <a class="del">删除</a>
        </div>
    </div>
    </div>`
        })
        //商品总价渲染
        var totalPrice = 0;
        res.forEach(function(item,idx){
            totalPrice += item.price*item.qty;
        })
        $(".tol").get(0).innerHTML += `<span>共 <b id="number">${res.length}</b> 件商品</span><span>优惠：<b
            id="save">￥0.00</b></span><span>总计（不含配送服务费）:<i>￥</i><b id="susum">${totalPrice}</b></span>`
        }
    }
    //已进入页面即判断是否含登陆信息然后渲染购物车及用户
    if($.cookie("user")){
        xhr.open("get","api/shoppingCart.php?uname="+$.cookie("user"));
        xhr.send(null);
    }
    //选中盒子样式
    // $(".Each").on("click",function(e){
        
    // })
    //加减商品
    // console.log($(".num"));
    // console.log($(".add"));
    $(".num").on("click","span",function(e){
        e.preventDefault();
        console.log($(this));
        console.log(1)
        if($(this).hasClass("reduc")){
            var guid = $(this).parents(".top").attr("data-guid");
            console.log(1);
            // console.log(guid);
            xhr.open("get","api/shoppingCart.php?uname="+$.cookie("user")+"&btn=reduc&guid="+guid);
        }
        else if($(this).hasClass("add")){
            var guid = $(this).parents(".top").attr("data-guid");
            console.log(2);
            // console.log(guid);
            xhr.open("get","api/shoppingCart.php?uname="+$.cookie("user")+"&btn=add&guid="+guid);
        }
        xhr.send(null);
    })

    $(".itxt").on("click",function(){
        console.log($(".itxt"));
    })


})


 //购物车渲染封装
    // function cartRender(data) {
    //     $(".goods_line").get(0).html = '';
    //     $(".tol").get(0).html = '';
    //     //购物车渲染
    //     $(".goods_line").get(0).html += res.map(function (item, idx) {
    //         return `<div class="top list last" style="margin-left: 0;">
    //         <div class="check">
    //             <input type="checkbox" class="Each " name="checkItem" checked="true">
    //         </div>
    //         <div class="goods">
    //             <dl>
    //                 <a href="/c/goods-1091160-892.html">
    //                     <dt><img src="${item.imgUrl}"
    //                             alt=""></dt>
    //                     <dd>
    //                         <span>${item.goodsName}<i style="color:#CD6E00;"></i></span>
                            
    //                     </dd>
    //                 </a>
    //             </dl>
    //         </div>
    //         <div class="pices">${item.price}</div>
    //         <div class="num ">
    //             <span class="reduc  unClick">&nbsp;-&nbsp;</span>
    //             <input type="text" value="${item.qty}" class="itxt" minnum="1"
    //                 onkeyup="this.value=this.value.replace(/\D/g,'')"
    //                 onafterpaste="this.value=this.value.replace(/\D/g,'')">
    //             <span class="add  unClick">&nbsp;+</span>
    //         </div>
    //         <div class="totle">${item.price*item.qty}</div>
    //         <div class="available">有货</div>
    //         <a class="del">删除</a>
    //     </div>
    // </div>
    // </div>`
    //     })
    //     //商品总价渲染
    //     var totalPrice = 0;
    //     res.foeach(function(item,idx){
    //         totalPrice += item.price*item.qty;
    //     })
    //     $(".tol").get(0).html += `<span>共 <b id="number">${res.length}</b> 件商品</span><span>优惠：<b
    //         id="save">￥0.00</b></span><span>总计（不含配送服务费）:<i>￥</i><b id="susum">${totalPrice}</b></span>`
    // }