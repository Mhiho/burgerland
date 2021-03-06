import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
      .map(igKey => {
        return ( <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} </li> );
      })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicius burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p> <strong>Total price: {props.price.toFixed(2)}</strong> </p>
      <p>Continue for checkout?</p>
      <Button btnType="Danger" clicked={props.clickedCancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.clickedContinue}>CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;
