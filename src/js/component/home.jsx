import React from "react";
import { useState } from "react";

const Home = () => {
	const [ selectedColor, setSelectedColor] = useState('red'); 
	return (
		<body>
			<div className="container">
				<div className="traffic-light">
					<div onClick={() => setSelectedColor("red")}
					className={"red Light" + (selectedColor === "red" ? " selected" : "")}></div>
					<div onClick={() => setSelectedColor("yellow")}
					className={"yellow Light" + (selectedColor === "yellow" ? " selected" : "")}></div>
					<div onClick={() => setSelectedColor("green")}
					className={"green Light" + (selectedColor === "green" ? " selected" : "")}></div>
				</div>
				<div className="stick"></div>
				<div className="floor"></div>
			</div>
		</body>
	);
};

export default Home;
