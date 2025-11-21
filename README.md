# 🛒 GrabIt: Your Next-Gen E-commerce Frontend



Welcome to **Grabit**, a modern, responsive, and feature-rich e-commerce frontend application. This project is built to showcase a high-quality, scalable, and beautifully designed user interface for online shopping.

**[🔗 Live Demo](https://grabit-eshop.netlify.app/)**
---

## ✨ Key Features

* **⚡ Blazing Fast Performance:** Built on **React** for efficient component rendering and a smooth Single Page Application (SPA) experience.
* **🎨 Stunning, Responsive UI:** Leveraging the power of **Tailwind CSS** for utility-first styling, ensuring a fully responsive design across all devices.
* **🧩 Component Library Integration:** Utilizes **DaisyUI** to provide a massive library of pre-designed, accessible, and themeable components, speeding up development.
* **🛣️ Seamless Navigation:** Client-side routing powered by **React Router** for fast, intuitive page transitions.
* **🛒 Shopping Cart Logic:** Dedicated `context` management for handling global state, such as cart items and user authentication (structure included).
* **📂 Organized Codebase:** Clear, maintainable folder structure with dedicated sections for `pages`, `components`, and `context`.

---

## 🚀 Tech Stack

| Category | Technology | Version | Description |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | **React** | 18+ | A JavaScript library for building user interfaces. |
| **Styling** | **Tailwind CSS** | Latest | A utility-first CSS framework for rapid custom design. |
| **UI Components** | **DaisyUI** | Latest | A component plugin that adds beautiful, semantic classes to Tailwind. |
| **Routing** | **React Router** | 6+ | Declarative routing for React applications. |
| **Build Tool** | **Vite** | Latest | Next-generation frontend tooling for a fast development experience. |

---

## 📂 Project Structure

The project follows a component-based architecture for excellent maintainability.
Grabit/
├── node_modules/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and fonts
│   ├── components/         # Reusable UI parts (Navbar, ProductCard, Buttons)
│   ├── context/            # Global state management (CartContext, AuthContext)
│   ├── hooks/              # Custom React Hooks for reusable logic
│   ├── pages/              # Main application views (Home, Products, Checkout)
│   ├── services/           # API calls and data fetching logic
│   ├── App.jsx             # Main routing component
│   └── main.jsx            # Entry point
├── tailwind.config.js      # Tailwind/DaisyUI Configuration
└── package.json
