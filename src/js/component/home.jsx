import React from "react";
import { useState } from "react";

const Home = () => {
	const [ selectedColor, setSelectedColor] = useState('red'); 
	return (
		<div className="container">
			<div className="traffic-light">
				<div 
				onClick={() => setSelectedColor("red")}
				className={
					"red Light" + (selectedColor === "red" ? " selected" : "")
				}></div>
				<div 
				onClick={() => setSelectedColor("yellow")}
				className={
					"yellow Light" + (selectedColor === "yellow" ? " selected" : "")
				}></div>
				<div 
				onClick={() => setSelectedColor("green")}
				className={
					"green Light" + (selectedColor === "green" ? " selected" : "")
				}></div>
			</div>
		</div>
	);
};

export default Home;
