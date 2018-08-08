import React, { Component } from 'react';
import './DashBoard.css';

class DashBoard extends Component {
  render() {
    return (
        <div>
           <DashTop />
           <VisitStatus />
        </div>
    );
  }
}

class DashTop extends Component {
  render(){
    return(
        <div className="pageheader">
            <div className="row">
            <div className="col-12">
             <div className="dash-top">
                 <ul className="dash-listing">
                     <li>
                        <div className="dash-container">
                            <div className="list-left-img icon-lib offc"></div>
                            <div className="dash-details">
                                <div className="dash-title"> <a href="http://lmsv2.labsls.com/admin/index.php/user/learnergroup">11</a></div>
                                <div className="dash-position">BUSINESS UNITS</div>
                            </div>
                        </div>
                     </li>
                     <li>
                         <div className="dash-container">
                             <div className="list-left-img icon-lib course"></div>
                             <div className="dash-details">
                                 <div className="dash-title"> <a href="http://lmsv2.labsls.com/admin/index.php/user/learnergroup">11</a></div>
                                 <div className="dash-position">COURSE</div>
                             </div>
                         </div>
                     </li>
                     <li>
                         <div className="dash-container">
                             <div className="list-left-img icon-lib learners"></div>
                             <div className="dash-details">
                                 <div className="dash-title"> <a href="http://lmsv2.labsls.com/admin/index.php/user/learnergroup">11</a></div>
                                 <div className="dash-position">LEARNERS</div>
                             </div>
                         </div>
                     </li>
                     <li>
                         <div className="dash-container">
                             <div className="list-left-img icon-lib visitors"></div>
                             <div className="dash-details">
                                 <div className="dash-title"> <a href="http://lmsv2.labsls.com/admin/index.php/user/learnergroup">11</a></div>
                                 <div className="dash-position">VISITS</div>
                             </div>
                         </div>
                     </li>
                     <li>
                         <div className="dash-container">
                             <div className="list-left-img icon-lib score"></div>
                             <div className="dash-details">
                                 <div className="dash-title"> <a href="http://lmsv2.labsls.com/admin/index.php/user/learnergroup">11</a></div>
                                 <div className="dash-position">AVERAGE SCORE</div>
                             </div>
                         </div>
                     </li>
                     <li>
                         <div className="dash-container">
                             <div className="list-left-img icon-lib notf"></div>
                             <div className="dash-details">
                                 <div className="dash-title"> <a href="http://lmsv2.labsls.com/admin/index.php/user/learnergroup">11</a></div>
                                 <div className="dash-position">NOTIFICATIONS</div>
                             </div>
                         </div>
                     </li>
                 </ul>
              </div>
            </div>
            </div>
        </div>
    );
  }
}



class VisitStatus extends Component{
    render(){
        return(
            <div>Visit Graph</div>
        );
    }
}




export default DashBoard;
