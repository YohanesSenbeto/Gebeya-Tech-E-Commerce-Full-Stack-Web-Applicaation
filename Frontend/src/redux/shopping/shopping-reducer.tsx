import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
   products :[
    {
      id: 1,
      title: "Cutting-Edge Laptop",
      description: "Experience the ultimate in performance and portability.",
      price: "$1499.99",
      imageUrl: "https://ideogram.ai/api/imageUrls/direct/_T7nv9DwQK6Ox2WvyrqYxg.png",
    },
    {
      id: 2,
      title: "High-Performance Tablet",
      description: "A tablet that combines power and mobility.",
      price: "$999.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Smartphone Pro",
      description: "The latest in smartphone technology.",
      price: "$799.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Wireless Headphones",
      description: "Enjoy high-quality sound without the wires.",
      price: "$199.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1505740106531-4243f3831f5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Smartwatch",
      description: "Stay connected and track your fitness.",
      price: "$299.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1515678911563-ea8a13693745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      description: "Portable and powerful sound for any occasion.",
      price: "$149.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 7,
      title: "4K Ultra HD TV",
      description: "Stunning picture quality for your home entertainment.",
      price: "$1299.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1606813909259-4b66d374f0a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 8,
      title: "Gaming Console",
      description: "The best gaming experience with the latest console.",
      price: "$499.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 9,
      title: "Drone with Camera",
      description: "Capture stunning aerial photos and videos.",
      price: "$599.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 10,
      title: "Virtual Reality Headset",
      description: "Immersive VR experience for gaming and entertainment.",
      price: "$399.99",
      imageUrl: "https://imageUrls.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]
  ,
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
