"use strict";jQuery(function(a){var r,l,n;a("#uname").on("blur",function(){/^[a-zA-Z][a-zA-Z/\d]{5,9}$/g.test(a("#uname").val())?(a(".error_msg_m").hide(),a.ajax({type:"post",url:"api/register.php",data:{msg:"uname",info:a("#uname").val()},success:function(e){console.log(e),0<e?(a("#uname").val(""),a("#uname").focus(),a(".error_msg_m").show(),r=!1):e<=0&&(a(".error_msg_m").hide(),r=!0)}})):/^[a-zA-Z][a-zA-Z/\d]{5,9}$/g.test(a("#uname").val())||(r=!1,a(".error_msg_m").hide(),a("#uname").val(""))}),a("#pwd").on("blur",function(){/^[^\s]{1,20}$/.test(a("#pwd").val())?/^[^\s]{1,20}$/.test(a("#pwd").val())&&(a(".error_msg_p").hide(),l=!0):(a("#pwd").val(""),a(".error_msg_p").show(),l=!1)}),a("#repwd").on("blur",function(){a("#repwd").val()==a("#pwd").val()?(a(".error_msg_r").hide(),n=!0):a("#repwd").val()!=a("#pwd").val()&&(a("#repwd").val(""),a(".error_msg_p").show(),n=!1)}),a(".registerBtn").on("click",function(e){e.preventDefault(),r&&l&&n&&identifyCode?a.ajax({type:"post",url:"api/register2.php",data:{msg:"register",info:a("#uname").val(),pwd:a("#pwd").val()},success:function(e){console.log(e),1==e?(alert("注册成功！"),location.href="html/login.html"):(alert("注册失败！"),a("#uname").val(""),a("#pwd").val(""),a("#repwd").val(""),a(".identifyCode").val(""))}}):(a("#uname").val(""),a("#pwd").val(""),a("#repwd").val(""),alert("注册失败，请重试~！"))})});