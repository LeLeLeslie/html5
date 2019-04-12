<?php
    include 'connect.php';
    //1. 数据请求
    $guid = isset($_GET["guid"])?$_GET["guid"]:null;
    if($guid != null){
        //SELECT * FROM tb_name WHERE id=3;
        $sql = 'select * from exam_indexlist WHERE guid="'.$guid.'"';
        // echo $sql;
        $res = $connect->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
        // $resArr = array_slice($content,($page-1)*$qty,$qty);
        $res->close();
        // $data = array(
            // "resArr" => $resArr,
			// "len" => count($content),
			// "page" => $page * 1,
			// "qty" => $qty * 1
        // );
        // echo json_encode($data,JSON_UNESCAPED_UNICODE);
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    // $msg = isset($_GET["msg"])?$_GET["msg"]:null;
    // $searchName = isset($_GET["searchName"])?$_GET["searchName"]:null;
    // $qty = isset($_GET["qty"])?$_GET["qty"]:40;
    // $page = isset($_GET["page"])?$_GET["page"]:1;
    // // //1.2 判断是否传过来值：ul_1
    // if($msg == 'list'){
    //     $sql = "select * from exam_indexlist";
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $res->close();
    //     $data = array(
    //         "resArr" => $resArr,
	// 		"len" => count($content),
	// 		"page" => $page * 1,
	// 		"qty" => $qty * 1
    //     );
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }
    // else if($msg == 'up'){
    //     $sql = "select * from exam_indexlist order by price asc";
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $res->close();
    //     $data = array(
    //         "resArr" => $resArr,
	// 		"len" => count($content),
	// 		"page" => $page * 1,
	// 		"qty" => $qty * 1
    //     );
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }
    // else if($msg == 'down'){
    //     $sql = "select * from exam_indexlist order by price desc";
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $res->close();
    //     $data = array(
    //         "resArr" => $resArr,
	// 		"len" => count($content),
	// 		"page" => $page * 1,
	// 		"qty" => $qty * 1
    //     );
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // }
    // else if($msg == 'brand'){
    //     //SELECT * FROM tb_name WHERE id=3;
    //     $sql = 'select * from exam_indexlist WHERE brand="'.$searchName.'"';
    //     // echo $sql;
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $res->close();
    //     $data = array(
    //         "resArr" => $resArr,
	// 		"len" => count($content),
	// 		"page" => $page * 1,
	// 		"qty" => $qty * 1
    //     );
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    //     // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    // }
    // else if($msg == 'disease'){
    //     //SELECT * FROM tb_name WHERE id=3;
    //     $sql = 'select * from exam_indexlist WHERE diseaseType="'.$searchName.'"';
    //     // echo $sql;
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $res->close();
    //     $data = array(
    //         "resArr" => $resArr,
	// 		"len" => count($content),
	// 		"page" => $page * 1,
	// 		"qty" => $qty * 1
    //     );
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    //     // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    // }
    // else if($msg == 'drugsType'){
    //     //SELECT * FROM tb_name WHERE id=3;
    //     $sql = 'select * from exam_indexlist WHERE sectionDescription="'.$searchName.'"';
    //     // echo $sql;
    //     $res = $connect->query($sql);
    //     $content = $res->fetch_all(MYSQLI_ASSOC);//所有的数据goodsList
    //     $resArr = array_slice($content,($page-1)*$qty,$qty);
    //     $res->close();
    //     $data = array(
    //         "resArr" => $resArr,
	// 		"len" => count($content),
	// 		"page" => $page * 1,
	// 		"qty" => $qty * 1
    //     );
    //     echo json_encode($data,JSON_UNESCAPED_UNICODE);
    //     // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    // }






?>