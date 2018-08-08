import React,{ Component } from 'react';
import PropTypes from 'prop-types';
 
class LoginComponent extends Component{
  static contextTypes = {
    router:PropTypes.object
  }
  constructor(props, context){
    
    super(props, context);
    this.state = {
      username: '',
      password : '',
      status : false
    }
		 this.validateform = {
        	validform : false,
        	checkusername: false,
        	checkpassword : false,
        	formErrors: {username:'',password:''}
      }
      this.localstorvalue = [];
      this.handleinput = this.handleinput.bind(this)
      this.checkform = this.checkform.bind(this)
      this.validatefield = this.validatefield.bind(this)
  }
  handleinput(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},()=> {this.validatefield(name,value)})
  }  
  checkform(){
    this.localstorvalue = {
      username: this.state.username,
      password : this.state.password,
      status : this.state.status
    }
    localStorage.setItem('items',JSON.stringify(this.localstorvalue));
    console.log(localStorage);
    this.context.router.history.push('/dashboard');
  //console.log(this.state);

  }
  componentWillMount(){
   
  }
  validatefield(name,value){
    let checkuser = '';
    switch(name){
      case 'username':
        checkuser = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.validateform.checkusername = checkuser ?  true : false;
        this.validateform.formErrors.username = this.validateform.checkusername ?  'valid' : 'invalid';
        break;
      case 'password':
        this.validateform.checkpassword = value.length>=6;
        this.validateform.formErrors.password = this.validateform.checkpassword ? 'valid'  : 'invalid';
        break;
      default:
      break;
        
    }
    this.validateform.validform = this.validateform.checkusername && this.validateform.checkpassword ? true : false;
    this.setState({status : this.validateform.validform});
   
  }
  render(){
    return(

            <form name="loginform" >
              <div className="form-group">
                <input type="text" name="username" className="form-control" placeholder="Username"  onChange={(e) => this.handleinput(e)}/>
                { this.validateform.formErrors.username === 'invalid' ?  
                <Error name="username" validfield={this.validateform.checkusername}/> :
                ''}
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e) => this.handleinput(e)}/>
                {this.validateform.formErrors.password === 'invalid' ? 
                <Error name="password" validfield={this.validateform.checkpassword}/> : 
                '' }
              </div>
              <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-lg-6 col-md-offset-6">

                            <input disabled={!this.validateform.validform} name="login-submit" className="form-control btn btn-login" value="Log In" onClick={this.checkform}/>
                          </div>
                        </div>
                    </div>
                    
                  </form>

    )
  }

}
class Error extends Component{
	render(){
		return(
		<div>
			{!this.props.validfield ? <span className="error-message">{this.props.name} not valid</span> : ''}
			</div>
			
		);
	}
}
export default LoginComponent;