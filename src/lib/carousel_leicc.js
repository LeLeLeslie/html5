(function($){
    $.fn.ccCarousel = function(obj){
        //1.设置默认对象
        var defaults = {
            width: 300,
            height: 300,
            type: 'vertical',//horizontal/fade
            img: [],
            duration: 1000,
            idx: 0
        };
        let opt = Object.assign({},defaults,obj);
        //如果type不为fade则增加最后一张img
        if(opt.type != 'fade'){
            let imgAddiction = opt.img.slice(0,1);
            opt.img.push(imgAddiction);
            console.log(imgAddiction,opt.img);
        }
        let imgLength = opt.img.length;
        let $div = $('.carouselBox');
        let $ul = $div.children('ul');
        let lastIdx = opt.idx;
        // console.log(opt,imgLength,$div,$ul);
        //2.初始化
        var initial = ()=>{
            //2.1 利用传入参数设置大盒子样式
            $div.width(opt.width).height(opt.height);
            //2.2 生成图片
            for(let i=0;i<imgLength;i++){
                var $li = $('<li/>').appendTo($ul);
                var $img = $('<img src="'+opt.img[i]+'"/>').appendTo($li);
                // console.log($img);
            }
            //2.3 水平滚动必须设置ul的宽度、及类名
            if(opt.type == 'vertical'){
                $ul.width(opt.width*imgLength).addClass('vertical');
            }
            else if(opt.type == 'horizontal'){
                $ul.addClass('horizontal');
            }
            else if(opt.type == 'fade'){
                $ul.addClass('fade').css({
                    width:opt.width,
                    height:opt.height,
                    // position:absolute;
                })
                $ul.children('li').eq(opt.index).siblings('li').css('opacity',0);
            }
            move();
        }
        var carousel = ()=>{
            let pos = {};
            //更新索引
            if(opt.idx >imgLength-1){
                opt.idx = 1;
                if(opt.type == 'vertical'){
                    $ul.css({
                        top:0,
                    })
                }else if(opt.type == 'horizontal'){
                    $ul.css({
                        left:0,
                    })
                }
            }
            if(opt.idx < 0){
                opt.idx = imgLength -1;
            }
            if(opt.type == 'vertical'){
                pos.top = -opt.height*opt.idx;
                $ul.animate({top:-opt.height*opt.idx});
                console.log(111);
            }
            else if(opt.type == 'horizontal'){
                pos.left = -opt.width*opt.idx;
                $ul.animate(pos,300);
            }
            else if(opt.type == 'fade'){
                // $ul.children('li').eq(opt.idx).animate({opacity:1},function(){
                //     lastIdx = opt.idx;
                // })
                    $ul.children('li').eq(opt.idx).animate({opacity:1},function(){
                        lastIdx = opt.idx;
                    });
                    $ul.children('li').eq(lastIdx).animate({opacity:0},function(){
                        lastIdx = opt.idx;
                    });
            }
        }
        var move = ()=>{
            this.timer = setInterval(()=>{
                opt.idx++;
                carousel();
                console.log(opt.idx);
            },opt.duration);
        }
        initial();
    }







})(jQuery)