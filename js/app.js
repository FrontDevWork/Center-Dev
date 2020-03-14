$('.card-servico').on('mouseover',function(){
    $(this).find('.card-img img').addClass('img-branco');
});

$('.card-servico').on('mouseout',function(){
    $(this).find('.card-img img').removeClass('img-branco');
});
