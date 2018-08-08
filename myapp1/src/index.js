import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginMainComponent from './components/LoginMainComponent';
import DashboardComponent from './components/DashboardComponent';

class Index extends React.Component{
	
	constructor(props){
		super(props);
		
		this.loggedin = this.loggedin.bind(this);
	}
	loggedin(){
		let stitem = [];
		console.log(localStorage);
		if(localStorage.length > 0){
			stitem = localStorage.getItem('items');
			//localStorage.clear();
			return JSON.parse(stitem).status;
		}else{
			return false;
		}	
	}
	render(){
		return(
		<div>
		<Route exact path="/"  render={() =>(
          this.loggedin() ? ( <Route  component={DashboardComponent} />)
          : (<Route component={LoginMainComponent} />)
        )}/>
		<Route path="/login"  render={() =>(
          this.loggedin() ? ( <Route  component={DashboardComponent} />)
          : (<Route component={LoginMainComponent} />)
        )}/>
		<Route path="/dashboard" render={() =>(
          this.loggedin() ? ( <Route  component={DashboardComponent} />)
          : (<Route component={LoginMainComponent} />)
        )}/>
		</div>
		)
	}
}

ReactDOM.render(
<Router>
	<Index/>
</Router>, document.getElementById('root'));
registerServiceWorker();
