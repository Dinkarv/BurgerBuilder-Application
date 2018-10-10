import React from 'react';
import classes from './BuildControl.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' }
]

const buildControls = (props) => {
    console.log(props)
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    key={ctrl.label}
                    label={ctrl.label} />
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;