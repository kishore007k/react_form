import React, { Component } from 'react';
import FormComponent from './FormComponent';

class FormContainer extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			Email: '',
			gender: '',
			age: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, type, value, checked } = event.target;

		type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
	}

	render() {
		return <FormComponent handleChange={this.handleChange} data={this.state} />;
	}
}

export default FormContainer;
