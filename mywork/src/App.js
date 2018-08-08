import React , {Component } from 'react';
import Login from './components/Login';
import { connect , Provider } from 'react-redux';
import { createStore ,combineReducers} from 'redux';
import  mystate  from './mystate';
import {LoginService} from './Services/LoginService';


let allstate=combineReducers({
    mystate:mystate
})

let allstore = createStore(allstate)

class App extends Component{
    render(){
        return (
            <div>
                <Provider store={allstore}>
                    <ConnectedAdminDom/>
                </Provider>
           </div>
        )
    }
  
}

class AdminDom extends Component{
    constructor(props){
        super(props);
        this.state = {
            userid : '',
            username : '',
            password : '',
            usernameerror: '',
            passworderror: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatesection = this.updatesection.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.updatesection('Login');

        console.log(allstore.getState().mystate.userid);
       
    }
    updatesection(section){
        allstore.dispatch({
            type: section ,
            userid: this.state.userid
        })
    }
    handleSubmit(event){
        console.log(this.state);
        //alert('Your name is : '+ this.state.username);
        var e =  0;
        if(this.state.username === ''){
            this.setStat({usernameerror: 'invalid'});
            e = 1;
        }
        if(this.state.password === ''){
            this.setState({passworderror : 'invalid'});
            e = 1;
        }
       
        if(e === 0){
           
            const response = LoginService.checklogin(this.state.username,this.state.password);
            
            response.then(res => {
                if(res.data.login.status === '1' ){
                    this.setState({userid : res.data.login.user_id});
                    this.updatesection('Dasboard'); 
                    
                }
            })
           // this.updatesection('Dasboard'); 
        }
       
    }
    handleChange(event){
       
        this.setState({[event.target.name]: event.target.value});
    }
    render(){
        return(
            <div>
                <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        mystate: state.mystate
    }
}

const ConnectedAdminDom = connect(mapStateToProps,{})(AdminDom);
export default App;