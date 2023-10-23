import React, { useState } from "react";

const ColorPlate = () => {
	const [color, setColor] = useState("blue");
	const toggle = (event) => {
		setColor(event.target.value);
	};
	return (
		<>
			<div className={`color p-4 ${color}`}>
				<button onClick={toggle} value="bg-info" className="bg-info"></button>
				<button onClick={toggle} value="bg-dark" className="bg-dark"></button>
				<button
					onClick={toggle}
					value="bg-warning"
					className="bg-warning"
				></button>
				<button
					onClick={toggle}
					value="bg-success"
					className="bg-success"
				></button>
				<button onClick={toggle} value="bg-light" className="bg-light"></button>
				<button
					onClick={toggle}
					value="bg-secondary"
					className="bg-secondary"
				></button>
				<button onClick={toggle} value="blue" className="blue"></button>
				<button
					onClick={toggle}
					value="bg-danger"
					className="bg-danger"
				></button>
				<button onClick={toggle} value="green" className="green"></button>
				<button onClick={toggle} value="pink" className="pink"></button>
				<button onClick={toggle} value="navi" className="navi"></button>
				<button onClick={toggle} value="yellow" className="yellow"></button>
				<button onClick={toggle} value="sky" className="sky"></button>
				<button onClick={toggle} value="true-red" className="true-red"></button>
				<button onClick={toggle} value="kathali" className="kathali"></button>
				<button onClick={toggle} value="purple" className="purple"></button>
			</div>
			<h1>{color}</h1>
		</>
	);
};

export default ColorPlate;
