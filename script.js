  var slideIndex = 0;
  var intervalId;

  startInterval();
  showImage(slideIndex);

  function startInterval() {
    intervalId = setInterval(nextImage, 5000);
  }

  function prevImage() {
    slideIndex -= 1;
    showImage(slideIndex);
    resetInterval();
  }

  function nextImage() {
    slideIndex += 1;
    showImage(slideIndex);
    resetInterval();
  }

  function showImage(n) {
    var slides = document.getElementsByClassName('carousel-image');
    var btns = document.getElementsByClassName('carousel-btn');

    // Reset slide index if out of bounds
    if (n < 0) {
      slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
      slideIndex = 0;
    }

    // Calculate slide width in pixels
    var slideWidth = slides[0].offsetWidth;

    // Calculate translation value in pixels
    var translateValue = slideWidth * slideIndex;

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.transform = "translateX(-" + translateValue + "px)";
    }

    // Update active button
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('active');
    }
  }

  function resetInterval() {
    clearInterval(intervalId);
    startInterval();
  }