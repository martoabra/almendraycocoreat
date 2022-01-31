import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  REST_TO_CART,
  VACIAR_CART,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const exist = state.cartItems.find((x) => x.id === action.payload.id);
      let newCartItems = state.cartItems;
      if (exist) {
        newCartItems.map((x) => {
          if (x.id === action.payload.id) {
            x.qty = x.qty + 1/2;
          }
          return x;
        });
      } else {
        newCartItems = [...newCartItems, { ...action.payload, qty: 1 }];
      }

      return {
        ...state,
       
        cartItems: newCartItems,
      };
    }

    case REST_TO_CART: {
      let newCartItems = state.cartItems;
      newCartItems.map((x) => {
        if (x.id === action.payload.id) {
          x.qty = x.qty - 1/2;;
        }
        return x;
      });

      return {
        ...state,
        
        cartItems: newCartItems,
      };
    }

    case VACIAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
