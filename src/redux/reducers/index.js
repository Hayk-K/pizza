import { combineReducers } from "redux";
import filtersReducer from "../reducers/filters";
import pizzaReduser from "../reducers/pizzas";

const rootReduser = combineReducers({
  filters: filtersReducer,
  pizzas: pizzaReduser,
});

export default rootReduser;
