import React from "react";
import Pricing_component from "./Pricing_component";
import Pricing_component_api from "./Pricing_component_api";
import { NavLink, Link} from "react-router-dom";

function Pricing_component_data () {
	return (
		<>
			<section className="include-section text-align-center responsive-padding minion-bg">
					<div id="particles-js-three"></div>
					<div class="general-heading p-30">
						<h4>Meet the people who make awesome stuffs</h4>
						<h2>Affordable Pricing</h2>
					</div>
					<div class="pricing d-flex align-item-center ">

						<Pricing_component 
						pricing_heading={Pricing_component_api[0].pricing_heading}
				      	price={Pricing_component_api[0].price}
				      	pricing_year={Pricing_component_api[0].pricing_year}
				      	pricing_li_1={Pricing_component_api[0].pricing_li_1}
				      	pricing_li_2={Pricing_component_api[0].pricing_li_2}
				      	pricing_li_3={Pricing_component_api[0].pricing_li_3}
				      	pricing_li_4={Pricing_component_api[0].pricing_li_4}
				      	/>

				      	<Pricing_component 
						pricing_heading={Pricing_component_api[1].pricing_heading}
				      	price={Pricing_component_api[1].price}
				      	pricing_year={Pricing_component_api[1].pricing_year}
				      	pricing_li_1={Pricing_component_api[1].pricing_li_1}
				      	pricing_li_2={Pricing_component_api[1].pricing_li_2}
				      	pricing_li_3={Pricing_component_api[1].pricing_li_3}
				      	pricing_li_4={Pricing_component_api[1].pricing_li_4}
				      	/>

				      	<Pricing_component 
						pricing_heading={Pricing_component_api[2].pricing_heading}
				      	price={Pricing_component_api[2].price}
				      	pricing_year={Pricing_component_api[2].pricing_year}
				      	pricing_li_1={Pricing_component_api[2].pricing_li_1}
				      	pricing_li_2={Pricing_component_api[2].pricing_li_2}
				      	pricing_li_3={Pricing_component_api[2].pricing_li_3}
				      	pricing_li_4={Pricing_component_api[2].pricing_li_4}
				      	/>

				      	<Pricing_component 
						pricing_heading={Pricing_component_api[3].pricing_heading}
				      	price={Pricing_component_api[3].price}
				      	pricing_year={Pricing_component_api[3].pricing_year}
				      	pricing_li_1={Pricing_component_api[3].pricing_li_1}
				      	pricing_li_2={Pricing_component_api[3].pricing_li_2}
				      	pricing_li_3={Pricing_component_api[3].pricing_li_3}
				      	pricing_li_4={Pricing_component_api[3].pricing_li_4}
				      	/>

				      	

					</div>
					

	      	
			</section>
		</>
		) 
}

export default Pricing_component_data;