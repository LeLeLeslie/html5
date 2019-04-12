<?php
    include 'connect.php';
    //2. 加入购物车
    $guid = isset($_GET["guid"])?$_GET["guid"]:null;
    $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $qty = isset($_GET["qty"])?$_GET["qty"]:null;
    $obj = new stdClass();
    if($guid && $qty){
        $num2=intval($qty);
        $query =  'insert into '.$uname.' select * from exam_indexlist where guid='.$guid.';update '.$uname.' set qty=qty+'.$num2.' where guid='.$guid.'';
        $query_e = explode(';',$query);
        foreach ($query_e as $k =>$v){   
          $row =   $connect->query($query_e[$k]);
        }
        if($row){
            $obj->msg="写入成功,更新数据";
        }
        else{
            $obj->msg="写入不成功";
        }  
    }
    if($guid){
        $sql_ucart = "select * from ".$uname;

        $res_ucart = $connect-> query($sql_ucart);

         $row_ucart = $res_ucart->fetch_all(MYSQLI_ASSOC);
    

        $obj->goodslist = $row_ucart;
    }
        echo json_encode($obj,JSON_UNESCAPED_UNICODE);
    






?>