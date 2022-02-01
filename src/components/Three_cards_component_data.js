import React from "react";
import Three_cards_component from "./Three_cards_component";
import Three_cards_component_api from "./Three_cards_component_api";
import { NavLink, Link} from "react-router-dom";

function Three_cards_component_data () {
	return (
		<>
		<section className="include-section text-align-center responsive-padding team-bg">
				<div id="particles-js-four"></div>
				<div class="general-heading p-30">
					<h4>Meet the people who make awesome stuffs</h4>
					<h2>Our Team</h2>
				</div>
				<div class="three_cards_component d-flex align-item-center ">

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (4).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Hasmukh Shah</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (1).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">John Doe</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (2).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Bonnie Crowe</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (5).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-angular"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Joyce White</h3>
							<span className="speciality">Angular Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (8).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-js"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Deborah Webb</h3>
							<span className="speciality">Javascript Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (4).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-react"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Pek's Kumar</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (3).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Joseph Keys</h3>
							<span className="speciality">Quality Assurance</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (6).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Tina Houghton</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="./images/team/team (7).jpg" alt="" />
							<span className="icon">
								<i className="fab fa-php"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Larry Thomas</h3>
							<span className="speciality">PHP Developer</span>
						</div>
					</div>

					

			      	
				</div>
				

      	
		</section>


		</>
		)
}

export default Three_cards_component_data;