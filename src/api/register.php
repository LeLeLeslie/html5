<?php
    include 'connect.php';
    //1. 数据请求
    // $msg = isset($_GET["msg"])?$_GET["msg"]:null;
    // $info = isset($_GET["info"])?$_GET["info"]:null;
    $msg = isset($_POST["msg"])?$_POST["msg"]:null;
    $info = isset($_POST["info"])?$_POST["info"]:null;
    $pwd = isset($_POST["info"])?$_POST["info"]:null;
    if($msg == 'uname'){
        $sql = 'select * from exam_userList WHERE uname="'.$info.'"';
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        // $resArr = array_slice($content,($page-1)*$qty,$qty);
        $row = $res->num_rows;
        $res->close();
        // $data = array(
        //     "resArr" => $resArr,
		// 	"len" => count($content),
		// 	"page" => $page * 1,
		// 	"qty" => $qty * 1
        // );
        echo $row;
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    // else if($msg == 'register'){
    //     $sql = 'INSERT INTO exam_userList (uname, upassword) VALUES ("'.$info.'", "'.$pwd.'")';
    //     // $sql = 'select * from exam_userList WHERE uname="'.$info.'"';
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     // $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $row = $res->num_rows;
    //     // $res->close();
    //     // $data = array(
    //     //     "resArr" => $resArr,
	// 	// 	"len" => count($content),
	// 	// 	"page" => $page * 1,
	// 	// 	"qty" => $qty * 1
    //     // );
    //     echo $row;
    //     if($connect->query($sql)){
    //         echo "成功";
    //     }
    //     else{
    //         echo "erro";
    //     }
    //     // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    // }
    





?>