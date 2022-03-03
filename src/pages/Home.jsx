import React from "react";
import Categories from "../Components/Categories";
import PizaaBlock from "../Components/PizaaBlock";
import SortPopup from "../Components/SortPopup";

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            {name: "алфавиту", type: 'alphabet'}
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => {
          return <PizaaBlock {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
