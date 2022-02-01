import React from "react";

function Counter_component () {
	return (
		<>
			<section className=" responsive-padding">
			<div className="container">
				<div class="general-heading text-align-center">
					<h4>Some cool facts</h4>
					<h2>Projects statistics</h2>
				</div>
					
  <div class="counter d-flex">
    <div class="count-happy text-align-center">
      <i class="fas fa-smile"></i>
      <h2 data-max="7"></h2>
      <h5>Happy Customers</h5>
    </div>
    <div class="count-happy text-align-center">
      <i class="fa fa-code"></i>
      <h2 data-max="18980"> </h2>
      <h5>Lines of code</h5>
    </div>
    <div class="count-happy text-align-center">
      <i class="fa fa-briefcase"></i>
      <h2 data-max="7"> </h2>
      <h5>Projects Done</h5>
    </div>
    <div class="count-happy text-align-center">
      <i class="fas fa-user-tie"></i>
      <h2 data-max="8" id="test"> </h2>
      <h5>Developers</h5>
    </div>
  </div>


			</div>
			</section>
		</>
		)
}
export default Counter_component;