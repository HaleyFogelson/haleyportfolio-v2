import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
					<h1>
						WELCOME TO MY DIGITAL PORTFOLIO
						<br />
					</h1>
					<h2>
						I&apos;m Haley Fogelson.
						<br />
					</h2>
					<h4> I&apos;m a third year Computer Engineering and Computer Science Student with a minor in Entrepreneurial Startups at Northeastern University </h4>
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						About me
					</button>
					{/* offset can be changed in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: 2000,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: 2500,
								behavior: "smooth"
							});
						}}>
						Resume
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
