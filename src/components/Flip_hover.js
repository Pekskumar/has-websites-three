import React  from "react";

function Flip_hover (props) {

return (
		<>
		
				
						<div className="include-contant">
							<img src={props.imgsrc} />
							<div className="include-data">
							<h4>{props.flip_heading}</h4>
							<p>{props.flip_content}</p>
							</div>
						</div>
				
			
		</>
		);
	};

	export default Flip_hover;