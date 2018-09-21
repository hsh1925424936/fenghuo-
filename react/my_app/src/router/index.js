import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Test from '../pages/test/index';

export default class RouteConfig extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Test}/>
                </Switch>
            </HashRouter>
        )
    }
}