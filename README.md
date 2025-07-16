# 💱 Currency Converter App

A responsive and dynamic currency converter built using **React.js** and **Fetch API**. This application allows users to convert between different world currencies using live exchange rates fetched from a public API. Built as part of a hands-on learning experience inspired by Hitesh Choudhary’s React course on YouTube.

---

## ✨ Features

- 🌍 Live currency conversion based on real-time exchange rates
- 🔄 Two-way conversion: swap base and target currencies
- 💡 Clean UI with dropdowns for selecting currencies
- ⚡ Instant result update on user input
- 🧠 Built using React fundamentals like `useState`, `useEffect`, and array mapping

---

## 🧑‍💻 Tech Stack

- **React.js** – Functional components with Hooks
- **Fetch API** – For getting live exchange rates
- **HTML5 + CSS3** – Responsive UI styling (can mention Tailwind/CSS Modules if applicable)
- **Currency Exchange API** – Used for fetching real-time conversion data (e.g., ExchangeRate-API or any other)

---

## 📦 How It Works

1. On component mount, the app fetches supported currencies from the API.
2. User selects the source (base) and target currency from dropdowns.
3. Input field takes the amount to be converted.
4. Using `fetch`, the app requests the latest exchange rate for the selected currencies.
5. Conversion is calculated and displayed in real time.
6. All dropdown options are dynamically rendered using `.map()` from the fetched data.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter

