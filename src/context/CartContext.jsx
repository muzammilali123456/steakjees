import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const USD_TO_PKR = 278;
export const formatPKR = (usd) => `Rs. ${Math.round(usd * USD_TO_PKR).toLocaleString()}`;

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return { ...state, items: state.items.map(i => i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i) };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case 'UPDATE_QTY': {
      if (action.payload.quantity <= 0) return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
      return { ...state, items: state.items.map(i => i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i) };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const addItem    = (p)    => dispatch({ type: 'ADD_ITEM',    payload: p });
  const removeItem = (id)   => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const updateQty  = (id,q) => dispatch({ type: 'UPDATE_QTY',  payload: { id, quantity: q } });
  const clearCart  = ()     => dispatch({ type: 'CLEAR_CART' });
  const totalItems = state.items.reduce((s, i) => s + i.quantity, 0);
  const subtotal   = state.items.reduce((s, i) => s + i.price * i.quantity, 0);
  return (
    <CartContext.Provider value={{ items: state.items, addItem, removeItem, updateQty, clearCart, totalItems, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
};