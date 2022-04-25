import React, { useState } from "react";
import "../../styles/Semaforo.css";

//create your first component
const Semaforo = () => {
	const [shine, setShine] = useState("");
	return (
		<>
			<div className="cabeza"></div>
			<div className="tronco">
				<div
					className={shine == "red" ? "redColor light" : "redColor"}
					onClick={() => setShine("red")}></div>
				<div
					className={
						shine == "yellow" ? "yellowColor light" : "yellowColor"
					}
					onClick={() => setShine("yellow")}></div>
				<div
					className={
						shine == "green" ? "greenColor light" : "greenColor"
					}
					onClick={() => setShine("green")}></div>
			</div>
		</>
	);
};

export default Semaforo;
