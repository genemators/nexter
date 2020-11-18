import React, { useState, Component } from "react";
import Head from "next/head";
import App from "next/app";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = (event) => {
		alert('A form was submitted: ' + this.state);

		fetch('http://dd913f614b33.ngrok.io/api/postuser', {
			method: 'POST',
			// We convert the React state to JSON and send it as the POST body
			body: JSON.stringify(this.state)
		}).then(function(response) {
			console.log(response)
			return response.json();
		});

		event.preventDefault();
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
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							Name:
							<input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</>
		);
	}
}