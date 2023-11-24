document.addEventListener("DOMContentLoaded", function () {
    
    const arrowDown = document.querySelector('.arrow-down');
    const sideToDesign = document.getElementById('side-to-design');
    
    arrowDown.addEventListener('click', function () {    
        sideToDesign.scrollIntoView({ behavior: 'smooth' });
    });    
});

function getScreenWidth() {
    return window.innerWidth ||
           document.documentElement.clientWidth ||
           document.body.clientWidth;
}
window.addEventListener('load', getScreenWidth);
window.addEventListener('resize', getScreenWidth);

console.log(getScreenWidth());
if (getScreenWidth() < 768) {
    var heroTextElement = document.querySelector('.hero-text');
    
    if (heroTextElement) {
        heroTextElement.classList.remove('hero-text');
        heroTextElement.classList.add('hero-text-mobile');
        
    }

    var arrowDown = document.querySelector('.arrow-down');
    var titleParagraph = document.querySelector('#hero .title-paragraph');
    titleParagraph.appendChild(arrowDown);

    var slider = document.getElementById('slider');
    var inspirations = document.querySelector('#slider .inspirations');

    if (slider && inspirations) {    
        slider.parentNode.insertBefore(inspirations, slider);
    }

    var blogDetailsElement = document.querySelector('.blog-details');
    if (blogDetailsElement) {        
        blogDetailsElement.textContent += " We've set a number of goals to get us there.";
    }
}





