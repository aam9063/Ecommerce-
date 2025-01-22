# TechStore

TechStore is an online store for tech products. This project is built with React and uses various libraries and tools to provide a rich and dynamic user experience.

## Features

- **Navigation**: Uses `react-router-dom` for page navigation.
- **Shopping Cart**: Implemented with a React context (`CartContext`) to handle global cart state.
- **Pagination**: Implemented with a custom hook (`usePagination`).
- **Product Filters**: Implemented with a custom hook (`useProductFilters`).
- **Animations**: Uses `framer-motion` for smooth animations.
- **UI Components**: Uses `react-icons` for icons and `swiper` for image carousels.
- **Styling**: Uses `tailwindcss` for quick and consistent styling.

## Installation

Follow these steps to install and run the project on your local machine.

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

### Clone the repository

```bash
git clone https://github.com/your-username/techstore.git
cd techstore
```

Install dependencies
Using npm:
```bash
npm install
```
Using yarn:
```bash
yarn install
```
Run the development server
Using npm:
```bash
npm run dev
```
Using yarn:
```bash
yarn dev
```
Build for production
Using npm:
```bash
npm run build
```
Using yarn:
```bash
yarn build
```
Project Structure

src/
├── components/
│   ├── Cart/
│   │   └── Cart.jsx
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── ProductCard/
│   │   └── ProductCard.jsx
│   ├── ProductGrid/
│   │   ├── ProductGrid.jsx
│   │   └── ProductFilters.jsx
├── context/
│   ├── CartContext.jsx
│   └── CartProvider.jsx
├── hooks/
│   ├── useCart.js
│   ├── usePagination.js
│   └── useProductFilters.js
├── mocks/
│   └── products.json
├── pages/
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Contact/
│   │   └── Contact.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── ProductDetail/
│   │   └── ProductDetail.jsx
│   └── Products/
│       └── Products.jsx
├── App.jsx
├── index.css
├── main.jsx


Dependencies
React: Main library for building the user interface.
React Router DOM: For page navigation.
Framer Motion: For animations.
React Icons: For icons.
Swiper: For image carousels.
Tailwind CSS: For styling.
Contributing
If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

