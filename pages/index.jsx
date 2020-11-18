import React from "react";
import Head from "next/head";
import "isomorphic-fetch";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { firstname:'',lastname:'', passport_data: '', birthday:'',location_lat:'',location_long:''}
	}

	handleSubmit(event){
		const { firstname, lastname, passport_data, birthday, location_lat, location_long} = this.state
		event.preventDefault()
		fetch('http://dd913f614b33.ngrok.io/api/postuser', {
			method: 'POST',
			body: { firstname, lastname, passport_data, birthday, location_lat, location_long }
		}).then(response => {console.log(response)});
	}

	handleChange(event){
		this.setState({
			[event.target.name] : event.target.value
		})
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
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div>
							<label htmlFor='firstname'>First Name</label>
							<input
								name='firstname'
								placeholder='firstname'
								value = {this.state.firstname}
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div>
							<label htmlFor='lastname'>lastname</label>
							<input
								name='lastname'
								placeholder='lastname'
								value={this.state.lastname}
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div>
							<label htmlFor='passport_data'>passport_data</label>
							<input
								name='passport_data'
								placeholder='passport_data'
								value={this.state.passport_data}
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div>
							<label htmlFor='birthday'>birthday</label>
							<input
								name='birthday'
								placeholder='birthday'
								value={this.state.birthday}
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div>
							<label htmlFor='location_lat'>location_lat</label>
							<input
								name='location_lat'
								placeholder='location_lat'
								value={this.state.location_lat}
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div>
							<label htmlFor='location_long'>location_long</label>
							<input
								name='location_long'
								placeholder='location_long'
								value={this.state.location_long}
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div>
							<button>Proceed</button>
						</div>
					</form>
				</div>
			</>
		);
	}
}