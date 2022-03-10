import React from "react";

function Footer(props){

return (

<footer id="contact">
  <ul>
    <div id="icon-container">
      <a href="#">
        <div class="icon">
          <li><i class="fa fa-twitter"></i></li>
        </div>
      </a>
      <a href="#">
        <div class="icon">
          <li><i class="fa fa-instagram"></i></li>
        </div>
      </a>
      <a href="#">
        <div class="icon">
          <li><i class="fa fa-facebook-f"></i></li>
        </div>
      </a>
      <a href="#">
        <div class="icon">
          <li><i class="fa fa-envelope"></i></li>
        </div>
      </a>
      <a href="#">
        <div class="icon">
          <li><i class="fa fa-free-code-camp"></i></li>
        </div>
      </a>
    </div>
  </ul>
  <p>{props.copy}</p>
</footer>


);


}

export default Footer;

