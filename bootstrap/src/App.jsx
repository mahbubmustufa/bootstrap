import { useState } from "react";
///import About from "./components/About";
import Nav from "./components/Nav";
//import Alart from "./components/Alart";
import TextAris from "./components/TextAris";
import ColorPlate from "./components/ColorPlate";

function App() {
	const [mode, setModee] = useState("dark"); //dark mode is enable or not

	{
		/*
	const [alert, setAlert] = useState(null); //alert message

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

*/
	}

	const toggle = () => {
		if (mode === "light") {
			setModee("dark");
			document.body.style.backgroundColor = "#042743";
			//showAlert("Dark mode has been enabled", "success");
		} else {
			setModee("light");
			document.body.style.backgroundColor = "white";
			//showAlert("Light mode has been enabled", "warning");
		}
	};

	return (
		<>
			<Nav title="Mahbub" mode={mode} toggle={toggle} />
			{/*<Alart alart={alert} />*/}
			{/*<About />*/}
			<ColorPlate toggle="toggle" onClick="onClick" />
			<TextAris title="Enter text to analyze" btnText="Uppercase" />
		</>
	);
}

export default App;
