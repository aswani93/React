import React,{ Component } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import '../App.css';
//import { createStore } from 'redux'

//let store = createStore()

class LoginMainComponent extends Component{

constructor(props){
    
   super(props);
   this.loginclick = this.loginclick.bind(this);
   this.state = {
    logintype : 'login' 
  }
}
  loginclick(type){
    //alert(type);
    this.setState({logintype: type});
  }
	render(){
		return(
			<div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-6 col-lg-6">
                    <a role="button" className={this.state.logintype === 'login' ? "active" : ''} onClick={() => this.loginclick('login')}>Login</a>
                  </div>
                  <div className="col-xs-6 col-lg-6">
                    <a role="button" className={this.state.logintype === 'register' ? "active" : ''} onClick={() => this.loginclick('register')}>Register</a>
                  </div>
                </div>
              </div>
              <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                {this.state.logintype === 'login' ? <LoginComponent/> :  <RegisterComponent/>}
                <div className="form-group">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="text-center">

                            <a role="button" className="forgot-password" >Forgot Password?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}



export default LoginMainComponent;  