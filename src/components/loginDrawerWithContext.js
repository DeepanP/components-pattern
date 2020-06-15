import React, {Component} from 'react';
import UserHolder from './userHolder';
import {UserContext} from '../context/userContext';

class LoginDrawerContext extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const contextP = this.context;
        console.log(contextP);
    return (<div>Logged in as
            <UserHolder user={contextP}></UserHolder>
        </div>);
    }
}
LoginDrawerContext.contextType = UserContext;

export default LoginDrawerContext;