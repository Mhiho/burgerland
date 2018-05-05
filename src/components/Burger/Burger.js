import React, {Component} from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {
  let transformedIngredientsFromObject = Object.keys(props.ingred)
      .map(ingrKey => {
        return [...Array(props.ingred[ingrKey])].map( (_, i) =>{
          return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
        } )
      })
      .reduce((arr,el)=>{
        return arr.concat(el)
      }, []);
      if (transformedIngredientsFromObject.length === 0){
        transformedIngredientsFromObject = <p>Please start adding ingredients!</p>
      }
      console.log(transformedIngredientsFromObject);
  return (
      <div className={classes.Burger}>
        <BurgerIngredient
            type="bread-top" />
            {transformedIngredientsFromObject}
        <BurgerIngredient
            type="bread-bottom" />
      </div>
  );

};

export default burger;
