import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const Burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            //console.log('bfr',igKey)
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    //console.log('afr',igKey+i)
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
            })
                .reduce((arr, el)=> {
                    return arr.concat(el)
                }, []);
            console.log('tIG',transformedIngredients);

        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please Add the Ingredients</p>
        }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>    
    );
};

export default Burger;