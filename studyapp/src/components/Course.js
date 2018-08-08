import React, { Component } from 'react';
import './list.css';

class Course extends Component {
  render() {
    return (
        <div className="custom-content-panel">
        		<div className="row">
        				<ListTop />
        				<InnerSec />
        		 </div>
        </div>
    );
  }
}

class ListTop extends Component{
	render(){
		return(
				<div className="top-bar">
						<div className="title-area">
						    <h3 className="title-page">Courses
						    <span className="count-select"></span>
						    </h3>
						 </div>
						 <div className="option-area ">
				  		 <div className="search-panel">
       					  <input id="search" className="input-text search-box" type="text" placeholder="Search" name="search" value=""></input>
 							  <a id="opaic" href="#"></a>
						  	  <span className="search-ico"></span>
       			    </div>
        		  	    <div className="button-area">
        		  	      <a className="btn general-btn icon-lib add-ico" id="pgm_buttonForModal">New Course</a> 
        		  	    </div>
   			      </div>
				</div>
		     
		)
	}
}

class InnerSec extends Component{
	render(){
		return(
		<div id="list">
		  	<div className="panel list-block usr_list_block course-listing">
     			 <div className="row">
       				<div className="list-left-thumb">
        					  <a className="blackfont thum-list-img" href="">
        					  <img id="img_user" src="http://lmsvignet.s3.amazonaws.com/assets/images/5adf190acb190_Picture1.jpg" />
        					  </a>
       				 </div>
					 <div className="list-right-details">
						 <h4 className="hdtitle"><a className="blackfont">CUSTOMER EXPERIENCE COURSE</a>
						 </h4>
						 <p className="cour_desc_detail course-description"> For any business to maintain a good reputation and generate loyal customers, handling complaints effectively is very crucial. This&nbsp;training module&nbsp;looks at how to handle customer complaints effectively. Knowing what drives complaints in the first place is a great way to reduce the overall amount of complaints a business will get. In this&nbsp;training module&nbsp;we look at how to be pro-active in reducing the complaints a business will receive.
							 In this course you will learn :
							 What is a complaint?
							 Effective complaint management
							 The complaint management process
							 How to control complaints
							 Standard Operating Procedures
							 Preventing complaints
							 Creating a positive Customer Experience
						 </p>
						 <p>
							 <label className="tag_list"><span className="blu-txt">11</span> Modules</label>
							 <label className="tag_list"><span className="blu-txt">24</span> Users</label>
						 </p>
					 </div>
       				 
                </div>
		   </div>

			<div className="panel list-block usr_list_block course-listing">
				<div className="row">
					<div className="list-left-thumb">
						<a className="blackfont thum-list-img" href="">
							<img id="img_user" src="http://lmsvignet.s3.amazonaws.com/assets/images/5adf190acb190_Picture1.jpg" />
						</a>
					</div>
					<div className="list-right-details">
						<h4 className="hdtitle"><a className="blackfont">CUSTOMER EXPERIENCE COURSE</a>
						</h4>
						<p className="cour_desc_detail course-description"> For any business to maintain a good reputation and generate loyal customers, handling complaints effectively is very crucial. This&nbsp;training module&nbsp;looks at how to handle customer complaints effectively. Knowing what drives complaints in the first place is a great way to reduce the overall amount of complaints a business will get. In this&nbsp;training module&nbsp;we look at how to be pro-active in reducing the complaints a business will receive.
							In this course you will learn :
							What is a complaint?
							Effective complaint management
							The complaint management process
							How to control complaints
							Standard Operating Procedures
							Preventing complaints
							Creating a positive Customer Experience
						</p>
						<p>
							<label className="tag_list"><span className="blu-txt">11</span> Modules</label>
							<label className="tag_list"><span className="blu-txt">24</span> Users</label>
						</p>
					</div>

				</div>
			</div>


		</div>
	);
	}
}




export default Course;
