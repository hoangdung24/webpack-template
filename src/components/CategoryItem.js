import React from 'react';

const CategoryItem = (props) => {
    const classes = ['category__item', 'np-out-btn'];

    if (props.itemsSelected) {
        classes.push('categorySelected', 'np-in-btn');
    }
    return (
        <div 
            className={classes.join(" ")}
            onClick={() => {props.clickCategory(props.id)}}>
            {props.name}
        </div>
    )
}

export default CategoryItem
