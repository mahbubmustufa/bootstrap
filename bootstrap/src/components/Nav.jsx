const Nav = ({ title, mode, toggle }) => {
	return (
		<div className="container-fluid">
			<nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
				<div className="container-fluid">
					<a className="navbar-brand" to="/">
						{title}
					</a>

					<div className="d-flex">
						<div className="form-check form-switch d-lg-none">
							<input
								className="form-check-input"
								type="checkbox"
								role="switch"
								id="flexSwitchCheckChecked"
								onClick={toggle}
							/>
							<label
								className={`form-check-label text-${
									mode == "dark" ? "light" : "dark"
								}`}
								htmlFor="flexSwitchCheckChecked"
							>
								Enable Dark mode
							</label>
						</div>

						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>

					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-a active" aria-current="page" to="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-a" to="/about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-a" href="/colors">
									Colors
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="form-check form-switch d-none d-lg-block">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						id="flexSwitchCheckChecked"
						onClick={toggle}
					/>
					<label
						className={`form-check-label text-${
							mode == "dark" ? "light" : "dark"
						}`}
						htmlFor="flexSwitchCheckChecked"
					>
						Enable Dark mode
					</label>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
