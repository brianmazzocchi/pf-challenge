document.addEventListener("DOMContentLoaded", function () {
    // Initial parameters
    const carouselFrame = document.querySelector(".carousel-frame");
    const contentWidth = carouselFrame.scrollWidth;
    
    let position = contentWidth / 2;
    let innerWidth = window.innerWidth;
   
    const speed = 3; 
    let direction = -1; 
    let firstConditionMet = false;
    const tolerance = 3;
    
    function animateCarousel() {
        // Calculate the position as it changes over time
        position += speed * direction;        

        // Condition to avoid the carousel to go off the screen | left
        if (position < 0) {            
            direction *= -1;        
            firstConditionMet = true;
        }        

        if (firstConditionMet) {        
            // Avoids the carousel to go off the screen | right
            if (Math.abs(position) > Math.abs(innerWidth) + tolerance) {
                console.log("here is done", position)
                direction *= -1;
            }
        }
        
        carouselFrame.style.transform = `translateX(${position}px)`;

        requestAnimationFrame(animateCarousel);
    }
    
    animateCarousel();
});
















