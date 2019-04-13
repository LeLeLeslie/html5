<?php
    include 'connect.php';
    //1. 数据请求渲染商品详情
    // $guid = isset($_GET["guid"])?$_GET["guid"]:null;
    // $msg = isset($_GET["msg"])?$_GET["msg"]:null;
    $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $btn = isset($_GET["btn"])?$_GET["btn"]:null;
    $obj = new stdClass();
    // if($uname != null){
    //     //SELECT * FROM tb_name WHERE id=3;
    //     $sql = 'select * from exam_indexlist WHERE guid="'.$guid.'"';
    //     // echo $sql;
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     // $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $obj->goodslist = $content;
    //     $res->close();
    // }
    if($uname != null){
        $sql_cart = 'select * from '.$uname;
        $res_cart = $connect->query($sql_cart);
        $content_cart = $res_cart->fetch_all(MYSQLI_ASSOC);//所有的数据cartList
        $obj->cartlist = $content_cart;
        $res_cart->close();
    }
    if($btn != null){
        $sql_cart = 'select * from '.$uname;
        $res_cart = $connect->query($sql_cart);
        $content_cart = $res_cart->fetch_all(MYSQLI_ASSOC);//所有的数据cartList
        $obj->cartlist = $content_cart;
        $res_cart->close();
    }
    echo json_encode($obj,JSON_UNESCAPED_UNICODE);
    // $data = array(
        // "resArr" => $resArr,
        // "len" => count($content),
        // "page" => $page * 1,
        // "qty" => $qty * 1
    // );
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
    






?>