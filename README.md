# 🛒 MiniMart – React Native App

MiniMart is a mobile shopping experience demo app built with React Native. It showcases core mobile development skills like navigation, state management, persistent storage, component reuse, and icon integration using popular open-source tools.

---

## 🚀 Tech Stack

### 🧱 Core Framework
- **React Native** (v0.79.3)
- **React** (v19)

### 📦 Libraries & Tooling
- **Navigation**: `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/stack`, `@react-navigation/native-stack`
- **State Management**: `@reduxjs/toolkit`, `react-redux`, `redux-persist`
- **Icons**: `@fortawesome/react-native-fontawesome`, `@hugeicons/react-native`, `@hugeicons/core-free-icons`
- **SVG Rendering**: `react-native-svg`
- **Toasts**: `react-native-toast-message`
- **Storage**: `@react-native-async-storage/async-storage`

### 🛠️ Development Tools
- **TypeScript**
- **ESLint** + **Prettier**
- **Jest** (unit testing)

---

## ⚙️ Setup & Run Instructions

> 📦 Requires **Node.js >=18** and either **Yarn** or **npm** installed globally.

### 1. Clone the Repository

```bash
git clone https://github.com/IfeBusola263/miniMart.git
cd minimart
```

### 2. Install dependencies
```bash
yarn install
```
###### or
```bash
npm install
```

### 3. Run on Android
###### Ensure an Android emulator is running or a device is connected via USB.
```bash
yarn android
```
###### or
```bash
npm run android
```

### 4. Run on iOS (macOS only)
###### Requires Xcode and an iOS simulator or device.
```bash
yarn ios
```
###### or
```bash
npm run ios
```



## Key Features

- Smooth Bottom Tab Navigation
- Product list with real-time state updates
- Persistent favorites & cart using Redux Persist
- Responsive icon integration (Hugeicons & FontAwesome)
- User feedback via toast messages
- Modular folder and component structure


## 📸 Screenshots

### 🏠 Home Screen

<div align="center">
  <img src="./assets/screenshots/HomePage.png" alt="Home Screen" width="250"/>
</div>

---

### 🛍️ Product Details

<div align="center">
  <img src="./assets/screenshots/ViewProduct.png" alt="View Product" width="250" style="margin: 10px;"  />
  <img src="./assets/screenshots/ItemAddedToCart.png" alt="Item Added To Cart" width="250" style="margin: 10px;"  />
  <img src="./assets/screenshots/AddItemToCartWithToast.png" alt="Add Item To Cart With Toast" width="250" style="margin: 10px;"  />
</div>

---

### 🛒 Cart

<div align="center">
  <img src="./assets/screenshots/Cart.png" alt="Cart Screen" width="250"/>
</div>
