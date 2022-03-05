import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { setPizzas } from "./redux/actions/pizzas";
import "./scss/app.scss";

function App() {



  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((obj) => dispatch(setPizzas(obj.pizzas)));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
