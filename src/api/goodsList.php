<?php
    include 'connect.php';
    //1. 数据请求
    $msg = isset($_GET["msg"])?$_GET["msg"]:null;
    $searchName = isset($_GET["searchName"])?$_GET["searchName"]:null;
    $qty = isset($_GET["qty"])?$_GET["qty"]:40;
    $page = isset($_GET["page"])?$_GET["page"]:1;
    // //1.2 判断是否传过来值：ul_1
    if($msg == 'list'){
        $sql = "select * from exam_indexlist";
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        $resArr = array_slice($content,($page-1)*$qty,$qty);
        $res->close();
        $data = array(
            "resArr" => $resArr,
			"len" => count($content),
			"page" => $page * 1,
			"qty" => $qty * 1
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else if($msg == 'up'){
        $sql = "select * from exam_indexlist order by price asc";
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        $resArr = array_slice($content,($page-1)*$qty,$qty);
        $res->close();
        $data = array(
            "resArr" => $resArr,
			"len" => count($content),
			"page" => $page * 1,
			"qty" => $qty * 1
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else if($msg == 'down'){
        $sql = "select * from exam_indexlist order by price desc";
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        $resArr = array_slice($content,($page-1)*$qty,$qty);
        $res->close();
        $data = array(
            "resArr" => $resArr,
			"len" => count($content),
			"page" => $page * 1,
			"qty" => $qty * 1
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else if($msg == 'brand'){
        //SELECT * FROM tb_name WHERE id=3;
        $sql = 'select * from exam_indexlist WHERE brand="'.$searchName.'"';
        // echo $sql;
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        $resArr = array_slice($content,($page-1)*$qty,$qty);
        $res->close();
        $data = array(
            "resArr" => $resArr,
			"len" => count($content),
			"page" => $page * 1,
			"qty" => $qty * 1
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    else if($msg == 'disease'){
        //SELECT * FROM tb_name WHERE id=3;
        $sql = 'select * from exam_indexlist WHERE diseaseType="'.$searchName.'"';
        // echo $sql;
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        $resArr = array_slice($content,($page-1)*$qty,$qty);
        $res->close();
        $data = array(
            "resArr" => $resArr,
			"len" => count($content),
			"page" => $page * 1,
			"qty" => $qty * 1
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    else if($msg == 'drugsType'){
        //SELECT * FROM tb_name WHERE id=3;
        $sql = 'select * from exam_indexlist WHERE sectionDescription="'.$searchName.'"';
        // echo $sql;
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        $resArr = array_slice($content,($page-1)*$qty,$qty);
        $res->close();
        $data = array(
            "resArr" => $resArr,
			"len" => count($content),
			"page" => $page * 1,
			"qty" => $qty * 1
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    // else if($msg == 'ul_2'){
    //     $sql = "select * from exam_medicalList_2";
    //     $res = $connect->query($sql);
    //     $data = $res->fetch_all(MYSQLI_ASSOC);
    //     $res->close();
    //     echo json_encode($data);
    // }
    //2. medicalType区域数据请求
    //2.1得到楼层及信息
    // $floor = isset($_GET['f'])?$_GET['f']:null;
    // $info = isset($_GET['info'])?$_GET['info']:null;
    //2.2判断楼层及信息
    // if($floor == "f1"){
    //     $sql = "select * from exam_indexlist where section='floor_1'";
    //     $res = $connect->query($sql);
    //     $data = $res->fetch_all(MYSQLI_ASSOC);
    //     $res->close();
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }
    // else if($floor == "f2"){
    //     $sql = "select * from exam_indexlist where section='floor_2'";
    //     $res = $connect->query($sql);
    //     $data = $res->fetch_all(MYSQLI_ASSOC);
    //     $res->close();
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }
    // else if($floor == "f3"){
    //     $sql = "select * from exam_indexlist where section='floor_3'";
    //     $res = $connect->query($sql);
    //     $data = $res->fetch_all(MYSQLI_ASSOC);
    //     $res->close();
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }
    // else if($floor == "f4"){
    //     $sql = "select * from exam_indexlist where section='floor_4'";
    //     $res = $connect->query($sql);
    //     $data = $res->fetch_all(MYSQLI_ASSOC);
    //     $res->close();
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }
    // else if($floor == "f5"){
    //     $sql = "select * from exam_indexlist where section='floor_5'";
    //     $res = $connect->query($sql);
    //     $data = $res->fetch_all(MYSQLI_ASSOC);
    //     $res->close();
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }






?>