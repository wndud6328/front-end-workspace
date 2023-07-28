// 1. show, hide, toggle
$('#show').click(function(){
    $('#img').show(3000);
});
$('#hide').click(function(){
    $('#img').hide(3000, 'swing');
});
$('#toggle').click(function(){
    $('#img').toggle(3000);
});

// 2. fadeIn, fadeOut, fadeToggle
$('#fadeIn').click(function(){
    $('#img2').fadeIn(2000);
})
$('#fadeOut').click(function(){
    $('#img2').fadeOut(2000);
})
$('#fadeToggle').click(function(){
    $('#img2').fadeToggle(2000);
})
$('#img2').hover(
    function(){
        $(this).fadeTo(1000, 0.5);
    },
    function(){
        $(this).fadeTo(1000, 1);
    }
)

// 3. slideDown, slideUp, slideToggle
$('.menu').click(function(e){
    const content = $(e.target).next();
    // if(content.css('display') === 'none'){
    //     content.slideDown(500);
    // } else {
    //     content.slideUp(500);
    // }
    
    // content.slideToggle(500);

    // 컨텐츠 하나만 slideDown 되도록!!
    $('.contents').slideUp();
    content.slideDown(500);    
});

