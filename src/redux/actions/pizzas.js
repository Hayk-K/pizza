export const fetchPizzas = () => (dispatch) => {
  fetch("http://localhost:3001/pizzas")
    .then((resp) => resp.json())
    .then((obj) => dispatch(setPizzas(obj)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
