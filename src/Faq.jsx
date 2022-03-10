import React from "react";
import team from './t1.jpg'; 
import team2 from './t2.jpg'; 
import team3 from './t3.jpg'; 

function Faq(props){

return (

<>
<div class="demo">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 mtp">
                <div class="our-team">
                    <div class="pic">
                        <img src={team} alt="" />
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                    </ul>
                    <div class="team-content">
                        <h3 class="title">{props.teamname}</h3>
                       
                    </div>
                    <p class="description">
                    {props.teamde}
                    </p>
                </div>
            </div>

            <div class="col-md-4 col-sm-6 mtp">
                <div class="our-team">
                    <div class="pic">
                        <img src={team2} alt="" />
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                    </ul>
                    <div class="team-content">
                        <h3 class="title">{props.teamname2}</h3>
                       
                    </div>
                    <p class="description">
                        {props.teamde}
                    </p>
                </div>
            </div>


            <div class="col-md-4 col-sm-6 mtp">
                <div class="our-team">
                    <div class="pic">
                        <img src={team3} alt="" />
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                    </ul>
                    <div class="team-content">
                        <h3 class="title">{props.teamname3}</h3>
                       
                    </div>
                    <p class="description">
                    {props.teamde}
                    </p>
                </div>
            </div>




       
        </div>
    </div>
</div>


</>


);
}
export default Faq;