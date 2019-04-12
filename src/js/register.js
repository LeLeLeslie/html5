jQuery(function ($) {
    // var currentPage = 1;
    // var qty = 40;
    // var xhr = new XMLHttpRequest();
    // var status = [200, 304];
    // var uname = $("#uname").val();
    // var upassword = $("#pwd").val();
    // var repwd = $("#repwd").val;
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && status.indexOf(xhr.status) != -1) {
    //         var res = JSON.parse(xhr.responseText);
    //         console.log(res);
    //     }
    // }
    // xhr.open("get", "api/register.php?msg=" + msg + "&page=" + currentPage + "&qty=" + qty);
    // xhr.send(null);
    var user;
    var upwd;
    var urepwd;
    $("#uname").on("blur", function () {
        // console.log($("#uname").val());
        if (/^[a-zA-Z][a-zA-Z/\d]{5,9}$/g.test($("#uname").val())) {
            $(".error_msg_m").hide();
            $.ajax({
                type: "post",
                url: "api/register.php",
                data: { "msg": "uname", "info": $("#uname").val(), },
                success: function (res) {
                    console.log(res);
                    if (res > 0) {
                        $("#uname").val("");
                        $("#uname").focus();
                        $(".error_msg_m").show();
                        user = false;
                    }
                    else if (res <= 0) {
                        $(".error_msg_m").hide();
                        user = true;
                    }
                }
            })
        }
        else if(!/^[a-zA-Z][a-zA-Z/\d]{5,9}$/g.test($("#uname").val())){
            user = false;
            $(".error_msg_m").hide();
            $("#uname").val('');
        }
        
    })
    $("#pwd").on("blur", function () {
        if (!/^[^\s]{1,20}$/.test($("#pwd").val())) {
            $("#pwd").val("");
            // $("#pwd").focus();
            $(".error_msg_p").show();
            upwd = false;
        }
        else if (/^[^\s]{1,20}$/.test($("#pwd").val())) {
            $(".error_msg_p").hide();
            upwd = true;
        }
        // $.ajax({
        //     type:"post",
        //     url:"api/register.php",
        //     data:{"msg":"pwd","info":$("#pwd").val(),},
        //     success:function(res){
        //         res = JSON.parse(res);
        //         console.log(res);
        //     }
        // })
    })
    $("#repwd").on("blur", function () {
        if ($("#repwd").val() == $("#pwd").val()) {
            $(".error_msg_r").hide();
            urepwd = true;
        }
        else if ($("#repwd").val() != $("#pwd").val()) {
            $("#repwd").val("");
            // $("#repwd").focus();
            $(".error_msg_p").show();
            urepwd = false;
        }
        // $.ajax({
        //     type:"post",
        //     url:"api/register.php",
        //     data:{"msg":"repwd","info":$("#repwd").val(),},
        //     success:function(res){
        //         res = JSON.parse(res);
        //         console.log(res);
        //     }
        // })
    })
    // 验证码 start
    // $(function () {
    //     var show_num = [];
    //     draw(show_num);
    //     $("#canvas").on('click', function () {
    //         draw(show_num);
    //     })
    //     $(".btn").on('click', function () {
    //         var val = $(".input-val").val().toLowerCase();
    //         var num = show_num.join("");
    //         if (val == '') {
    //             alert('请输入验证码！');
    //             identifyCode = false;
    //         } else if (val == num) {
    //             alert('提交成功！');
    //             identifyCode = true;
    //             $(".input-val").val('');
    //             // draw(show_num);

    //         } else {
    //             alert('验证码错误！请重新输入！');
    //             $(".input-val").val('');
    //             identifyCode = false;
    //             // draw(show_num);
    //         }
    //     })
    // }
    //验证码 end
    //提交注册 start
    $(".registerBtn").on("click", function (e) {
        e.preventDefault();
        if (user && upwd && urepwd && identifyCode) {
            $.ajax({
                type: "post",
                url: "api/register2.php",
                data: { "msg": "register", "info": $("#uname").val(), "pwd": $("#pwd").val() },
                success: function (res) {
                    console.log(res);
                    if(res==1){
                        alert("注册成功！");
                        location.href="html/login.html?username="+$("#uname").val();
                    }
                    else{
                        alert("注册失败！");
                        $("#uname").val('');
                        $("#pwd").val('');
                        $("#repwd").val('');
                        $(".identifyCode").val('');
                    }
                }
            })
        }
        else {
            $("#uname").val("");
            $("#pwd").val("");
            $("#repwd").val("");
            alert("注册失败，请重试~！")
        }
    })
    //提交注册 end


})