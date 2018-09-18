import React, { Component } from 'react';
import Signup from './auth/Signup'

class Home extends Component {
  render() {
    return(
    	<div className="container">
		    <div className="row">
		        <div className="col-lg-6 d-none d-lg-block">
		            <h1 className="display-4">Build <strong>social profiles</strong> and Gain! </h1>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                	You should join the Drumcircle group, you will make great friends.
		                </div>
		            </div>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                	You should join the Drumcircle group, you will make great friends.
		                </div>
		            </div>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                  	You should join the Drumcircle group, you will make great friends.
		                </div>
		            </div>
		        </div>
		        <div className="col-lg-6">
		            <Signup />
		        </div>
		    </div>		    
			<br />
			<br />
    		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block w-100 h-100" src="https://www.goodfreephotos.com/albums/china/hong-kong/china-hong-kong-city-with-mountains-in-the-background.jpg" alt="First slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100 h-100" src="https://www.goodfreephotos.com/albums/other-landscapes/meadow-landscape-with-trees-in-the-background.jpg" alt="Second slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100 h-100" src="https://c1.staticflickr.com/8/7039/6835581528_e747fd91fe_b.jpg" alt="Third slide" />
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>

    			<div id="intro">
			    <div className="container">
			      <div className="jumbotron">
					  <h1 className="display-4">Hello, Drumcircle World!</h1>
					  <p className="lead"> - A Social Media App for Drumcircle Enthusiasts </p>
					  <hr className="my-4" />
					  <p> You can create or join group to find the lastest feeds in your circle
					   everybody can share the feeds that they like.</p>
					  <a className="btn btn-primary btn-lg" href="/signup" role="button">Sign up to Learn more</a>
					</div>
			 	 </div>
			 	 </div>


				<div className="alert alert-success" role="alert">
				  If you are already signed up, click here to see the  <a href="/groups" className="alert-link">groups</a>. Give it a click if you like.
				</div>

				<div className="row">
				  <div className="col-md-3 ml-5">

				<div className="card">
				  <img className="card-img-top" src="https://c1.staticflickr.com/5/4021/4705218644_c31c62a43a_b.jpg" alt="CardCap" />
				  <div className="card-body">
				    <h5 className="card-title">Our popular group</h5>
				    <p className="card-text"> This group enjoys Drumcircle on the beach.</p>
				    <a href="/groups" className="btn btn-primary"> See their Post </a>
				  </div>
				</div>
				</div>
				<div className="col-md-3 ml-5">

				<div className="card">
				  <img className="card-img-top" src="https://c1.staticflickr.com/5/4021/4705218644_c31c62a43a_b.jpg" alt="CardCap" />
				  <div className="card-body">
				    <h5 className="card-title">Our popular group</h5>
				    <p className="card-text"> This group enjoys Drumcircle on the beach.</p>
				    <a href="/groups" className="btn btn-primary"> See their Post </a>
				  </div>
				</div>
				</div>
				<div className="col-md-3 ml-5">

				<div className="card">
				  <img className="card-img-top" src="https://c1.staticflickr.com/5/4021/4705218644_c31c62a43a_b.jpg" alt="CardCap" />
				  <div className="card-body">
				    <h5 className="card-title">Our popular group</h5>
				    <p className="card-text"> This group enjoys Drumcircle on the beach.</p>
				    <a href="/groups" className="btn btn-primary"> See their Post </a>
				  </div>
				</div>
				</div>
				</div>
			</div>

      );
  }
}

export default Home;
