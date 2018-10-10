import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
                    );
        });

    return(
        <Aux>
            <h3>Your Order Summary</h3>
            <p>Your Delicious Burger with following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <span>Your Total Price is: <strong>{props.totalPrice.toFixed(2)}</strong></span>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
        </Aux>
    );
};

export default orderSummary; 