// Menu items data with actual image filenames
const menuItems = [
    // Cakes
    { name: 'Berry Chantilly Cake', category: 'cakes', image: 'images/berrychantillycake.jpeg' },
    { name: 'Blueberry Combo Cake', category: 'cakes', image: 'images/blueberrycombo.jpeg' },
    { name: 'Classic Cake', category: 'cakes', image: 'images/cake1.jpeg' },
    { name: 'Celebration Cake', category: 'cakes', image: 'images/cake2.jpeg' },
    { name: 'Signature Cake', category: 'cakes', image: 'images/cake1.jpg' },
    { name: 'Cheesecake', category: 'cakes', image: 'images/cheesecake.jpeg' },
    { name: 'Orange Cake', category: 'cakes', image: 'images/orangecake.jpeg' },
    { name: 'Many Cakes Platter', category: 'cakes', image: 'images/manycakes.jpeg' },
    { name: 'Red Velvet Cupcake', category: 'cakes', image: 'images/redvelvetcup.jpeg' },
    { name: 'Strawberry Tiramisu Cake', category: 'cakes', image: 'images/strawberrytiramisu.jpeg' },
    { name: 'Tiramisu Cake', category: 'cakes', image: 'images/tiramisucake.jpeg' },
    { name: 'Vanilla Cupcake', category: 'cakes', image: 'images/vanillacup.jpeg' },
    { name: 'Strawberry Cupcake', category: 'cakes', image: 'images/strawberrycup.jpeg' },
    
    // Pastries
    { name: 'Apple Pie', category: 'pastries', image: 'images/applepie.jpeg' },
    { name: 'Cherry Muffin', category: 'pastries', image: 'images/cherrymuff.jpeg' },
    { name: 'Chocolate Muffin', category: 'pastries', image: 'images/chocomuff.jpeg' },
    { name: 'Churros', category: 'pastries', image: 'images/churros.jpeg' },
    { name: 'Choco Churros', category: 'pastries', image: 'images/chocochurros.jpeg' },
    { name: 'Color Breads', category: 'pastries', image: 'images/colorbreads.jpeg' },
    { name: 'Croissant', category: 'pastries', image: 'images/croissant.jpeg' },
    { name: 'Cupcakes Assorted', category: 'pastries', image: 'images/cupcakes.jpeg' },
    { name: 'Donut', category: 'pastries', image: 'images/donut.jpeg' },
    { name: 'Lily Muffin', category: 'pastries', image: 'images/lillymuff.jpeg' },
    { name: 'Pastry Special', category: 'pastries', image: 'images/pastry1.jpeg' },
    { name: 'Peach Pastry', category: 'pastries', image: 'images/peach.jpeg' },
    { name: 'Pink Vanilla Muffin', category: 'pastries', image: 'images/pinkvanillamuff.jpeg' },
    { name: 'Teddy Cookies', category: 'pastries', image: 'images/teddycookies.jpeg' },
    { name: 'Teddy Muffin', category: 'pastries', image: 'images/teddymuff.jpeg' },
    
    // Drinks
    { name: 'Berry Drinks', category: 'drinks', image: 'images/berrydrinks.jpeg' },
    { name: 'Black Lemon Tea', category: 'drinks', image: 'images/blacklemontea.jpeg' },
    { name: 'Choco Bust Drink', category: 'drinks', image: 'images/chocobustdrink.jpeg' },
    { name: 'Choco Chip Cup', category: 'drinks', image: 'images/chocochincup.jpeg' },
    { name: 'Coffee Combo', category: 'drinks', image: 'images/coffeecombo.jpeg' },
    { name: 'Cold Coffee', category: 'drinks', image: 'images/coldcoffee.jpeg' },
    { name: 'Drinks Assorted', category: 'drinks', image: 'images/drinks.jpeg' },
    { name: 'Drinks Special', category: 'drinks', image: 'images/drinks1.jpeg' },
    { name: 'Iced White Mocha Drink', category: 'drinks', image: 'images/icedwhitemochadrink.jpeg' },
    { name: 'Latte Combo', category: 'drinks', image: 'images/lattecombo.jpeg' },
    { name: 'Matcha Drink', category: 'drinks', image: 'images/matchadrink.jpeg' },
    { name: 'Orange Mojito', category: 'drinks', image: 'images/orangemojito.jpeg' },
    { name: 'Purple Combo', category: 'drinks', image: 'images/purplecombo.jpeg' },
    { name: 'Strawberry Combo', category: 'drinks', image: 'images/strawberrycombo.jpeg' },
    
    // Backgrounds (decorative)
    { name: 'Bakery Ambiance', category: 'cakes', image: 'images/bakery-bg.jpg.jpeg' },
    { name: 'Fresh Bakery', category: 'pastries', image: 'images/bakery-bg2.jpeg' },
    { name: 'Bakery Selection', category: 'cakes', image: 'images/bakery-bg3.jpeg' },
    { name: 'Sweet Treats', category: 'pastries', image: 'images/bakery-bg4.jpeg' },
    { name: 'Cake Display', category: 'cakes', image: 'images/cakesglass.jpeg' },
    { name: 'Cake Showcase', category: 'cakes', image: 'images/cakesglass2.jpeg' }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const categoryCards = document.querySelectorAll('.category-card');

// Function to render menu items
function renderMenuItems(filter = 'all') {
    menuGrid.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
    
    filteredItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.animationDelay = `${index * 0.05}s`;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.src='images/placeholder.jpg'">
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <span class="menu-item-category">${item.category}</span>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
}

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value and render items
        const filter = button.getAttribute('data-filter');
        renderMenuItems(filter);
    });
});

// Category card click functionality
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        
        // Scroll to menu section
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        
        // Update active filter button
        setTimeout(() => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                }
            });
            
            renderMenuItems(category);
        }, 500);
    });
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.transform = navLinks.classList.contains('active')
            ? index === 0 ? 'rotate(45deg) translateY(7px)' 
                : index === 1 ? 'opacity(0)' 
                : 'rotate(-45deg) translateY(-7px)'
            : 'none';
    });
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('.category-card, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Contact form submission
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message (in a real app, this would send data to a server)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    e.target.reset();
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroDecoration = document.querySelector('.hero-decoration');
    
    if (heroDecoration) {
        heroDecoration.style.transform = `translate(0, ${scrolled * 0.5}px)`;
    }
});

// Initial render of all menu items
renderMenuItems('all');

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});


