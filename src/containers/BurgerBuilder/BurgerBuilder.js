import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: {
        salad: 3,
        bacon: 2,
        cheese: 1,
        meat: 1
      }
    }
  }
  render() {
    return(
      <Aux>
          <Burger
            ingredients={this.state.ingredients}
          />
          <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;