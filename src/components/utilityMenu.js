import React, {Component} from 'react';
import Authorize from '../HOC/Authorize';

class LoginDrawer extends Component {
    constructor(props){
        super(props);
        this.functionCheck = this.functionCheck.bind(this);
    }

    functionCheck = ()=>{
        console.log(test);
    }

    render(){
        return (
        <div>
            Logged in as Admin
            <button onClick={this.functionCheck}>Undefined function check</button>
        </div>
        )
    }
}

export default Authorize('isAuthorized')(LoginDrawer);