$(document).ready(()=>{
 
  const varyheight = ()=>{
    if ( $('#desdesc').css('display') == 'none' && $('#devdesc').css('display') == 'none' && $('#projdesc').css('display') == 'none' )
     {
      $("section#what_we_do.page-section").css("padding-bottom",'10rem');
     }
     else {
      $("section#what_we_do.page-section").css("padding-bottom",'20rem');
     }
  };

$("#design").click(()=>{
 
  $("#desimg").toggle();
  $("#desdesc").toggle();
//  varyheight();
});
$("#development").click(()=>{
 
  $("#devimg").toggle();
  $("#devdesc").toggle();
//  varyheight();
});
$("#projmanagement").click(()=>{
 
  $("#projimg").toggle();
  $("#projdesc").toggle();
 // varyheight();
});
  

$('.gallery-item').hover( function() {
  

  $(this).find('.img-title').fadeIn(300);
}, function() {
  $(this).find('.img-title').fadeOut(300);

});

}
);