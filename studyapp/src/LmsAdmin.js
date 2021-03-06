import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import  TopBar  from './components/TopBar';
import  SideBar  from './components/SideBar';
import LmsState from './LmsState';
import DashBoard from './components/DashBoard';
import Course from './components/Course';
import './LmsAdmin.css';


let allStates=combineReducers({
    LmsState:LmsState
})

let allStore = createStore(allStates)

class LmsAdmin extends Component {
    constructor(props) {
        super();
        this.state = {}
        this.updateMainSection = this.updateMainSection.bind(this)
        this.onMainClick = this.onMainClick.bind(this)
        }
    updateMainSection(ms){
        allStore.dispatch({
            type: 'UPDATE_MAIN',
            mS: ms
        })
    }
    onMainClick(ms){
    	   //allStore.getState().LmsState.mainSection=ms;
        this.updateMainSection(ms)
        }
    componentDidMount() {
        this.updateMainSection('DASHBOARD');
        }
    render() {
        return (
          <div>
              <Provider store={allStore}>
                  <ConnectedLmsAdminDom onMainClick={this.onMainClick} />
              </Provider>
          </div>

        );
    }
}

class LmsAdminDom extends Component{
    render() {
        return (
            <div className="root-in">
                <TopBar />
                <SideBar lmsdata={this.props.lmsdata} onMainClick={this.props.onMainClick}/>
                <MainContainer lmsdata={this.props.lmsdata}/>
            </div>
        );
    }
}

class MainContainer extends Component{
    render(){
    	console.log(this.props.lmsdata.mainSection);
        return (
            <div className="maincontainer">
                <div className="row">
                {
						  this.props.lmsdata.mainSection === 'DASHBOARD' &&
						  <DashBoard />              
                }
                {
						  this.props.lmsdata.mainSection === 'COURSE' &&
						  <Course />              
                }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => {
    return {
        lmsdata:state.LmsState
    }
}

const ConnectedLmsAdminDom = connect(mapStateToProps,{})(LmsAdminDom);
export default LmsAdmin;