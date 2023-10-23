import React from "react";

const Alart = ({ alart }) => {
	return (
		alart && (
			<div className="container-fluid">
				<div
					className={`alert alert-${alart.type} alert-dismissible fade show`}
					role="alert"
				>
					<strong> {alart.msg}</strong>
				</div>
			</div>
		)
	);
};

export default Alart;
