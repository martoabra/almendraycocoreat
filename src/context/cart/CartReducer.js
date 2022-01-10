import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, REST_TO_CART, AGRE_TO_CART } from "../Types";

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
            x.qty++;
          }
          return x;
        });
      } else {
        newCartItems = [...newCartItems, { ...action.payload, qty: 1 }];
      }

      return {
        ...state,
        /* cartItems: [...state.cartItems, action.payload], */
        cartItems: newCartItems,
      };
    }

    case REST_TO_CART: { 
      const exist = state.cartItems.find((x) => x.id === action.payload.id);
      return {
      ...state,
      cartItems: state.cartItems.find(
        (item) => item.id === item.qty--
      ),
    };
    }

    case AGRE_TO_CART: { 
      return {
      ...state,
      cartItems: state.cartItems.find(
        (item) => item.id === item.qty++
      ),
    };
    }


    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;