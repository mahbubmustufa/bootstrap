import React, { useState } from "react";

const TextAris = ({ title, btnText }) => {
	const [text, setText] = useState("");
	const handleOnchange = (event) => {
		setText(event.target.value);
	};
	const handleUppercase = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};
	return (
		<div className="container-fluid">
			<h1 className="text-light">{title}</h1>
			<textarea
				className="form-control"
				name="text"
				id="text"
				cols="30"
				rows="3"
				onChange={handleOnchange}
				value={text}
			></textarea>
			<div className="d-flex gap-3">
				<button onClick={handleUppercase} className="btn btn-info mt-3 ">
					{btnText}
				</button>
				<button className="btn btn-info mt-3 ">Lowercase</button>
			</div>
			<h1 className="text-light">Preview</h1>
			<p className="text-light">{text}</p>
		</div>
	);
};

export default TextAris;
