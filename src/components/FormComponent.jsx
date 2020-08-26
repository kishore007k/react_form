import React from 'react';

function FormComponent(props) {
	return (
		<main>
			<form>
				<label>First Name :</label>
				<input name="firstName" value={props.data.firstName} placeholder="first name..." onChange={props.handleChange} />
				<br />
				<label>Last Name :</label>
				<input name="lastName" value={props.data.lastName} placeholder="last name..." onChange={props.handleChange} />
				<br />
				<label>Email :</label>
				<input name="Email" value={props.data.Email} placeholder="last name..." onChange={props.handleChange} />
				<h3>
					Your Name is: {props.data.firstName} {props.data.lastName}
				</h3>
				<h3>Your Email ID is: {props.data.Email}</h3>
			</form>
		</main>
	);
}

export default FormComponent;
