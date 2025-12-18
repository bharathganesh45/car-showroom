// Car Data - 10+ cars with specifications and multiple images
// To add your own images:
// 1. Place your car images in the 'images' folder
// 2. Update the 'images' array below with your image file paths
// 3. Supported formats: .jpg, .jpeg, .png, .webp
// Example: "images/toyota-camry-1.jpg"

const carsData = [
    {
        make: "VolksWagon",
        model: "Vento H-line AT",
        No: "TN:O5 BQ:8880",
        year: 2018,
        price: 525000,
        mileage: 18,
        fuelType: "Petrol",
        transmission: "Automatic",
        about: "Clean Interior and Exterior. Geniune condition car. Insurance current. Tyres 90%. 2nd Owenership. Price:slightly negotiable ",
        color: "Deep gray with metalic finish",
        images: [
            "images/vw/vw1.jpg",
            "images/vw/vw2.jpg",
            "images/vw/vw3.jpg",
            "images/vw/vw4.jpg",
            "images/vw/vw5.jpg"
        ]
    },
    {
        make: "Skoda",
        model: "Rapid",
        No: "TN:66 F:0231",
        year: 2012,
        price: 275000,
        mileage: 20,
        fuelType: "petrol",
        transmission: "Manual",
        about: "Neat Interior and Exterior. Geniune condition car. insurance current. Tyres 80%. 3rd Ownership. Chill AC. Price:slightly negotiable.",
        color: "white",
        images: [
            "images/car2_1.jpg",
            "images/car2_2.jpg",
            "images/car2_3.jpg"
        ]
    },
    {
        make: "Maruthi Suzuki",
        model: "Dzire",
        No: "TN:12 Q:0311",
        year: 2016,
        price: 345000,
        mileage: 18,
        fuelType: "petrol",
        transmission: "Automatic",
        about: "Neat Interior and Exterior. Geniune condition car. New Tyres. Chill AC. 3rd Ownwership. Price: Slightly negotiable.",
        color: "white",
        images: [
            "images/car3_1.jpg",
            "images/car3_2.jpg",
            "images/car3_3.jpg"
        ]
    },
    {
        make: "Hyundai",
        model: "i20 Magna",
        No: "TN:69 AU:5797",
        year: 2013,
        price: 295000,
        mileage: 21,
        fuelType: "Petrol",
        transmission: "Manual",
        about: "Neat Interior and Exterior. Geniune condition car. Tyres 90%. Chill AC. 2nd Ownwership. Price: Slightly negotiable.",
        color: "white",
        images: [
            "images/car4_1.jpg",
            "images/car4_2.jpg",
            "images/car4_3.jpg"
        ]
    },
    {
        make: "Hyundai",
        model: "Eon",
        No: "TN:69 AK:3917",
        year: 2014,
        price: 225000,
        mileage: 20,
        fuelType: "Petrol",
        transmission: "Manual",
        about: "Neat Interior and Exterior. Geniune Condition Car. Touch Screen Music System. Insurance current. Tyres 80%. Chill AC. 2nd Ownwership. Price: Slightly negotiable.",
        color: "Fiery Red",
        images: [
            "images/car5_1.jpg",
            "images/car5_2.jpg",
            "images/car5_3.jpg"
        ]
    },
    {
        make: "Maruthi Suzuki",
        model: "Zen Estilo Vxi",
        No: "TN:59 AT:7977",
        year: 2012,
        price: 195000,
        mileage: 18,
        fuelType: "Petrol",
        transmission: "Manual",
        about: "Neat Interior and Exterior. Good condition car. Tyres 75%. Chill AC. 2nd Ownwership. Price: Slightly negotiable.",
        color: "light Ash color",
        images: [
            "images/car6_1.jpg",
            "images/car6_2.jpg",
            "images/car6_3.jpg"
        ]
    },
    {
        make: "Maruthi Suzuki",
        model: "Alto K10 VXI",
        No: "TN:01 AP:0696",
        year: 2011,
        price: 165000,
        mileage: 20,
        fuelType: "Petrol",
        transmission: "Manual",
        about: "Neat Interior and Exterior. Geniune condition car. Tyres 85%. Chill AC. 2nd Ownership. Price: Slightly negotiable.",
        color: "Tango orange",
        images: [
            "images/car7_1.jpg",
            "images/car7_2.jpg",
            "images/car7_3.jpg"
        ]
    },
    {
        make: "Ford",
        model: "Figo Titanium",
        No: "TN:20 BP:9180",
        year: 2011,
        price: 155000,
        mileage: 15,
        fuelType: "Petrol",
        transmission: "Manual",
        about: "Neat Interior and Exterior. Geniune condition car. Tyres 80%. Chill AC. 2nd Ownership. Price: Slightly negotiable.",
        color: "Metalic White",
        images: [
            "images/car8_1.jpg",
            "images/car8_2.jpg",
            "images/car8_3.jpg"
        ]
    },
    {
        make: "Maruthi Suzuki",
        model: "SX4 ZXi",
        No:"TN:09 BE:7660",
        year: 2010,
        price: 165000,
        mileage: 18,
        fuelType: "petrol",
        transmission: "Manual",
        about: "Neat Interior and Exterior. Geniune condition car. Tyres 80%, Alloy wheels. Chill AC. 3nd Ownership. Price: Slightly negotiable. more details contact us.",
        color: "Sky blue",
        images: [
            "images/vw1.jpg",
            "images/vw2.jpg",
            "images/vw3.jpg"
        ]
    },
    {
        make: "Nissan",
        model: "Altima",
        year: 2021,
        price: 21900,
        mileage: 22000,
        fuelType: "Gasoline",
        transmission: "CVT",
        engine: "2.5L 4-Cylinder",
        color: "Blue",
        images: [
            "images/car10_1.jpg",
            "images/car10_2.jpg",
            "images/car10_3.jpg"
        ]
    },
    {
        make: "Jeep",
        model: "Wrangler",
        year: 2020,
        price: 38900,
        mileage: 40000,
        fuelType: "Gasoline",
        transmission: "Manual",
        engine: "3.6L V6",
        color: "Green",
        images: [
            "images/car11_1.jpg",
            "images/car11_2.jpg",
            "images/car11_3.jpg"
        ]
    },
    {
        make: "Subaru",
        model: "Outback",
        year: 2021,
        price: 29900,
        mileage: 26000,
        fuelType: "Gasoline",
        transmission: "CVT",
        engine: "2.5L 4-Cylinder",
        color: "Blue",
        images: [
            "images/car12_1.jpg",
            "images/car12_2.jpg",
            "images/car12_3.jpg"
        ]
    }
];

// Lightbox state
let lightboxElements = {
    overlay: null,
    image: null,
    caption: null,
    prevBtn: null,
    nextBtn: null,
    closeBtn: null,
    backdrop: null
};

let lightboxState = {
    images: [],
    currentIndex: 0,
    title: ''
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderCars();
    initializeScrollAnimations();
    initializeContactForm();
    initializeMobileMenu();
    initializeLightbox();
});

// Smooth Scrolling Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const scrollPosition = window.scrollY + navHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Render Cars
function renderCars() {
    const carsGrid = document.getElementById('carsGrid');
    
    carsData.forEach((car, index) => {
        const carCard = createCarCard(car, index);
        carsGrid.appendChild(carCard);
    });
}

// Create Car Card Element
function createCarCard(car, index) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.setAttribute('data-car-index', index);
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(car.price);
    
    // Format mileage
    const formattedMileage = new Intl.NumberFormat('en-US').format(car.mileage);
    
    // Create image carousel
    const imageContainer = document.createElement('div');
    imageContainer.className = 'car-image-container';
    
    const carImage = document.createElement('img');
    carImage.className = 'car-image';
    carImage.src = car.images[0];
    carImage.alt = `${car.make} ${car.model}`;
    carImage.loading = 'lazy';
    // Handle missing images
    carImage.onerror = function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23ddd" width="800" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
        this.alt = 'Image not available';
    };
    
    // Navigation buttons
    const prevBtn = document.createElement('button');
    prevBtn.className = 'car-image-nav prev';
    prevBtn.innerHTML = '‹';
    prevBtn.setAttribute('aria-label', 'Previous image');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'car-image-nav next';
    nextBtn.innerHTML = '›';
    nextBtn.setAttribute('aria-label', 'Next image');
    
    // Image indicators
    const indicators = document.createElement('div');
    indicators.className = 'car-image-indicators';
    car.images.forEach((_, imgIndex) => {
        const indicator = document.createElement('div');
        indicator.className = `car-indicator ${imgIndex === 0 ? 'active' : ''}`;
        indicator.setAttribute('data-image-index', imgIndex);
        indicators.appendChild(indicator);
    });
    
    imageContainer.appendChild(carImage);
    imageContainer.appendChild(prevBtn);
    imageContainer.appendChild(nextBtn);
    imageContainer.appendChild(indicators);
    
    // Carousel functionality
    let currentImageIndex = 0;
    
    function updateImage(index) {
        const newImageSrc = car.images[index];
        carImage.src = newImageSrc;
        indicators.querySelectorAll('.car-indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
    }
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + car.images.length) % car.images.length;
        updateImage(currentImageIndex);
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % car.images.length;
        updateImage(currentImageIndex);
    });
    
    indicators.querySelectorAll('.car-indicator').forEach((indicator, imgIndex) => {
        indicator.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = imgIndex;
            updateImage(currentImageIndex);
        });
    });
    
    // Auto-rotate images on hover (optional)
    let autoRotateInterval;
    card.addEventListener('mouseenter', () => {
        autoRotateInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % car.images.length;
            updateImage(currentImageIndex);
        }, 3000);
    });
    
    card.addEventListener('mouseleave', () => {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
    });
    
    // Car details
    const carDetails = document.createElement('div');
    carDetails.className = 'car-details';
    
    carDetails.innerHTML = `
        <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
        <div class="car-price">${formattedPrice}</div>
        <ul class="car-specs">
        <li>
                <span class="spec-label">VehicleNO:</span>
                <span class="spec-value">${car.No}</span>
            </li>
            <li>
                <span class="spec-label">Mileage:</span>
                <span class="spec-value">${formattedMileage} KM</span>
            </li>
            <li>
                <span class="spec-label">Fuel Type:</span>
                <span class="spec-value">${car.fuelType}</span>
            </li>
            <li>
                <span class="spec-label">Transmission:</span>
                <span class="spec-value">${car.transmission}</span>
            </li>
            <li>
                <span class="spec-label">Color:</span>
                <span class="spec-value">${car.color}</span>
            </li>
            <li>
                <span class="spec-label">About:</span>
                <span class="spec-value">${car.about}</span>
            </li>
        </ul>
    `;
    
    card.appendChild(imageContainer);
    card.appendChild(carDetails);

    // Open fullscreen lightbox when clicking the car card or image
    card.addEventListener('click', () => {
        if (!car.images || car.images.length === 0) return;
        openLightbox(car.images, currentImageIndex, `${car.year} ${car.make} ${car.model}`);
    });
    
    return card;
}

// Initialize Lightbox
function initializeLightbox() {
    const overlay = document.getElementById('lightbox');
    if (!overlay) return;

    const image = overlay.querySelector('.lightbox-image');
    const caption = overlay.querySelector('.lightbox-caption');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const backdrop = overlay.querySelector('.lightbox-backdrop');

    lightboxElements = { overlay, image, caption, prevBtn, nextBtn, closeBtn, backdrop };

    const changeHandler = (direction) => {
        changeLightboxImage(direction);
    };

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); changeHandler(-1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); changeHandler(1); });
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
    if (backdrop) backdrop.addEventListener('click', () => closeLightbox());

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightboxElements.overlay || !lightboxElements.overlay.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            changeLightboxImage(1);
        } else if (e.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        }
    });
}

function openLightbox(images, startIndex, title) {
    if (!lightboxElements.overlay || !images || images.length === 0) return;

    lightboxState.images = images;
    lightboxState.currentIndex = startIndex || 0;
    lightboxState.title = title || '';

    updateLightboxImage();
    lightboxElements.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightboxElements.overlay) return;
    lightboxElements.overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    if (!lightboxState.images || lightboxState.images.length === 0) return;
    const length = lightboxState.images.length;
    lightboxState.currentIndex = (lightboxState.currentIndex + direction + length) % length;
    updateLightboxImage();
}

function updateLightboxImage() {
    if (!lightboxElements.image || !lightboxState.images.length) return;
    const src = lightboxState.images[lightboxState.currentIndex];
    lightboxElements.image.src = src;
    lightboxElements.image.alt = lightboxState.title || 'Car image';

    if (lightboxElements.caption) {
        const current = lightboxState.currentIndex + 1;
        const total = lightboxState.images.length;
        lightboxElements.caption.textContent = `${lightboxState.title} (${current} / ${total})`;
    }
}

// Scroll Animations using Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe car cards
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        observer.observe(card);
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

