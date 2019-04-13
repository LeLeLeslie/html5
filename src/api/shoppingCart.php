<?php
    include 'connect.php';
    //1. 数据请求渲染商品详情
    // $guid = isset($_GET["guid"])?$_GET["guid"]:null;
    // $msg = isset($_GET["msg"])?$_GET["msg"]:null;
    $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $btn = isset($_GET["btn"])?$_GET["btn"]:null;
    $guid = isset($_GET["guid"])?$_GET["guid"]:null;
    $val = isset($_GET["val"])?$_GET["val"]:null;
    $obj = new stdClass();
    if($btn != null){
        if($btn == "reduc"){
            $sql_redc = 'update '.$uname.' set qty=qty-1 where guid='.$guid;
            $res_redc = $connect->query($sql_redc);
            // echo $sql_redc;
            // $contenxt_redc = $res_redc->fetch_all(MYSQLI_ASSOC);//所有的数据cartList
            $obj->reduc = $res_redc;
            // $res_redc->close();
        }
        if($btn == "add"){
            $sql_add = 'update '.$uname.' set qty=qty+1 where guid='.$guid;
            $res_add = $connect->query($sql_add);
            // $content_add = $res_add->fetch_all(MYSQLI_ASSOC);//所有的数据cartList
            $obj->add = $res_add;
            // $res_add->close();
        }
        if($btn == "val"){
            $sql_val = 'update '.$uname.' set qty='.$val.' where guid='.$guid;
            $res_val = $connect->query($sql_val);
            // $content_val = $res_val->fetch_all(MYSQLI_ASSOC);//所有的数据cartList
            $obj->val = $res_val;
            // $res_val->close();
        } 
        if($btn == "del"){
            // delete from 表名 where 表达式
            $sql_del = 'delete from '.$uname.' where guid='.$guid;
            $res_del = $connect->query($sql_del);
            // $content_del = $res_del->fetch_all(MYSQLI_ASSOC);//所有的数据cartList
            $obj->del = $res_del;
            // $res_del->close();
        } 
    }
    if($uname != null){
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