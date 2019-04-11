<?php
    include 'connect.php';
    //1. 数据请求
    //1.1 接收ul_1需求
    $msg = isset($_GET['ul'])?$_GET['ul']:null;
    // echo $msg;
    //1.2 判断是否传过来值：ul_1
    if($msg == 'ul_1'){
        $sql = "select * from exam_medicalList_1";
        $res = $connect->query($sql);
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $res->close();
        echo json_encode($data);
    }
    else if($msg == 'ul_2'){
        $sql = "select * from exam_medicalList_2";
        $res = $connect->query($sql);
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $res->close();
        echo json_encode($data);
    }
    //2. medicalType区域数据请求
    //2.1得到楼层及信息
    $floor = isset($_GET['f'])?$_GET['f']:null;
    $info = isset($_GET['info'])?$_GET['info']:null;
    //2.2判断楼层及信息
    if($floor == "f1"){
        $sql = "select * from exam_indexlist where section='floor_1'";
        $res = $connect->query($sql);
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $res->close();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else if($floor == "f2"){
        $sql = "select * from exam_indexlist where section='floor_2'";
        $res = $connect->query($sql);
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $res->close();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else if($floor == "f3"){
        $sql = "select * from exam_indexlist where section='floor_3'";
        $res = $connect->query($sql);
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $res->close();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else if($floor == "f4"){
        $sql = "select * from exam_indexlist where section='floor_4'";
        $res = $connect->query($sql);
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $res->close();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    else if($floor == "f5"){
        $sql = "select * from exam_indexlist where section='floor_5'";
        $res = $connect->query($sql);
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $res->close();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }






?>