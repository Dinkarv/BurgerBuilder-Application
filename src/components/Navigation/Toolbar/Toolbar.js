import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Drawertoolbar from '../SideDrawer/DrawerToolbar/Drawertoolbar';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <Drawertoolbar clicked={props.clickEvent}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;