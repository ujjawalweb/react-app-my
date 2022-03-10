import React from "react";

const chooseimg="https://images.unsplash.com/photo-1620327086389-d8b0c2357e94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=947&q=80";

const chooseimg2="https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const chooseimg3="https://images.unsplash.com/photo-1619804751098-fdb088171d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80";

function Abtchoose(props){

return(
<>

<div class="why_choose">
  		<div class="container">
  			<div class="row">
  				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  				    <div class="why_choose_head">
                      <h2 className="mt-5 text-center head">{props.maintitle}</h2>
  					</div>
  				</div>
  			</div>
        
  		    <div class="row">
  		        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
  			        <div class="text-down">
  			            <img src={chooseimg} alt="PN" />
  			            <div class="textbox">
  			                <p class="details">{props.choosedetail}</p>
  			                <p class="view-more"><a href="#"><button class="btn-success btn btn-sm">View More</button></a></p>
  			                <p class="texts">{props.choosetitle}</p>
  			            </div>
  			        </div>
  		        </div>

  		        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
  		            <div class="text-down">
  			            <img src={chooseimg3}alt="PN" />
  			            <div class="textbox">
  			                <p class="details">{props.choosedetail}</p>
  			                <p class="view-more"><a href="#"><button class="btn-success btn btn-sm">View More</button></a></p>
  			                <p class="texts">{props.choosetitle}</p>
  			            </div>
  		            </div>
  		        </div>

  		        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
  		            <div class="text-down">
  			            <img src={chooseimg2} alt="PN" />
  			            <div class="textbox">
  			                <p class="details">{props.choosedetail}</p>
  			                <p class="view-more"><a href="#"><button class="btn-success btn btn-sm">View More</button></a></p>
  			                <p class="texts">{props.choosetitle}</p>
  			            </div>
  		            </div>
  		        </div>
  		    </div>
        
  		    <div class="row">
  		        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
  		            <div class="text-down">
  			            <img src={chooseimg2}alt="PN" />
  			            <div class="textbox">
  			                <p class="details">{props.choosedetail}</p>
  			                <p class="view-more"><a href="#"><button class="btn-success btn btn-sm">View More</button></a></p>
  			                <p class="texts">{props.choosetitle}</p>
  			            </div>
  		            </div>
  		        </div>
  		        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
  		            <div class="text-down">
  			            <img src={chooseimg} alt="PN" />
  			            <div class="textbox">
  			                <p class="details">{props.choosedetail}</p>
  			                <p class="view-more"><a href="#"><button class="btn-success btn btn-sm">View More</button></a></p>
  			                <p class="texts">{props.choosetitle}</p>
  			            </div>
  		            </div>
  		        </div>
  		        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
  		            <div class="text-down">
  			            <img src={chooseimg3} alt="PN" />
  			            <div class="textbox">
  			                <p class="details">{props.choosedetail}</p>
  			                <p class="view-more"><a href="#"><button class="btn-success btn btn-sm">View More</button></a></p>
  			                <p class="texts">{props.choosetitle}</p>
  			            </div>
  		            </div>
  		        </div>
  	        </div>
  	    </div>
  	</div>

</>

);


}

export default Abtchoose;