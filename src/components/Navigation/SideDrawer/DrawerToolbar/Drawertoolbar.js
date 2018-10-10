import React from 'react';
import classes from './Drawertoolbar.css';

const drawerToolBar = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToolBar;