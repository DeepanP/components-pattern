/** HOC Autorization checking component */

import React from 'react';

const Authorized = (AuthProps) => (Component) => {
    return (props) => (props[AuthProps] ? <Component {...props}/> : <div>Not yet authorized</div>);
}

export default Authorized;