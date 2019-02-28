import React, { Component } from 'react';

class EmailInput extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: ''
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);

    }

    
    onEmailChange(event) {
        const email = event.target.value;

        //this is lifting the state value to the parent
        this.props.onEmailInputChange(email);

        this.setState( () => {
                return {
                    email
                }
            }
        );
    };
    handleOnFocus(event){
        event.target.valid = true;
        this.props.onEmailInputChange();
    }

    render() {


        return (
            <div className="form-group">
                
                <label htmlFor="exampleInputEmail1">Email address:  </label>
                <input 
                    className={this.props.emailInputValidationClass} 
                    id="exampleInputEmail1" 
                    onChange={this.onEmailChange}
                    onFocus={this.handleOnFocus}
                    placeholder="Enter email"
                    type="email"
                    value={this.state.email}
                    required />
                    <div className="invalid-feedback">
                    {this.props.emailErrorMessage}
                </div>     
            </div>
        );
    };
}

export default EmailInput;