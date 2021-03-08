import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";
import myImage from "../img/myImage.png";
import PropTypes from "prop-types";
export default class About extends React.Component {
	render(){
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>


				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
							I am currently a third-year Computer Engineering and Computer Science major with a Minor in Entrepreneurial Startups
							at Northeastern University. I enjoy coding and have a passion for robotics and programming. 
							I can often be found working on an array of technical projects. I have created 
							 websites, apps, prototypes for startup ideas, databases, robots, boats, and more. 
							 I love being able to use creativity and innovation to transform ideas into physical products. 
							 The more I learn about the field through my projects I have come to realize how I can use creativity and
							 innovation to better my community. Being able to help those around me while following my passions is
							 what drives me to study Computer Engineering and Computer Science. 

							At Northeastern I am a part of an array of organizations and clubs and enjoy being actively involved on campus.  
							Outside of coding, I enjoy wakesurfing, getting lost (finding new places I would have never seen), traveling, running, meditation,
							playing instruments, and hammocking.	
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<h3 id="about" className={this.props.bounceLeft}>
						Skills Progress
						</h3>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JAVA
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 75 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								GO
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								C++
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 75 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Python
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 85 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Git
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SQL
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 40 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Docker
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 50 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 20 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JavaScript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 20 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 20 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Tensorflow
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								The Design Process
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 40 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Solid Works
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 40 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								AWS webservices
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 30 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SWIFT
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 20 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Jenkins
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 40 + "%" }}
								aria-valuemin="0"
								aria-valuemax="50">
								Matlab
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
