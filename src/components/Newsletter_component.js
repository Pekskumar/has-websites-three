import React from "react";
import {NavLink} from "react-router-dom";

function Newsletter_component () {
	return (
		<>
			<section className="newsletter responsive-padding">
			<div className="container">
				<div class="general-heading text-align-center">
					<h4>Subscribe To Our newsletter</h4>
					<h2>our newsletter</h2>
				</div>
				<div class="newsletter-one d-flex align-item-center ">
					<div className="newsletter-img">
						<img src="./images/footer-projects/ft (5).jpg" />
					</div>
					<div className="newsletter-form">
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<form id="newsletter-form">
								<div className="form-group full">
									<input type="text" Placeholder="Enter Your Email*" required />
								</div>
								<div className="form-group full">
									<NavLink className="primary-btn" to="/About">Submit<span></span></NavLink>
								</div>
						</form>
					</div>
				</div>
			</div>
			</section>
		</>
		)
}
export default Newsletter_component;