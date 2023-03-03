import React from "react";
import { useState } from "react";

const Home = () => {
	const [ selectedColor, setSelectedColor] = useState('red'); 
	const [ addPurple, setAddPurple] = useState('false');
	return (
		<body>
			<div className="col">	
				<div className="traffic-light">
					<div onClick={() => setSelectedColor("red")}
					className={"red Light" + (selectedColor === "red" ? " selected" : "")}></div>
					<div onClick={() => setSelectedColor("yellow")}
					className={"yellow Light" + (selectedColor === "yellow" ? " selected" : "")}></div>
					<div onClick={() => setSelectedColor("green")}
					className={"green Light" + (selectedColor === "green" ? " selected" : "")}></div>
					<div onClick={() => setAddPurple("purple")}
					className={"purple Light" + (addPurple === "purple" ? " selected" : "")}></div>
				</div>
				<div className="stick"></div>
				<div className="floor"></div>
				<div>	
					<button id="button" className="btn btn-dark">Push to change color</button>
					<button id="purpleButtom" className="btn btn-dark">Push to add Purple</button>
				</div>
			</div>
		</body>
	);
};

export default Home;
