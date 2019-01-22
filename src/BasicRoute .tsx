import React from 'react';
import {HashRouter, Route, Switch,Redirect,BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './login';
import Layouts from './Layout'
import { connect } from 'react-redux'
import Routers from './routerMap'
import { createTrue } from 'typescript';
class BasicRoute extends React.Component<any> {
    constructor(props){
        super(props)
    }
  public  render(){
    const token = this.props.token
        return(
            <HashRouter>
            <Switch>
                <Route exact={true} path="/" component={LoginForm}/>
                <Route exact={true}  path="/detail" component={Layouts}/>
         
                {/* {Routers.map((item, index) => {
               return <Route key={index} path={item.path} exact={true} render={props =>
                (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                   pathname: '/',
                 state: { from: props.location }
                }} />)
                 )} />
             })}  */}
          
         <Redirect  to='/' />
            </Switch>
        </HashRouter>
        );
    }
   
}
// const mapStateToProps = (state, ownProps) => {
//      return { token: state.token }
//   }
export default BasicRoute