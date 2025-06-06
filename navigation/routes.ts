import {RootParamList} from './types';

type Routes = {
  home: string;
};

export const StackRoutes: Record<keyof Routes, keyof RootParamList> = {
  home: 'Home',
};

export const TabRoutes = {
  tabHome: 'TabHome',
  cart: 'Cart',
  favorites: 'Favorites',
  profile: 'Profile',
};
