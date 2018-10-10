import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.4,
    cheese: 0.7,
    bacon: 1.3,
    meat: 1.9
}

class BurgerBuilder extends Component {
    /* constructor(){
        super(props);
    } */

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        placeOrder: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        console.log(type);
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const updatedIngredientsPrice = INGREDIENT_PRICE[type];
        const newPrice = this.state.totalPrice+updatedIngredientsPrice;
        
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    
    removeIngredientHandler = (type) => {

        console.log("in remove",type);
        const oldCount = this.state.ingredients[type];
        if(oldCount !== 0){
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const updatedIngredientsPrice = INGREDIENT_PRICE[type];
            const newPrice = this.state.totalPrice - updatedIngredientsPrice;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            console.log(this.state.totalPrice);
            this.updatePurchaseState(updatedIngredients);
        }else{
            return;
        }
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
                .map(igKey => {
                    return ingredients[igKey];
                })
                .reduce((sum, el) => {
                    return sum+el;
                }, 0);
                this.setState({placeOrder: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancel = () => {
        this.setState({purchasing: false});
    }

    purchaseContinue = () => {
        alert("You Conitnued");
    }

    render () {
        const disabledProperty = {
            ...this.state.ingredients
        };

        for(let key in disabledProperty){
            disabledProperty[key] = disabledProperty[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelWindow={this.purchaseCancel}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCancel={this.purchaseCancel} 
                    purchaseContinue={this.purchaseContinue}
                    totalPrice={this.state.totalPrice}/>
                </Modal>
                <Burger 
                    ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledProperty}
                    price={this.state.totalPrice}
                    purchasable={this.state.placeOrder}
                    purchasing={this.purchaseHandler}/>
            </Aux>
        );
    }
};

export default BurgerBuilder;