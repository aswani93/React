import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class DashboardComponent extends Component {
	static contextTypes = {
		router:PropTypes.object
	  }
	constructor(props, context){
		super(props, context);
		this.state = {
			error : null,
			isLoaded : false,
			data : ''
		}
		this.logout = this.logout.bind(this);
		//this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
	}
	logout(){
		//localStorage.clear();
		//this.context.router.history.push('/login');
	}
	/*componentDidMount(){
		fetch("https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/python_maps_2/collection.geojson")
		.then(
			({result}) => {
				console.log(result);
				this.setState({
					isLoaded:true,
					items:result
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
		
	}
	getMoviesFromApiAsync() {
		return fetch('https://facebook.github.io/react-native/movies.json')
		  .then((response) => response.json())
		  .then((responseJson) => {
			return responseJson.movies;
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  }*/
	 
	componentWillMount() {
		//this.getMoviesFromApiAsync();
		/*fetch('https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/python_maps_2/collection.geojson')
		  .then(response => console.log(response) );
		 //this.setState({items : this.getMoviesFromApiAsync()}) */
		 fetch('https://facebook.github.io/react-native/movies.json')
		 .then((response) => response.json())
		 .then((responseJson) => {
		 // console.log(responseJson.movies);
		  this.setState ({data: responseJson.movies});
		 })
		 .catch((error) => {
		   console.error(error);
		 });

		 console.log(this.state.data);
	  }
	render(){
		return(
			<div>
				<p onClick={this.logout()}>logout</p>
				{this.state.data.map((item, i) => {item.title} )}
			<h1>Dashboard</h1>
			</div>
		)
	}
}

export default DashboardComponent;