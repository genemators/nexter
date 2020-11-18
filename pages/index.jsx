import React, { useState, Component } from "react";
import Head from "next/head";
import axios from "axios";

export default class Home extends Component() {
	constructor(props, context) {
		super(props, context);

		this.state = {
			firstname: "",
			lastname: "",
			passport_data: "",
			birthday: "",
			location_lat: "",
			location_long: "",
		};
	}
	onChange(e) {
		this.setState({
			firstname: e.target.value,
			lastname: e.target.value,
			passport_data: e.target.value,
		});
	}
	onSubmit(e) {
		e.preventDefault();

		fetch(this.form.formAction, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				passport_data: this.state.passport_data,
				birthday: this.state.birthday,
				location_lat: this.state.location_lat,
				location_long: this.state.location_long,
			}),
		}).then((r) => console.log(r));

		this.setState({
			firstname: "",
			lastname: "",
			passport_data: "",
			birthday: "",
			location_lat: "",
			location_long: "",
		});
	}
	render() {
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
							<br />
							<button>Submit</button>
						</form>
					</div>
				</div>
			</>
		);
	}
}
