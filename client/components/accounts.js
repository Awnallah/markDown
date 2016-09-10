import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze';


class Accounts extends Component {
	componentDidMount() {
		// Render Blaze accounts form then place it in the div within the render method
		this.view = Blaze.render(Template.loginButtons,
		 ReactDom.findDOMNode(this.refs.container));
	}

	componentWillUnmount() {
		// find created forms and destroy them
		Blaze.remove(this.view);
	}

	render() {
		return (
			<div ref='container'></div>
			);
	}
}


export default Accounts;