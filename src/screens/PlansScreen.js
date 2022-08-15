import React, { useState, useEffect } from "react";
import "./PlansScreen.css";
import { initializeApp } from "firebase/app";
import db from "../firebase";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore/lite";

//import { QuerySnapshot } from "firebase/firestore/lite";

function PlansScreen() {
	const [products, setproducts] = useState([]);

	//console.log(products);

	return (
		<div className="planScreen">
			<div className="plansScreen_plan">
				<div className="planScreen_info">
					<h5>Basic</h5>
					<h6>720p</h6>
				</div>

				<button>Subscribe</button>
			</div>
			<div className="plansScreen_plan">
				<div className="planScreen_info">
					<h5>Standard</h5>
					<h6>1080p</h6>
				</div>

				<button>Subscribe</button>
			</div>
			<div className="plansScreen_plan">
				<div className="planScreen_info">
					<h5>Premium</h5>
					<h6>4K + HDR</h6>
				</div>

				<button>Subscribe</button>
			</div>
		</div>
	);
}

export default PlansScreen;
