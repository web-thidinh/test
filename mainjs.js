$(document).ready(function(){
    
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
            $('.carousel-indicators').addClass('fix-carousel');
        }
        else{
            $('.product-detail-bottom').removeClass('fix-detail');
            $('.carousel-indicators').removeClass('fix-carousel');
        }
    });
    //Fixed product detail menu
    
    // control carousel
    $('ol').click(function(){
        $('body,html').animate({scrollTop:0});
    });
    // control carousel

    $('.ol ~ li:nth-child(1)').click(function(){
        $('.btn-img').attr('display','none');
        $('.btn-img-active').attr('display','inline');
    });



    //show

    // $('.chat-heading').click(function(){
    //         // $('.close-chat').show();
    //         $('.box-chat-popup').show();           
    // });
    //hide
    
    // $('.chat-heading').click(function(){
    //     $('.box-chat-popup').hide();
    //     $('.close-chat').hide();            
    // });
    
});

function openChat(){
    document.getElementById("show-chat").style.display = "block";
    document.getElementById("close").style.display = "block";
}
function closeChat(){
    document.getElementById("show-chat").style.display = "none";  
    document.getElementById("close").style.display = "none";
}


function activeimg(){
    $('.btn-img-1').hide();
    $('.btn-img-2').show();
    $('.btn-img-3').show();
    $('.btn-img-4').show();
    $('.btn-img-5').show();
    $('.btn-img-active-1').show();
    $('.btn-img-active-2').hide();
    $('.btn-img-active-3').hide();
    $('.btn-img-active-4').hide();
    $('.btn-img-active-5').hide();

};
function activeimg2(){
    $('.btn-img-2').hide();
    $('.btn-img-1').show();
    $('.btn-img-3').show();
    $('.btn-img-4').show();
    $('.btn-img-5').show();
    $('.btn-img-active-2').show();
    $('.btn-img-active-1').hide();
    $('.btn-img-active-3').hide();
    $('.btn-img-active-4').hide();
    $('.btn-img-active-5').hide();
};
function activeimg3(){
    $('.btn-img-3').hide();
    $('.btn-img-1').show();
    $('.btn-img-2').show();
    $('.btn-img-4').show();
    $('.btn-img-5').show();
    $('.btn-img-active-3').show();
    $('.btn-img-active-1').hide();
    $('.btn-img-active-2').hide();
    $('.btn-img-active-4').hide();
    $('.btn-img-active-5').hide();
};
function activeimg4(){
    $('.btn-img-4').hide();
    $('.btn-img-1').show();
    $('.btn-img-2').show();
    $('.btn-img-3').show();
    $('.btn-img-5').show();
    $('.btn-img-active-4').show();
    $('.btn-img-active-1').hide();
    $('.btn-img-active-2').hide();
    $('.btn-img-active-3').hide();
    $('.btn-img-active-5').hide();
};
function activeimg5(){
    $('.btn-img-5').hide();
    $('.btn-img-1').show();
    $('.btn-img-2').show();
    $('.btn-img-3').show();
    $('.btn-img-4').show();
    $('.btn-img-active-5').show();
    $('.btn-img-active-1').hide();
    $('.btn-img-active-2').hide();
    $('.btn-img-active-3').hide();
    $('.btn-img-active-4').hide();
};


for(var i = 1;i<6;i++){
    $('.btn-img-[i]').hide();
    $('.btn-img-2').show();
    $('.btn-img-3').show();
    $('.btn-img-4').show();
    $('.btn-img-5').show();
    $('.btn-img-active-1').show();
    $('.btn-img-active-2').hide();
    $('.btn-img-active-3').hide();
    $('.btn-img-active-4').hide();
    $('.btn-img-active-5').hide();
}



function overlay(){   
    document.getElementById('overlayshow').style.display = 'block';  
};

function closelayer(){
    document.getElementById('overlayshow').style.display =  "none";
};



function direct_intro(){
    window.location.href = "intro.html";
};
function direct(){
    window.location.href = "main.html";
};
function direct_detail(){
    window.location.href = "product-detail.html";
};
function direct_news(){
    window.location.href = "news.html";
};
function direct_service(){
    window.location.href = "services.html";
}
function direct_regist(){
    window.location.href = "regist.html";
}
function direct_buy_product(){
    window.location.href = "buy-product.html";
}
function direct_contact(){
    window.location.href = "contact.html";
}


$('.header-item ').click(function(){
    $(this).attr('border-bottom','2px solid #0E528B')
});
