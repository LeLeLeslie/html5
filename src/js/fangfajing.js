var magnify = document.querySelector('.magnify-box');
        var minBox = document.querySelector('.min-img');
        var minImg = document.querySelector('.min-img img');
        var mask = document.querySelector('.mask');

        var maxBox = document.querySelector('.max-img');
        var maxImg = document.querySelector('.max-img img');

        var imgList = document.querySelectorAll('.img-list li');
        var maskHeight = 0; // 遮罩的高度
        var maskWidth = 0; // 遮罩的宽度
        var minBoxWidth = 0; // 小图片盒子的宽度
        var minBoxHeight = 0; // 小盒子图片的高度
        var maxImgWidth = 0; // 大图片的宽度
        var maxImgHeight = 0; // 大图片的高度
        var maxBoxWidth = 0; // 大图片盒子的宽度
        var maxBoxHeight = 0; // 大图片盒子的高度

        minBox.onmouseenter = function(){
            mask.style.display = 'block';
            maxBox.style.display = 'block';
            maskHeight = mask.offsetHeight;
            maskWidth = mask.offsetWidth;
            minBoxWidth = minBox.offsetWidth;
            minBoxHeight = minBox.offsetHeight;

            maxBoxHeight = maxBox.offsetHeight;
            maxBoxWidth = maxBox.offsetWidth;

            maxImgHeight = maxImg.offsetHeight
            maxImgWidth = maxImg.offsetWidth;
            console.log(maskWidth, maskHeight);
        }

        minBox.onmousemove = function(ev){
            var x = ev.clientX - magnify.offsetLeft - maskWidth/2;
            var y = ev.clientY - magnify.offsetTop - maskHeight/2;

            var maxX = minBoxWidth - maskWidth; 
            var maxY = minBoxHeight - maskHeight; 

            if(x>maxX) {
                x = maxX
            }
            if(y>maxY) {
                y = maxY;
            }
            if(x<=0) {
                x= 0;
            }
            if(y<=0) {
                y = 0;
            }
            var biliX = (maxImgWidth - maxBoxWidth)/ maxX;
            var biliY = (maxImgHeight - maxBoxHeight)/ maxY;

            mask.style.left = x + 'px';
            mask.style.top = y + 'px';

            maxImg.style.left = - x * biliX + 'px';
            maxImg.style.top = - y * biliY + 'px';

        }

        minBox.onmouseleave = function(){
            mask.style.display = 'none';
            maxBox.style.display = 'none';
        }

        for(var i = 0; i< imgList.length; i++){
            (function(i){
                imgList[i].onclick = function(){
                    minImg.src = `./images/min${i+1}.jpg`
                    maxImg.src = `./images/max${i+1}.jpg`
                }
            })(i)
        }