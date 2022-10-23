import { ADD_TO_CART, CLEAR_CART, INITIALIZE_PRODUCTS, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../Types/types";

export const addToCart = (el, qty) => ({type: ADD_TO_CART, payload: {el, qty}});

export const delFromCart = (id, all = false) => all ? {type: REMOVE_ALL_FROM_CART, payload:id} : {type:REMOVE_ONE_FROM_CART, payload:id};

export const clearCart = () => ({type: CLEAR_CART});

export const initializeProducts = (products) => ({type: INITIALIZE_PRODUCTS, payload: products});
