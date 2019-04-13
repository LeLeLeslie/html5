<?php
    include 'connect.php';
    //1. 数据请求
    // $msg = isset($_GET["msg"])?$_GET["msg"]:null;
    // $info = isset($_GET["info"])?$_GET["info"]:null;
    // $pwd = isset($_GET["info"])?$_GET["info"]:null;
    $msg = isset($_POST["msg"])?$_POST["msg"]:null;
    $info = isset($_POST["info"])?$_POST["info"]:null;
    $pwd = isset($_POST["pwd"])?$_POST["pwd"]:null;
    if($msg == 'register'){
        $sql = 'INSERT INTO exam_userList (uname, upassword) VALUES ("'.$info.'", "'.$pwd.'"); create table '.$info.' like exam_indexList';
        // $sql = 'select * from exam_userList WHERE uname="'.$info.'"';
        $query_e = explode(';',$sql);
        foreach ($query_e as $k =>$v){   
          $row =   $connect->query($query_e[$k]);
        }
        if($row){
            echo 1;
            // $obj->msg=1;
        }
        else{
            echo 0;
            // $obj->msg=0;
        }  
        // $res = $connect->query($sql);
        // $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        // $resArr = array_slice($content,($page-1)*$qty,$qty);
        // $row = $res->num_rows;
        // $res->close();
        // $data = array(
        //     "resArr" => $resArr,
		// 	"len" => count($content),
		// 	"page" => $page * 1,
		// 	"qty" => $qty * 1
        // );
        // echo $res;
        // if($row){
        //     echo 1;
        // }
        // else{
        //     echo 0;
        // }
        // echo json_encode($obj,JSON_UNESCAPED_UNICODE);
    }
    





?>