import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);
	const navigate = useNavigate();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<div className="nav_contents">
				<img
					className="nav_logo"
					src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
					alt="Netflix logo"
					onClick={() => navigate("/")}
				/>

				<div className="options">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Series</a>
						</li>
						<li>
							<a href="/">Films</a>
						</li>
						<li>
							<a href="/">New & Popular</a>
						</li>
						<li>
							<a href="/">My List</a>
						</li>
					</ul>
				</div>

				<img
					className="nav_avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?0201013161117"
					alt="Avatar logo"
					onClick={() => navigate("/profile")} //navigate to profile screen
				/>
			</div>
		</div>
	);
}

export default Nav;
