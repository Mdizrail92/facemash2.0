
 $('.carousel').carousel({
    interval: 1000 * 50
     });
 
 var marvel_clicks = 0;
 var dc_clicks =0;
 function marvel_counter() {
   marvel_clicks += 1;  
   console.log(marvel_clicks);
 }
 function dc_counter() {
   dc_clicks += 1;  
 }
 function result()
 {
   marvel_clicks  +=1;
  
   if(marvel_clicks>=4 || marvel_clicks > dc_clicks+1)
   {
    
       if (typeof(Storage) !== "undefined") {
         if (localStorage.clickcount) {
           localStorage.clickcount = Number(localStorage.clickcount)+1;
         } else {
           localStorage.clickcount = 1;
         }
         document.getElementById("marvel_result").innerHTML =   "You Are one of the "  + localStorage.clickcount + " <img src=../images/marvel-logo-34301.png> fans vsisited this site till now.";
       } else {
         document.getElementById("marvel_result").innerHTML = "Sorry, your browser does not support web storage...";
       }
       var x=document.getElementById("marvel-fan");
       x.style.display="block";
       var y=document.getElementById("myCarousel");
       y.style.display="none";
     
   }
   else
   {
     dc_clicks +=1;
     if (typeof(Storage) !== "undefined") {
       if (localStorage.clickcountdc) {
         localStorage.clickcountdc = Number(localStorage.clickcountdc)+1;
       } else {
         localStorage.clickcountdc = 1;
       }
       document.getElementById("dc_result").innerHTML =   "You Are one of the "  + localStorage.clickcountdc + " <img src=../images/dc-logo.png> fans vsisited this site till now.";
     } else {
       document.getElementById("dc_result").innerHTML = "Sorry, your browser does not support web storage...";
     }
     var x=document.getElementById("dc-fan");
     x.style.display="block";
     var y=document.getElementById("myCarousel");
     y.style.display="none";
   }
 }
 
 
   
  function feedback_happy(){
    alert("Glad to hear it.");
  }
  function feedback_sad(){
   alert("Hope it will be great next time.");
 }
 
 function result_marvel(){
   var x=document.getElementById("marvel-fan");
   x.style.display="block";
   var y=document.getElementById("myCarousel");
   y.style.display="none";
 }
 function result_dc(){
   var x=document.getElementById("dc-fan");
   x.style.display="block";
   var y=document.getElementById("myCarousel");
   y.style.display="none";
 }
 
 