import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
    	<div className="container">
    		<h1></h1>

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


				<div className="card">
				  <img className="card-img-top" src="https://c1.staticflickr.com/4/3702/9767175701_5e6a3418ef_b.jpg" alt="CardCap" />
				  <div className="card-body">
				    <h5 className="card-title">Our popular group</h5>
				    <p className="card-text"> This group enjoys Drumcircle on the beach.</p>
				    <a href="/groups" className="btn btn-primary"> See their Post </a>
				  </div>
				</div>
				<br />
			      <hr />






				<div className="modal-body">
				  <div className="container-fluid">
  			    	<h2> We are going to add a dispay of our show groups here </h2>
				      <hr />
				    <div className="row">
      			      <hr />
				      <div className="col-md-4">.col-md-4</div>
				      <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
				    </div>
				    <div className="row">
				      <div className="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
				      <div className="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
				    </div>
				    <div className="row">
				      <div className="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
				    </div>
				    <div className="row">
				      <div className="col-sm-9">
				        Level 1: .col-sm-9
				        <div className="row">
				          <div className="col-8 col-sm-6">
				            Level 2: .col-8 .col-sm-6
				          </div>
				          <div className="col-4 col-sm-6">
				            Level 2: .col-4 .col-sm-6
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
				<br />
				<br />
				<br />

			</div>

      );
  }
}

export default Home;
