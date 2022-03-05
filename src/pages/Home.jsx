import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Categories from "../Components/Categories";
import PizaaBlock from "../Components/PizaaBlock";
import SortPopup from "../Components/SortPopup";
import { setCategory } from "../redux/actions/filters";

const categoriesName = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortName = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];
const Home = () => {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoriesName} />
        <SortPopup items={sortName} />
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
