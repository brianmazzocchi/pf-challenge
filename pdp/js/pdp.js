document.addEventListener("DOMContentLoaded", function (event) {

    //Categories
    var categorySelect = document.getElementById('categorySelect');
    var categorySelectArrow = document.getElementById('categorySelectArrow');
    var categorySelectOptions = document.getElementById('categorySelectOptions');

    categorySelectOptions.style.display = 'none';

    function toggleOptionsDisplay() {
        if (categorySelectOptions.style.display === 'none') {
            categorySelectOptions.style.display = 'block';
        } else {
            categorySelectOptions.style.display = 'none';
        }
    }

    categorySelect.addEventListener('click', toggleOptionsDisplay);

    categorySelectArrow.addEventListener('click', toggleOptionsDisplay);

    //Product description tabs
    function showContent(contentType) {
        document.getElementById('description-content').style.display = 'none';
        document.getElementById('specification-content').style.display = 'none';
        document.getElementById('reviews-content').style.display = 'none';

        // Mostrar el contenido deseado
        document.getElementById(`${contentType}-content`).style.display = 'block';

        // Resaltar visualmente la pestaña seleccionada
        document.querySelectorAll('.product-columns-header > div').forEach(tab => {
            tab.style.borderBottom = tab.classList.contains(`col-${contentType}`) ? '2px solid #E73C17' : 'none';
        });
    }


    document.getElementById('product-description').addEventListener('click', function () {
        showContent('description');
    });

    document.getElementById('product-specification').addEventListener('click', function () {
        showContent('specification');
    });

    document.getElementById('product-reviews').addEventListener('click', function () {
        showContent('reviews');
    });

    //Subscribe logic
    var subscribeButton = document.getElementById('subscribeButton');
    var subscribeInput = document.getElementById('subscribeInput');

    subscribeButton.addEventListener('click', function () {
        subscribeButton.classList.add('subscribed');
        subscribeButton.innerHTML = 'Subscribed!';
        subscribeInput.placeholder = 'joedoe@gmail.com';

    });


    if (window.innerWidth < 768) {
        console.log("Mobile")
        var qtySelector = document.querySelector(".qty-selector");
        var addToCartButton = document.querySelector(".add-to-cart");
        addToCartButton.parentNode.insertBefore(qtySelector, addToCartButton);

        var buyNowButton = document.querySelector(".price-buy button");
        addToCartButton.parentNode.insertBefore(buyNowButton, addToCartButton);


        var plusImg = document.querySelector(".qty-selector img[src='/img/plus.png']");
        if (plusImg) {
            plusImg.src = '/img/plus-mobile.png';
        }

        var minusImg = document.querySelector(".qty-selector img[src='/img/minus.png']");

        if (minusImg) {
            minusImg.src = '/img/minus-mobile.png';
        }
    }








});