"use strict";function variableSpeed(t,r,e,a,n){clearInterval(variableSpeed.timer),variableSpeed.timer=setInterval(function(){var e=n.offsetLeft;e+=t,(t+=r)<=0?clearInterval(timer):a<=e&&clearInterval(variableSpeed.timer),n.style.left=e+"px"},e)}function getRandomNumber(e,t){return parseInt(Math.random()*(t-e)+e)}var colorArr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];function getRandomColor(){for(var e="#",t=0;t<6;t++){var r=getRandomNumber(0,16);e+=colorArr[r]}return e}function bufferAnimation(o,e,t,i){var l=0;for(var r in e){l++,a(r,e[r])}function a(a,n){console.log(n),n="opacity"==a?100*n:n,clearInterval(o[a+"timer"]),o[a+"timer"]=setInterval(function(){var e=window.getComputedStyle(o)[a],t=e.match(/[a-z]+/);t=t?t[0]:"",e=parseFloat(e);var r=(n-(e="opacity"==a?100*e:e))/10;(e+=r=0<r?Math.ceil(r):Math.floor(r))==n&&(clearInterval(o[a+"timer"]),l--),e="opzacity"==a?e/100:e,o.style[a]=e+t,0==l&&"function"==typeof i&&i()},t)}}var myCookie={setCookie:function(e,t,r,a){return str=e+"="+t,str+=r?"; expires="+r.toUTCString():"",str+=a?"path="+a:"",str},getCookie:function(e){document.cookie.split("; ").map(function(){})}};function ajaxPackage(e,t,r,a){var n=XMLHttpRequest();"get"==e?(n.open(e,r),n.send(null)):"post"==e&&(n.open(e,r),n.send(data)),n.onreadystatechange=function(){if(4!=n.readyState||200!=n.status&&304!=n.status)console.log("出错了");else{if(!a)return n.responseText;a(n.responseText)}}}