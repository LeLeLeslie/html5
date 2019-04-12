jQuery(function ($) {
    var user;
    var upwd;
    $("#uname").on("blur", function () {
        if ($("#uname").val() == '') {
            // $("#uname").val("");
            // $("#uname").focus();
            $(".error_msg_m").show();
            user = false;
        }
        else if ($("#uname").val() != '') {
            $(".error_msg_m").hide();
            user = true;
        }
    })

    $("#pwd").on("blur", function () {
        if ($("#pwd").val() == '') {
            // $("#pwd").val("");
            // $("#pwd").focus();
            $(".error_msg_p").show();
            upwd = false;
        }
        else if ($("#pwd").val() != '') {
            $(".error_msg_p").hide();
            upwd = true;
        }
    })
    
    //登陆注册 start
    $(".btn").on("click",function (e) {
        e.preventDefault();
        if (user && upwd) {
            $.ajax({
                type: "post",
                url: "api/login.php",
                data: { "uname": $("#uname").val(), "pwd": $("#pwd").val() },
                success: function (res) {
                    res = JSON.parse(res);
                    console.log(res,res.length);
                    if(res.length>0){
                        alert("登陆成功！");
                        $.cookie("user",$("#uname").val(),{path:'/'});
                        location.href="index.html?uname="+$("#uname").val();
                    }
                    else if(res.length<=0){
                        alert("用户名/密码错误，请重试~！");
                        $("#uname").val('');
                        $("#pwd").val('');
                    }
                }
            })
        }
        else {
            $("#uname").val("");
            $("#pwd").val("");
            alert("用户名/密码错误，请重试~！")
        }
    })
    //登陆注册 end


})