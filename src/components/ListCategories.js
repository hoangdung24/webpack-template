import React from "react";
import CategoryItem from './CategoryItem';

const ListCategories = (props) => {

  return (
    <div className="d-flex align-items-center">
      {props.items.map((value) => {
        return (
          <CategoryItem 
            key={value.id}
            {...value}
            itemsSelected={props.itemsSelected.includes(value.id)}
            clickCategory={props.onClickItems} />
        );
      })}
    </div>
  );
};

export default ListCategories;
