export type StackRoutesRecord = {
  home: string;
  productDetails: string;
};

export type TabRoutesRecord = {
  tabHome: string;
  cart: string;
  favorites: string;
  profile: string;
};

export const StackRoutes = {
  home: 'Home',
  productDetails: 'ProductDetails',
} as const;

export const TabRoutes = {
  tabHome: 'TabHome',
  cart: 'Cart',
  favorites: 'Favorites',
  profile: 'Profile',
} as const;
