<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'h5_1901';
    //创建与数据库的连接
    $connect = new mysqli($servername,$username,$password,$dbname);
    //检测连接
    if($connect -> connect_error){
        die('连接失败：'.$connect_error);
    }
    // echo '连接成功';





?>