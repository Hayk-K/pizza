import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Categories from "../Components/Categories";
import LoadingBlock from "../Components/LoadingBlock";
import PizaaBlock from "../Components/PizaaBlock";
import SortPopup from "../Components/SortPopup";
import { setCategory, setSortBy } from "../redux/actions/filters";
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
  { name: "алфавиту", type: "name" },
];

const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onClickSort = React.useCallback((index) => {
    dispatch(setSortBy(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoriesName}
        />
        <SortPopup
          sortBy={sortBy}
          items={sortName}
          onClickSortType={onClickSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => {
              return <PizaaBlock {...item} key={item.id} />;
            })
          : Array(10)
              .fill()
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
