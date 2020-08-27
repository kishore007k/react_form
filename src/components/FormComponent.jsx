import React from 'react';

function FormComponent(props) {
	return (
		<main>
			<form>
				<label>First Name :</label>
				<input name="firstName" value={props.data.firstName} placeholder="First Name" onChange={props.handleChange} />
				<br />

				<label>Last Name :</label>
				<input name="lastName" value={props.data.lastName} placeholder="Last Name" onChange={props.handleChange} />
				<br />

				<label>Email :</label>
				<input name="Email" value={props.data.Email} placeholder="Email" onChange={props.handleChange} />
				<br />

				<label>
					<input
						type="radio"
						value="male"
						name="gender"
						checked={props.data.gender === 'male'}
						onChange={props.handleChange}
					/>Male
				</label>
				<br />

				<label>
					<input
						type="radio"
						value="female"
						name="gender"
						checked={props.data.gender === 'female'}
						onChange={props.handleChange}
					/>Female
				</label>
				<br />

				<label>Age :</label>
				<input type="text" name="age" value={props.data.age} onChange={props.handleChange} placeholder="dd/mm/yyyy" />
				<br />

				<label>Skills :</label>
				<select value={props.data.skills} name="skills" onChange={props.handleChange}>
					<option value="">Please Choose a skill</option>
					<option value="HTML">HTML</option>
					<option value="CSS">CSS</option>
					<option value="JavaScript">JavaScript</option>
					<option value="ReactJS">ReactJS</option>
					<option value="VueJS">VueJS</option>
				</select>

				{/* Otuput */}
				<h3>
					Your Name is: {props.data.firstName} {props.data.lastName}
				</h3>
				<h3>Your Email ID is: {props.data.Email}</h3>
				<h3>Gender: {props.data.gender}</h3>
				<h3>Age: {props.data.age}</h3>
				<h3>Skills: {props.data.skills}</h3>
			</form>
		</main>
	);
}

export default FormComponent;
