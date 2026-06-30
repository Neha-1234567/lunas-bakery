🥐 Luna's Bakery

A fully responsive front-end bakery e-commerce website built with HTML, CSS, and JavaScript. Luna's Bakery lets customers browse products, place orders, track deliveries, leave reviews, and manage their account — while an admin can manage and dispatch orders from a dedicated dashboard.


🎓 Final year academic submission project — built as a single-page, no-framework, no-backend web application.




🔗 Live Preview

Simply open index.html in any modern browser — no installation or server required.


✨ Features

🛍️ Customer Side


Browse 56+ products across 7 categories (Cakes, Pastries, Breads, Muffins, Cupcakes, Drinks, Combos)
Live search bar to instantly find products by name, category, or description
Category filter buttons
Product detail modal with full description
Add to Cart / Buy Now / Quick Order flows
Shopping cart with quantity controls
Checkout with delivery details and payment method
Order confirmation popup showing a unique, copyable Order ID
Order tracking with a live status timeline (Placed → Dispatched → Delivered)
Customer login & signup — logged-in users see their order history automatically
Review & rating system with interactive star picker
Professional footer with quick links, contact info, and social icons


🛠️ Admin Side


Secure admin login
Dashboard to view all orders with full customer details
Update order status (Dispatch / Complete)
Delete orders
Logout



🧰 Tech Stack

LayerTechnologyStructureHTML5StylingCSS3 (Flexbox, Grid, Media Queries)LogicVanilla JavaScript (ES6)Data StorageBrowser localStorage (no backend/database)FontsGoogle Fonts — Playfair Display, Montserrat

No frameworks, no libraries, no build tools — runs directly in the browser.


📁 Project Structure

lunas-bakery/
│
├── index.html          # Complete website (HTML + CSS + JS)
├── style.css            # Alternate styling reference
├── script.js             # Alternate scripting reference
└── images/              # Product and bakery images



🔑 Admin Credentials (Demo)

Email:    admin@lunasbakery.com
Password: admin123


🗃️ How Data is Stored

Since this project has no backend, all data is saved in the browser's localStorage:

KeyStorescartCurrent shopping cartordersAll placed orderscustomersRegistered customer accountsloggedInCustomerActive customer sessionreviewsSubmitted customer reviews


⚠️ Data is local to your browser only and will be lost if browser storage is cleared.




⚠️ Limitations

No real backend or database — uses localStorage only
Passwords are stored in plain text (not production-safe)
Admin credentials are hardcoded in the JS
No real payment gateway integration
Orders aren't synced across devices or users



🔮 Future Improvements

Connect a real backend (Node.js + Express + MongoDB / Firebase)
Add real payment gateway integration (Razorpay / Stripe / UPI)
Real-time order status updates via WebSockets
Admin analytics dashboard with sales charts
Convert to a Progressive Web App (PWA)



🙏 References & Acknowledgements


Traversy Media — HTML/CSS/JS tutorials
Kevin Powell — CSS Flexbox & Grid tutorials
JavaScript Mastery — DOM & localStorage tutorials
ChatGPT (OpenAI) — coding assistance and debugging
Claude AI (Anthropic) — primary AI assistant used to build and refine features



📄 License

This project is created for academic purposes only and is free to use for learning.
