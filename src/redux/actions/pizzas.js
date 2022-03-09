export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  fetch(
    `http://localhost:3001/pizzas?${
      category !== null ? `category=${category}` : ""
    }&_sort=${sortBy}&oreder=desc`
  )
    .then((resp) => resp.json())
    .then((obj) => dispatch(setPizzas(obj)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
