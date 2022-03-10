import React from "react";

function Counter(props){

return (

    
    <div class="counter mtp">
        <div class="counter-icon"><i class="fa fa-globe"></i></div>
        <h3>{props.counttit}</h3>
        <span class="counter-value">{props.value}</span>
    </div>



);



}

export default Counter;