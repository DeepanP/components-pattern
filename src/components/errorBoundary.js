import React,{ Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo){
        console.log(error,errorInfo);
        this.setState(
            {
                error: error,
                errorInfo: errorInfo
            }
        );
    }
    render(){
        console.log(this.state.errorInfo);
        return (this.state.errorInfo) ? (<details>
                <summary>
                    <h1>Something went wrong</h1>
                </summary>
            <div>{this.state.errorInfo}</div>
                </details>) : this.props.children;
    }
}

export default ErrorBoundary;