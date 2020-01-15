import React from "react";
import PropTypes from "prop-types";

export default class Resume extends React.Component {

	render() {
		return (
		<React.Fragment>
		<h1 id="resume"> Haley Fogelson Resume </h1>

		</React.Fragment> 
			);
	}
}
Resume.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};