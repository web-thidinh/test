$(function(){

    // back to  top
    $(window).scroll(function(){
        var a = $(window).scrollTop();   
        if( a > 300){
            $('.top-page').fadeIn();
        }
        else{
            $('.top-page').fadeOut();
        }
    });
    $('.top-page').click(function(){
        $('body,html').animate({scrollTop:0});
    });
    // back to  top

    //Fixed product detail menu
    $(window).scroll(function(){
        var position_scroll = $(window).scrollTop();
        if(position_scroll > 300){
            $('.product-detail-bottom').addClass('fix-detail');
        }
        else{
            $('.product-detail-bottom').removeClass('fix-detail');
        }
    });
});

