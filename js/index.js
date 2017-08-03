//  核心技术模态框 开始
$(function(){
    $('body').css('opacity','1')
    $('.modal_close').click(function(){
        $('.modal').fadeOut();
        $('.aside_pc').toggleClass('slow')
    })
    $('.modal_on').click(function(){
        $('.modal').fadeToggle();
        $('.aside_pc').toggleClass('slow')
    })
    $('.modal_close_app').click(function(){
        $('.modal_app').fadeOut();
        $('.aside_app').toggleClass('slow')
    })
    $('.modal_on_app').click(function(){
        $('.modal_app').fadeToggle();
        $('.aside_app').toggleClass('slow')
    })
    $(".up").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    })
})
//  核心技术模态框 结束
var timer,i=0;
function fun(obj,hrefs,kg){
    var body=document.body;
    i++;
    $('body').addClass('anima')
    timer = setTimeout(fun,1000);
    if(i==1){
        $(function(){
            $('.modal_app').fadeOut(100);
            $('.aside_app').toggleClass('slow')
        })
        hrefer(hrefs);
    }else if(i==2){
        clearTimeout(timer)
        $('body').removeClass('anima')
        i=0;
    }
    if(kg==true){
        $('body').addClass('over_hide')
    }else if(kg==false){
        $('body').removeClass('over_hide')
    }
}

var times,xx=0;
var objer="",hrefser="",numer="",divs="";
function funs(obj,hrefs,num,divs){
    $(obj).slideUp();
    objer=obj;
    hrefser=hrefs;
    numer=num;
    divser=divs;
    funss()
}
function funss(){
    var body=document.body;
    var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    xx++;
    //console.log($scrollTop)
    times = setTimeout(funss,600);
    if(xx==1){
        $('body,html').animate({scrollTop:numer},400);
        $('body').removeClass('over_hide')
        $(divser).slideDown();
    }else if(xx==2){
        hrefer(hrefser);
        $(objer).slideDown();
    }else if(xx==3){
        $(divser).slideUp();
    }else if(xx==4){
        clearTimeout(times)
        xx=0;
    }
}
//  封装跳转锚链接的函数 开始
function hrefer(hrefs){
    window.location.href="#"+hrefs;
    var divArr = document.getElementsByName("divArr");
    for(var k=0;k<divArr.length;k++){
        divArr[k].className="none"
    }
    document.getElementById(hrefs).className="";
}
//  封装跳转锚链接的函数 结束