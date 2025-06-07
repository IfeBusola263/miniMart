import {RootParamList} from './types';

type Routes = {
  home: string;
  productDetails: string;
};

export const StackRoutes: Record<keyof Routes, keyof RootParamList> = {
  home: 'Home',
  productDetails: 'ProductDetails',
};

export const TabRoutes = {
  tabHome: 'TabHome',
  cart: 'Cart',
  favorites: 'Favorites',
  profile: 'Profile',
};
