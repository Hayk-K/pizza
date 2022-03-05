import React from "react";

const Categories = React.memo(({ items, onClickItem}) => {
      
  const [categories, setCategoris] = React.useState(null)

  const onSelectItem = (index) => {
        setCategoris(index)
        onClickItem(index)
  }

return (
<div className="categories">
  <ul>
    <li className={categories === null ? 'active': ''} onClick={() => onSelectItem(null)}>Все</li>
    {items && items.map((name, index) => {
      return <li className={categories === index ? 'active': ''}  onClick={() => onSelectItem(index) } key={name}>{name}</li>;
    })}
  </ul>
</div> 
);
})

export default Categories;
