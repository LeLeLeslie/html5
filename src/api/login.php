<?php
    include 'connect.php';
    //1. 数据请求
    // $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    // $pwd = isset($_GET["pwd"])?$_GET["pwd"]:null;    
    $uname = isset($_POST["uname"])?$_POST["uname"]:null;
    $pwd = isset($_POST["pwd"])?$_POST["pwd"]:null;

    // if($msg == 'register'){
        $sql = 'SELECT * FROM exam_userList WHERE uname="'.$uname.'" AND upassword="'.$pwd.'"';
        // $sql = 'INSERT INTO exam_userList (uname, upassword) VALUES ("'.$info.'", "'.$pwd.'")';
        // $sql = 'select * from exam_userList WHERE uname="'.$info.'"';
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
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
        // if($res){
        //     echo 1;
        // }
        // else{
        //     echo 0;
        // }
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
 //}
    





?>