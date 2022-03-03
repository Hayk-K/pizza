import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./scss/app.scss";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((obj) => setPizzas(obj.pizzas));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
