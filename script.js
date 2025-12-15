// Car Data - 10+ cars with specifications and multiple images
// To add your own images:
// 1. Place your car images in the 'images' folder
// 2. Update the 'images' array below with your image file paths
// 3. Supported formats: .jpg, .jpeg, .png, .webp
// Example: "images/toyota-camry-1.jpg"

const carsData = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        price: 24500,
        mileage: 35000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "2.5L 4-Cylinder",
        color: "Silver",
        images: [
            "images/car1_1.jpg",
            "images/car1_2.jpg",
            "images/car1_3.jpg"
        ]
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2021,
        price: 22800,
        mileage: 28000,
        fuelType: "Gasoline",
        transmission: "CVT",
        engine: "2.0L 4-Cylinder",
        color: "Blue",
        images: [
            "images/car2_1.jpg",
            "images/car2_2.jpg",
            "images/car2_3.jpg"
        ]
    },
    {
        make: "BMW",
        model: "3 Series",
        year: 2019,
        price: 32900,
        mileage: 42000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "2.0L Turbo 4-Cylinder",
        color: "Black",
        images: [
            "images/car3_1.jpg",
            "images/car3_2.jpg",
            "images/car3_3.jpg"
        ]
    },
    {
        make: "Mercedes-Benz",
        model: "C-Class",
        year: 2020,
        price: 35900,
        mileage: 38000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "2.0L Turbo 4-Cylinder",
        color: "White",
        images: [
            "images/car4_1.jpg",
            "images/car4_2.jpg",
            "images/car4_3.jpg"
        ]
    },
    {
        make: "Audi",
        model: "A4",
        year: 2021,
        price: 38900,
        mileage: 25000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "2.0L Turbo 4-Cylinder",
        color: "Gray",
        images: [
            "images/car5_1.jpg",
            "images/car5_2.jpg",
            "images/car5_3.jpg"
        ]
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2020,
        price: 42900,
        mileage: 45000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "3.5L V6 EcoBoost",
        color: "Red",
        images: [
            "images/car6_1.jpg",
            "images/car6_2.jpg",
            "images/car6_3.jpg"
        ]
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        year: 2019,
        price: 38900,
        mileage: 50000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "5.3L V8",
        color: "Black",
        images: [
            "images/car7_1.jpg",
            "images/car7_2.jpg",
            "images/car7_3.jpg"
        ]
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2021,
        price: 45900,
        mileage: 18000,
        fuelType: "Electric",
        transmission: "Single-Speed",
        engine: "Electric Motor",
        color: "White",
        images: [
            "images/car8_1.jpg",
            "images/car8_2.jpg",
            "images/car8_3.jpg"
        ]
    },
    {
        make: "V0lkswagen",
        model: "vento",
        year: 2020,
        price: 42900,
        mileage: 32000,
        fuelType: "petrol",
        transmission: "Automatic",
        engine: "3.5L V6",
        color: "dark bluue",
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderCars();
    initializeScrollAnimations();
    initializeContactForm();
    initializeMobileMenu();
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
                <span class="spec-label">Mileage:</span>
                <span class="spec-value">${formattedMileage} miles</span>
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
                <span class="spec-label">Engine:</span>
                <span class="spec-value">${car.engine}</span>
            </li>
            <li>
                <span class="spec-label">Color:</span>
                <span class="spec-value">${car.color}</span>
            </li>
        </ul>
    `;
    
    card.appendChild(imageContainer);
    card.appendChild(carDetails);
    
    return card;
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

