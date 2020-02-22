// Globals //
// ============================================= //

    // Element Grabbers //
    // ============================================= //

    // Arrays //
    // ============================================= //

    // Objects //
    // ============================================= //

    // Variables //
    // ============================================= //

// Functions //
// ============================================= //

    // Portfolio Slide-Show //
    // ============================================= //
    var slideIndex = 0;

    function showSlides() {
        
        const slides = document.getElementsByClassName("portfolioSlide");

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1
        }

        slides[slideIndex-1].style.display = "block";

        setTimeout(showSlides, 3500);
    }

// Calls //
// ============================================= //

showSlides();

  
