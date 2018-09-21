import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signup from './auth/Signup'

class Home extends Component {
  render() {
    return(
    	<div className="container">
		    <div className="row">
		        <div className="col-lg-8 d-none d-lg-block">
		            <h1 className="display-4">Build <strong>social profiles</strong> and create account now! </h1>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                	You can share your posts in the groups and other people can comment on it.
		                </div>
		            </div>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                	You can add a picture and post them in the groups and share with everyone .
		                </div>
		            </div>
		            <div className="d-flex flex-row">
		                <div className="p-4 align-self-start">
		                	<i className="fa fa-check"></i>
		                </div>
		                <div className="p-4 align-self-end">
		                  	Drumcircle group is every drumer's dream.
		                </div>
		            </div>
		        </div>
		        <div className="col-lg-4">
		            <Signup user={this.props.user} updateUser={this.props.updateUser} />
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
			<br />
    		<div id="intro">
			    <div className="container">
			      	<div className="jumbotron">
						<h1 className="display-4">Hello, Drumcircle World!</h1>
					  	<p className="lead"> - A Social Media App for Drumcircle Enthusiasts </p>
					  	<hr className="my-4" />
					  	<p> You can create or join group to find the lastest feeds in your circle
					   	everybody can share the feeds that they like.</p>
					  	<Link className="btn btn-primary btn-lg" to="/signup" role="button">Sign up to Learn more</Link>
					</div>
			 	</div>
			</div>
		</div>
      );
  }
}

export default Home;
