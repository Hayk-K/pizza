export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const deleteCart = (id) => ({
  type: "DELETE_CART",
  payload: id,
});


