const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0 );


const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {

      const cuurentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

        

      const newItem = {
        ...state.items,
        [action.payload.id]: {
          items: cuurentPizzaItems,
          totalPrice: getTotalPrice(cuurentPizzaItems),
        }
        
      };

      const items = Object.values(newItem).map((obj) => obj.items)
      const allPizzas = [].concat.apply([], items );
      const totalPrice = getTotalPrice(allPizzas);
      

      return {
        ...state,
        items: newItem,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
