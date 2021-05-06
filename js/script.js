$(document).ready(function () {
    //image height
    var winHeight = $(window).height();
    var winHeightImg = $(window).height() - 140;
    $('header').css('height', winHeightImg);
    $('header').css('height', winHeight);
   

    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

} );


//firebase linking ang getting data
var firebaseConfig = {
  apiKey: "AIzaSyA9CUYNIIGaFuMbUadP6Y8uqozt4kJ8NN4",
  authDomain: "facemash-b52c5.firebaseapp.com",
  projectId: "facemash-b52c5",
  storageBucket: "facemash-b52c5.appspot.com",
  messagingSenderId: "959048373598",
  appId: "1:959048373598:web:c26e543c2d227921062bcf",
  measurementId: "G-FQGF02RLF2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  //Reference messages collection
  var messagesRef = firebase.database().ref('visiters');

//listen for form submit
document.getElementById('visiters').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //get Value
    var name = document.getElementById('name').value ;
    var instaID = document.getElementById('insta-id').value ;

    //save message
    saveMessage(name, instaID);

 //Clear form
 document.getElementById('visiters').reset();
 window.location.href = 'index1.html';
    
}


//function to get form values
function getInput(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, instaID){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: name,
     instaID:instaID

  });
}


// var marvel_clicks = 0;
// var dc_clicks =0;
// function marvel_counter() {
//   marvel_clicks += 1;  
// }
// function dc_counter() {
//   dc_clicks += 1;  
// }
// function result()
// {
//   marvel_clicks  +=1;
//   if(marvel_clicks>=4)
//   {
   
//       if (typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
//           localStorage.clickcount = Number(localStorage.clickcount)+1;
//         } else {
//           localStorage.clickcount = 1;
//         }
//         document.getElementById("marvel_result").innerHTML =   "You Are one of the "  + localStorage.clickcount + " <img src=../images/marvel-logo-34301.png> fans vsisited this site till now.";
//       } else {
//         document.getElementById("marvel_result").innerHTML = "Sorry, your browser does not support web storage...";
//       }
//       var x=document.getElementById("marvel-fan");
//       x.style.display="block";
//       var y=document.getElementById("myCarousel");
//       y.style.display="none";
    
//   }
//   else
//   {
//     dc_clicks +=1;
//     if (typeof(Storage) !== "undefined") {
//       if (localStorage.clickcountdc) {
//         localStorage.clickcountdc = Number(localStorage.clickcountdc)+1;
//       } else {
//         localStorage.clickcountdc = 1;
//       }
//       document.getElementById("dc_result").innerHTML =   "You Are one of the "  + localStorage.clickcountdc + " <img src=../images/dc-logo.png> fans vsisited this site till now.";
//     } else {
//       document.getElementById("dc_result").innerHTML = "Sorry, your browser does not support web storage...";
//     }
//     var x=document.getElementById("dc-fan");
//     x.style.display="block";
//     var y=document.getElementById("myCarousel");
//     y.style.display="none";
//   }
// }


  
//  function feedback_happy(){
//    alert("Glad to hear it.");
//  }
//  function feedback_sad(){
//   alert("Hope it will be great next time.");
// }

// function result_marvel(){
//   var x=document.getElementById("marvel-fan");
//   x.style.display="block";
//   var y=document.getElementById("myCarousel");
//   y.style.display="none";
// }
// function result_dc(){
//   var x=document.getElementById("dc-fan");
//   x.style.display="block";
//   var y=document.getElementById("myCarousel");
//   y.style.display="none";
// }
