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
