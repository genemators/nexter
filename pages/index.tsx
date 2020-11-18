import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

export default function Home() {
	const [userData, setSetUserData] = useState({
			firstname: "",
			lastname: "",
			passport_data: "",
			birthday: "",
			location_lat: "",
			location_long: "",
			image_file: "",
			user_image_file: "",
		}),
		handleChange = (e) => {
			setSetUserData([(e.target.name = e.target.value)]);
		};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userData.passport_data);
		let url = "http://dd913f614b33.ngrok.io/api/postuser";
		axios
			.post(url, FormData)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<Head>
				<title>VTracker</title>
				<meta property="og:title" content="VTracker" />
				<meta
					property="og:description"
					content="Siz bla bla bla... VTracker"
				/>
			</Head>
			<div className="App">
				<div>
					<form onSubmit={handleSubmit}>
						<label>Img</label>
						<br />
						<input
							name="firstname"
							type="text"
							onChange={handleChange}
						/>
						<input
							name="lastname"
							type="text"
							onChange={handleChange}
						/>
						<input
							name="passport_data"
							type="text"
							onChange={handleChange}
						/>
						<input
							name="birthday"
							type="text"
							onChange={handleChange}
						/>
						<input
							name="location_lat"
							type="number"
							onChange={handleChange}
						/>
						<input
							name="location_long"
							type="number"
							onChange={handleChange}
						/>
						<input
							name="image_file"
							type="file"
							multiple
							onChange={handleChange}
						/>
						<input
							name="user_image_file"
							type="file"
							multiple
							onChange={handleChange}
						/>
						<br />
						<button>Submit</button>
					</form>
				</div>
				{userData.image_file ? (
					<img src={userData.image_file} />
				) : (
					<p> Img not found </p>
				)}
			</div>
		</>
	);
}
