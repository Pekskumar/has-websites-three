import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer () {
	return (
		<>
			<footer>
		<div className="container">
			<div className="center-menu d-flex justify-space-between">
				<div className="get">
					<h5>About Us</h5>
					<div className="logo">
						<h1><NavLink to="/"><img src="./images/logo-footer.png" /></NavLink></h1>
					</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>
				<div className="acc">
					<h5>Get In Touch</h5>
					<p><i className="fas fa-map-marked-alt"></i> Greater Ahmedabad, India</p>
					<a href="tel:+91 8866808798"><i className="fas fa-phone-alt"></i> (+91) 8866808798</a>
					<a href="mailto:prakash.montu_92@live.com"><i className="fas fa-envelope"></i> prakash.montu_92@live.com</a>
					<p><i className="fas fa-calendar-day"></i> Mon-Sat, 9am-6pm</p>

					<div class="social-links d-flex align-item-center"><a href="https://twitter.com/HasWebsites" class="twitter"><i class="fab fa-twitter"></i></a><a href="https://www.facebook.com/has.webs.9" class="facebook"><i class="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/haswebsites19/" class="instagram"><i class="fab fa-instagram"></i></a><a href="https://www.linkedin.com/in/has-websites-681794200/" class="linkedin"><i class="fab fa-linkedin-in"></i></a><a href="https://www.linkedin.com/in/has-websites-681794200/" class="linkedin"><i class="fab fa-github"></i></a>
					</div>

				</div>
				<div className="qui">
					<h5>Useful Links</h5>
					<ul>
						<li><NavLink to="/about"><i className="fas fa-angle-right"></i> About</NavLink></li>
						<li><NavLink to="/service"><i className="fas fa-angle-right"></i> Services</NavLink></li>
						<li><NavLink to="/portfolio"><i className="fas fa-angle-right"></i> Portfolio</NavLink></li>
						<li><NavLink to="/contact"><i className="fas fa-angle-right"></i> Contact</NavLink></li>
					</ul>
				</div>
				<div className="fro">
					<h5>Latest Projects</h5>
					<div className="fro-img d-flex justify-space-between">
						<img src="./images/blog/blog (1).jpg" />
						<img src="./images/blog/blog (2).jpg" />
						<img src="./images/blog/blog (3).jpg" />
						<img src="./images/blog/blog (4).jpg" />
						<img src="./images/blog/blog (5).jpg" />
						<img src="./images/blog/blog (6).jpg" />
					</div>
				</div>
			</div>
		</div>
		<div className="bottom-menu">
			<div className="container d-flex justify-space-between align-item-center">
				<div className="right-bottom">
						<p>© 2022 All rights reserved <NavLink to="/">Has Websites</NavLink></p>
					</div>
					<div className="left-bottom">

						<div class="legel-menu">
	<ul className="d-flex">
		<li><NavLink to="/">Sitemap</NavLink></li>
		<li><NavLink to="/faq">FAQ</NavLink></li>
		<li><NavLink to="/terms_condition">Terms & Condition</NavLink></li>
		<li><NavLink to="/privacy_policy">Privacy Policy</NavLink></li>
	</ul>
</div>

						
					</div>
				
			</div>
		</div>
	</footer>
		</>
		);
};

export default Footer;