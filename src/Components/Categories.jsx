import React from "react";

const Categories = React.memo(({ items, onClickItem, activeCategory }) => {
 
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onClickItem(index)}
                key={name}
              >
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
