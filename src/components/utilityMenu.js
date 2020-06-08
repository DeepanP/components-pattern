import React, {Component} from 'react';
import Authorize from '../HOC/Authorize';

class LoginDrawer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div>Logged in as Admin</div>
    }
}

export default Authorize('isAuthorized')(LoginDrawer);