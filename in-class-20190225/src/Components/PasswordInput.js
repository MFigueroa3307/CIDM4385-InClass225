import React, { Component } from 'react';

class PasswordInput extends Component {

    //constructor
    constructor(props){
        super(props);

        //state
        this.state = {
            password: ''
        }

        //event handlers
        this.onPasswordChange = this.onPasswordChange.bind(this);        

    }

    onPasswordChange(event){
        var password = event.target.value;

        //this is lifting the state value to the parent
        this.props.onPasswordChange(password);

        this.setState( () => {
                return {
                    password
                }
            }
        );
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword">Password:  </label>
                <input className={this.props.passwordInputValidationClass} 
                       id="exampleInputPassword" 
                       onChange={this.onPasswordChange}
                       placeholder="Password" 
                       type="password"
                       value={this.state.password}
                       required />
                       <div className="invalid-feedback">
                    {this.props.passwordErrorMessage}
                </div>      
            </div>
        );
    };
}

export default PasswordInput;