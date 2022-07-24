import "./Banner.css";
import React from "react";

/*
treuncates description of movies to given charecters
*/
function Banner() {
	function truncate(string, n) {
		return string?.length > n ? string.substring(0, n - 1) + "..." : string;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner_contents">
				<h1 className="banner_title">Movie Name</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
				</div>
				<h1 className="banner_description">
					{truncate(
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
						150
					)}
				</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
