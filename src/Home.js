import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
    	<div className="container">
    		<h1></h1>

    			<div id="intro">
			    <div className="container">
			      <div class="jumbotron">
					  <h1 class="display-4">Hello, Drumcircle World!</h1>
					  <p class="lead"> - A Social Media App for Drumcircle Enthusiasts </p>
					  <hr class="my-4" />
					  <p> You can create or join group to find the lastest feeds in your circle
					   everybody can share the feeds that they like.</p>
					  <a class="btn btn-primary btn-lg" href="/signup" role="button">Sign up to Learn more</a>
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






				<div class="modal-body">
				  <div class="container-fluid">
  			    	<h2> We are going to add a dispay of our show groups here </h2>
				      <hr />
				    <div class="row">
      			      <hr />
				      <div class="col-md-4">.col-md-4</div>
				      <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
				    </div>
				    <div class="row">
				      <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
				      <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
				    </div>
				    <div class="row">
				      <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
				    </div>
				    <div class="row">
				      <div class="col-sm-9">
				        Level 1: .col-sm-9
				        <div class="row">
				          <div class="col-8 col-sm-6">
				            Level 2: .col-8 .col-sm-6
				          </div>
				          <div class="col-4 col-sm-6">
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
