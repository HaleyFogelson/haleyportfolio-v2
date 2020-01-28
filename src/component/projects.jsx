import React from "react";
import Vmarine from "../img/SmartyPill.jpg";
import SmartTrash from "../img/smarttrash.jpg"
import aguaDeLuz from "../img/agueDeLuz.png";
import Spotr from '../img/IMG_0441.jpg'
import todo from "../img/todolist.png";
import PropTypes from "prop-types";
import Carousel from 'react-images';

const images=[{source:'../img/SmartyPill.jpg', }]

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Smarty Pill</h2>
										<h6> September-December 2019 </h6>
									</div>
									<div>
										<button
											id="smartypill-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"smartypill"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block"; 
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>

								<div className="overlay">
									<div className="text">
										<h2>A+tandance</h2>
										<h6> January-April 2019 </h6>
									</div>
									<div>
										<button
											id="attendance-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"attendance"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Smart Trash</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
						{/*This is the second row */}
						{/*<div className="row my-6">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Spotr</h2>
										<h6> December 2019 </h6>
									</div>
									<div>
										<button
											id="spotr-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var spotrModal = document.getElementById(
													"spotr"
												);
												modalBG.style.display = "block";
												spotrModal.style.display =
													"block"; 
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>A+tandance</h2>
										<h6> January-April 2019 </h6>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Smart Trash</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>*/}
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="smartypill" className="modal-card">
						<div className="visual">
							<img crop="scale" height="100" src={Vmarine} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Smarty Pill</h2>
							<div className="modal-description">
								<ul>
									<li>
										Worked on a team in Generate to create a smart pill depensing device and
										user interface for people to manage precriptions for our client who has gone
										on to work on patenting the device
									</li>
									<li>
										Device created using rasberry pi, website built using React and JavaScript
										backend built using Heroku and flask
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"smartypill"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="attendance" className="modal-card">
						<div className="visual">
							<img height="100" src={aguaDeLuz} alt=""/>
						</div>
						<div className="modal-info">
							<h2>A+tandance</h2>
							<div className="modal-description">
								<ul>
									<li>
										Pocket sized bluetooth RFID scanner with an App that uses the non-encrpyed part
										of any card with a strip and maps it to a user to take attendance
									</li>
									<li>
										Developed with ReactNative, CSS, Bootstrap,
										Webpack, Parallax Effect,
										SmoothScrolling(UI), and VanillaJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								{/*<a
									href="./AguaDeLuz/index.html"
									target="_blank">
									<h3>View live demo</h3>
								</a>*/}
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"attendance"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img  src={SmartTrash} alt=""/>
						</div>
						<div className="modal-info">
							<div className="modal-description">
								<ul>
									<li>
										A self-sorting trash and recycling can
									</li>
									<li>
									Worked on a team to create a trash can that used TensorFlow for machine learning to determine if an item is trash or recycling which then had the raspberry pi control a servo motor to place the item in the corresponding bin 
									</li>
									{/*<li>
										Developed with TensorFlow, python, c++ 
									</li>*/}
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="https://github.com/HaleyFogelson/Smart-Trash-can" target="_blank">
									<h5>Github code</h5>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 800,
										fontSize: 1 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
