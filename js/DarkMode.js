
function clicked() {
    $('body').toggleClass('dark-mode');
}


$("#sun").css("visibility","hidden");

$("#moon").click(function() {
   setTimeout( function(){
      $("#moon").css("visibility","hidden");
      $("#sun").css("visibility","visible");
   } ,0);
   
   $("#sun").animate(
      { deg: 230 },
      {
        duration: 500,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        },
        complete: function() {
          $(this).css({ deg: 0 }); 
        }
      }
    );

   
 });

 $("#sun").click(function() {

   setTimeout( function(){
      $("#sun").css("visibility","hidden");
      $("#moon").css("visibility","visible");

   } ,0);


   $({angle:250 }).animate(
      { angle: 0 },
      {
        duration: 400 ,
       step:function(now) {
         $("#moon").css({ transform: 'rotate(' + now + 'deg)' });
       }
      }
    );

   
 });
 
 


