


(function() {
  // Use event listener instead of window.onload
  document.addEventListener("DOMContentLoaded", pageReady);

  function pageReady() {
    var bigImage = document.getElementById("mainImg");
    //var galleryImages = document.getElementById("gallery");
    var galleryImages = document.getElementsByClassName("gallery-img");

    // Loop through the gallery images and attach event listeners
    for (var i = 0; i < galleryImages.length; i++) {
      galleryImages[i].addEventListener("mouseover", switchPic);
      galleryImages[i].addEventListener("mouseout", resetPic);
    }

    function switchPic() {
      bigImage.src = this.src;
    }

    function resetPic() {
      bigImage.src = "images/title.png";
    }
  }
})();