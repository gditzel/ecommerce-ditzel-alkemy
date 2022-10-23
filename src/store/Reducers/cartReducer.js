import { ADD_TO_CART, CLEAR_CART, INITIALIZE_PRODUCTS, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../Types/types";

export const initialState = {
    products: [],
    cart: [],
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const { el, qty } = action.payload;

            const newItem = state.products.find(
                (product) => product.id === el.id
            );

            const itemInCart = state.cart.find((item) => {
                return item.id === newItem.id
            });

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + qty } : item),
                }
                :
                {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: qty }],
                };
        }
        case REMOVE_ONE_FROM_CART: {
            const itemToDelete = state.cart.find((item) => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item),
                }
                :
                {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                }
        }
        case REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case CLEAR_CART:
            return initialState;
        
        case INITIALIZE_PRODUCTS:
            {
                return {
                    ...state,
                    products: action.payload
                }
            }
        default:
            return state;
    }
}
