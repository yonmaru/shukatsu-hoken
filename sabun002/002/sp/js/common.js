// JavaScript Document
$(function(){
    $('#zoom img').okzoom({
        width: 250,  // ルーペの幅
        height:250,  // ルーペの高さ
        round:true,  // ルーペの形
        border: "1px solid black", // ルーペのボーダー指定
        shadow: "0 0 5px #000"  // ルーペの影指定
    });
});

$(function(){
    $('.toggle h2').click(function(){
        $(this).closest('.toggle').toggleClass('open');
    });
});

$(function(){
    $(".fixed_cvbtn").hide();
    $(window).on("scroll", function() {
 
        if ($(this).scrollTop() > 100) {
            $('.fixed_cvbtn').fadeIn("fast");
        } else {
            $('.fixed_cvbtn').fadeOut("fast");
        }
    });
});
