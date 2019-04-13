jQuery(function ($) {
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
    })
    //提交注册 start
    $(".registerBtn").on("click", function (e) {
        e.preventDefault();
        if (user && upwd && urepwd && identifyCode) {
            $.ajax({
                type: "post",
                url: "api/register2.php",
                data: { "msg": "register", "info": $("#uname").val(), "pwd": $("#pwd").val() },
                success: function (res) {
                    // res=res.msg;
                    console.log(res);
                    if(res==1){
                        alert("注册成功！");
                        location.href="html/login.html";
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