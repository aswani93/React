import React,{ Component } from 'react';

class RegisterComponent extends Component{
    constructor(props){
        super(props);
        this.formErrors = {
            checkform : '',
            changestatus : ''
        }
        this.state = {
            passwordval : '',
            email : '',
            regpassword: '',
            confirmpass : '',
            status : false
        }
        this.handleinput = this.handleinput.bind(this);
        this.checkformval = this.checkformval.bind(this);
    }
    handleinput(event){
        let pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        let name = event.target.name;
        let value = event.target.value;
        switch(name){
            case 'email':
               this.formErrors.checkform =  value.match(pattern) ? 'valid' : 'invalid';
            break;
            case 'regpassword':
              this.formErrors.checkform =  value > 6 ? 'valid' : 'invalid';
              this.setState({passwordval : value});
            break;
            case 'confirmpass':
              this.formErrors.checkform =   value === this.state.passwordval ? 'valid' : 'invalid';
            break;
            default:
            break;
        }
        this.formErrors.changestatus = this.state.regpassword === 'valid' && this.state.email === 'valid' &&  this.state.confirmpass === 'valid' ? true : false;
        this.setState({[name] : this.formErrors.checkform});
        this.setState({status : this.formErrors.changestatus});
        console.log(this.state);
    }
    checkformval(){
        alert('Ok');
    }
    
    render(){
        return(
           
            <form name="loginform" >
              <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="EmailID"  onChange={(e) => this.handleinput(e)}/>
                { this.state.email === 'invalid' ?  
                <Error name="Email" message="Email is not valid"/> :
                ''}
              </div>
              <div className="form-group">
                <input type="password" name="regpassword" className="form-control" placeholder="Password" onChange={(e) => this.handleinput(e)}/>
                {this.state.regpassword === 'invalid' ? 
                <Error name="password" message="Password is not valid"/> : 
                '' }
              </div>
              <div className="form-group">
                <input type="password" name="confirmpass" className="form-control" placeholder="Confirm Password" onChange={(e) => this.handleinput(e)}/>
                {this.state.confirmpass === 'invalid' ? 
                <Error name="confirm password" message="Password missmatch"/> : 
                '' }
              </div>

              <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-lg-6 col-md-offset-6">

                            <input disabled={!this.state.status} name="login-submit" className="form-control btn btn-login" value="Sign Up" onClick={this.checkformval}/>
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
			 <span className="error-message">{this.props.message}</span>
			</div>
			
		);
	}
}

export default  RegisterComponent;