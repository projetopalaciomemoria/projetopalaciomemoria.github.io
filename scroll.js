$(document).ready(function(){

  $('.cim').hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>400){
      $('.cim').fadeIn();
    }
    else{
      $('.cim').fadeOut();
    }
  })

  $('.cim').click(function(){
    $('body').animate({
      scrollTop:0
    });
  });
});
