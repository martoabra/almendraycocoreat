import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer"
import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, REST_TO_CART, VACIAR_CART} from "../Types"

const CartState = ({ children }) => {
    const initalState = {
      showCart: false,
      cartItems: [],
      
    };
  
    const [state, dispatch] = useReducer(CartReducer, initalState);
  
    const addToCart = (item) => {
      dispatch({ type: ADD_TO_CART, payload: item });
    };

    const VaciarCart = (item) => {
      dispatch({ type: VACIAR_CART, payload: item });
    };

    const restToCart = (item) => {
      dispatch({ type: REST_TO_CART, payload: item });
    };
  
    const showHideCart = () => {
      dispatch({ type: SHOW_HIDE_CART });
    };
  
    const removeItem = (id) => {
      dispatch({ type: REMOVE_ITEM, payload: id });
    };
  
    return (
      <CartContext.Provider
        value={{
          showCart: state.showCart,
          cartItems: state.cartItems,
          addToCart,
          restToCart,
          VaciarCart,
          showHideCart,
          removeItem,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartState;