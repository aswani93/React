import React , {Component } from 'react';

class Login extends Component{
 
    

    render(){
        return(
        <div className="login-form">
            <form >
            <div className="input-box">
                <label>Username: <input type="text" name="username" onChange={this.props.handleChange}/></label>
            </div>
            <div className="input-box">
                <label>Password: <input type="text" name="password" onChange={this.props.handleChange}/></label>
            </div>
            <div className="btn-box">
                <input type="button" value="submit" onClick={this.props.handleSubmit}/>  
            </div>
            </form>
        </div>
        );
    }
} 

export default Login; 