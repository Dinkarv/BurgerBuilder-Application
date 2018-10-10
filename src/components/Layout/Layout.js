import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    clickEventHandler = () => {
        const sideDrawerState = this.state.showSideDrawer;
        this.setState({showSideDrawer: !sideDrawerState});
        }

    sideDrawerClosedHandler = () => {
        console.log("in close method");
        const currentState = this.state.showSideDrawer;
        this.setState({showSideDrawer: !currentState});
    }

    render() {
        return (
            <Aux>
                <ToolBar clickEvent={this.clickEventHandler}/>
                <SideDrawer show={this.state.showSideDrawer} open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <div>ToolBar, SideDrawer, BackDrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;