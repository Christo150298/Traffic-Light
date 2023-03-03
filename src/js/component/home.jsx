import React from "react";
import { useState } from "react";

const Home = () => {
	const [ selectedColor, setSelectedColor] = useState(''); 
	const [ addPurple, setAddPurple] = useState(false);

	const handleToggle = () => setAddPurple(!addPurple);
	
	return (
			<div className="col">	
				<div className="traffic-light">
					<div onClick={() => setSelectedColor("red")}
					className={"red Light" + (selectedColor === "red" ? " selected" : "")}></div>
					<div onClick={() => setSelectedColor("yellow")}
					className={"yellow Light" + (selectedColor === "yellow" ? " selected" : "")}></div>
					<div onClick={() => setSelectedColor("green")}
					className={"green Light" + (selectedColor === "green" ? " selected" : "")}></div>
					{addPurple && <div onClick={() => setSelectedColor("purple")}
					className={"purple Light" + (selectedColor === "purple" ? " selected" : "")}></div>}
				</div>
				<div className="stick"></div>
				<div className="floor"></div>
				<div>	
					<button id="button" className="btn btn-dark">Push to change color</button>
					<button onClick={handleToggle} id="purpleButtom" className="btn btn-dark">Push to add Purple</button>
				</div>
			</div>
	);
};

export default Home;
