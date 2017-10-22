import React from 'react';
import { Alert } from 'react-bootstrap';
import './Alert.css';

class AlertInstance extends React.Component{
    constructor(props){
        super(props);
        this.handleAlertDismiss = this. handleAlertDismiss.bind(this);
    }

	handleAlertDismiss = () => {
        const { showAlert } = this.props;
        this.setState({
			showAlert
		});       
    }
    render(){
        const  {showAlert, type, title, message} = this.props;
        if (showAlert) {
            return(
                <Alert bsStyle={type} onDismiss={this.handleAlertDismiss}>
                    <h4> {title} </h4>
                    <p> {message} </p>
                </Alert>
            );
        }
        return(<div></div>)
    }
}
export default AlertInstance;