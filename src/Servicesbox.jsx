import React from "react";


function Servicesbox(props){

return (

<>

	
	
		
<div class="container">
    <div class="row">
		
		<div id="serviceMainBlock">
			<div class="ServiceBox web">
				<i class="fa fa-code" aria-hidden="true"></i>
				<h2> {props.blocktit} </h2>
				<p>
					{props.blockpara}
				</p>
			</div>
	

			<div class="ServiceBox graphic">
				<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>
				<h2>  {props.blocktit2} </h2>
				<p>
                {props.blockpara}
				</p>
			</div>
		

			<div class="ServiceBox seo">
				<i class="fa fa-book" aria-hidden="true"></i>
				<h2> {props.blocktit3} </h2>
				<p>
                {props.blockpara}
				</p>
			</div>
		

		</div>
        </div></div>



</>


);

}

export default Servicesbox;