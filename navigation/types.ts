import {type Product} from '../screens/products/types';

export type RootParamList = {
  Home: undefined;
  ProductDetails: Product;
};

export type TabParamList = {
  TabHome: undefined;
  Cart: undefined;
  Favorites: undefined;
  Profile: undefined;
};
