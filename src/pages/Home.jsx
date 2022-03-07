import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Categories from "../Components/Categories";
import LoadingBlock from "../Components/LoadingBlock";
import PizaaBlock from "../Components/PizaaBlock";
import SortPopup from "../Components/SortPopup";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

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

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoriesName} />
        <SortPopup items={sortName} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? 
          items.map((item) => {
            return <PizaaBlock {...item} key={item.id} />;
          }) : Array(10).fill().map((_, index) => <LoadingBlock key={index}/>)} 
      </div>
    </div>
  );
};

export default Home;
