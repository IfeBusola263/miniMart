import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type Product} from '../../screens/products/types';

export type CartItem = {
  quantity: number;
} & Product;

type InitialState = {
  items: CartItem[];
  faveList: string[];
};

const initialState: InitialState = {
  items: [],
  faveList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.items.find(item => item.id === action.payload.id);

      if (product) {
        product.quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    remove: (state, action: PayloadAction<{id: string; delete?: boolean}>) => {
      const product = state.items.find(item => item.id === action.payload.id);

      if (action.payload.delete) {
        state.items = state.items.filter(prod => prod.id !== action.payload.id);
        return;
      }

      if (product!.quantity > 1) {
        product!.quantity--;
      } else {
        state.items = state.items.filter(prod => prod.id !== action.payload.id);
      }
    },
    bookMark: (state, action: PayloadAction<{id: string}>) => {
      const {id} = action.payload;

      if (!state.faveList.includes(id)) {
        state.faveList.push(id);
      } else {
        state.faveList = state.faveList.filter(prodId => prodId !== id);
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {add, remove, bookMark, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
