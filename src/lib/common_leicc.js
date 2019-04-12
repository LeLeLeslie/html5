/* 
* @Author: Marte
* @Date:   2019-03-07 00:42:59
* @Last Modified by:   Marte
* @Last Modified time: 2019-04-12 14:42:47
*/

    //1.水平方向匀速/加速/减速运动
    // var timer;
    function variableSpeed(speed,acceleration,time,targetX,target){
        clearInterval(variableSpeed.timer);
        variableSpeed.timer = setInterval(function(){
            var currentX = target.offsetLeft;
            currentX += speed;
            speed += acceleration;
            if(speed <= 0){
                clearInterval(timer);
            }
            else if(currentX >= targetX){
                clearInterval(variableSpeed.timer);
            }
            target.style.left = currentX + 'px';
        },time)
    }

    // 2.获得随机数
    function getRandomNumber(a,b){
        return parseInt(Math.random()*(b-a)+a);//得到[a,b)范围内的随机数,想要[a,b]范围内的随机数则b+1；
    }

    //3.获得随机颜色
    var colorArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    function getRandomColor(){
        var str = '#';
        for(let i=0;i<6;i++){
            var j = getRandomNumber(0,16);
            str += colorArr[j];
        }
        return str;
    }

    // 老师封装的缓冲函数：
function bufferAnimation(ele,obj,timer,fn){
    var count = 0;
    for(var key in obj){
        count ++;
        var target = obj[key];
        donghua(key,target);
    }
    function donghua(key,target){
        console.log(target);
        target = key == "opacity"? target *100 : target;
        clearInterval(ele[key+"timer"]);
        ele[key+"timer"] = setInterval(function(){
            var current = window.getComputedStyle(ele)[key];//120px
            var unit = current.match(/[a-z]+/);
            unit = unit? unit[0] : "";
            current = parseFloat(current); 
            current = key == "opacity"? current *100 : current;
            var speed = (target-current)/10;
            speed = speed>0? Math.ceil(speed) : Math.floor(speed);
            current += speed;
            if(current==target){
                clearInterval(ele[key+"timer"]);
                count--;
            }
            current = key == "opzacity"? current/100 : current;
            ele.style[key] = current + unit;
            if(count == 0 ){
                typeof fn == "function"? fn() : fn;
            }
        },timer)

    }
}
//cookie封装
var myCookie = {
    setCookie: function(name,value,date,path){
        str = `${name}=${value}`;
        str += date?`; expires=${date.toUTCString()}`:"";
        str += path?`path=${path}`:"";
        return str;
    },
    getCookie: function(name){
        var cookieArr = document.cookie.split("; ");
        cookieArr.map(function(){
        })

    },
}