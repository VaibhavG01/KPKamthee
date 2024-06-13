function initMap() {
    // Map options
    var options = {
        zoom: 8,
        center: { lat: 21.20455139760176, lng: 79.20181954997162 } // Initial map center coordinates
    };
    
    // Create the map
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Add a marker
    var marker = new google.maps.Marker({
        position: { lat: 21.20455139760176, lng: 79.20181954997162 },
        map: map,
        title: 'KAMPTEE POLYTECHNIC KAMPTEE (KPK)'
    });
}



// document.getElementById('loginButton').addEventListener('click', function() {
//     alert('Login button clicked!');
// });

// document.getElementById('signupButton').addEventListener('click', function() {
//     alert('Sign Up button clicked!');
// });

document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('navTabs').classList.toggle('active');
    document.getElementById('navButtons').classList.toggle('active');
});


/* Image */
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const pagination = document.querySelector('.carousel-pagination');

    let currentIndex = 0;
    let interval;

    // Create pagination dots
    images.forEach((image, index) => {
        const span = document.createElement('span');
        if (index === 0) {
            span.classList.add('active');
        }
        span.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        pagination.appendChild(span);
    });

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.carousel-pagination span').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const startAutoSlide = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(interval);
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    startAutoSlide();
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
});
