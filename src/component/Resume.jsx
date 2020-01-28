import React from "react";
import PropTypes from "prop-types";


export default class Resume extends React.Component {

	render() {
		return (
		<div id="my-resume" className="container text-center my-5">
		<h1 id="resume"> Haley Fogelson Resume </h1>
		<div style={{ display:'inline', textAlign:'left'}}>
		<h3 style={{ color: 'blue' }}> Education </h3>
		<h6>Northeastern Univerisity, Boston, MA <br/>
		Bachelor of Science in Computer Engineering and Computer Science, GPA: 3.87  <br/>
		Dean’s List: Fall 2018-present  <br/> <br/>
		<h5>Courses:</h5>      Fund. of Computer Science 2, Calculus 2, Chemistry 2,  Physics 2, Differential Equations and Linear Algebra, Embedded 
Design, Discrete Structures, Circuits and Signals, Fund. of Networks, Algorithms, Logic and Computation
<br/> <br/>
<h5>Activities:</h5>   Generate (Build Studio Engineer), Hillel (Learning Chair & Community Engagement Intern), Delta Phi Epsilon, SWE,    
                    IEEE, NUHOC, and Club running

		<br/><br/>
		<h3 style={{ color: 'blue' }}> Projects </h3>
		<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							window.scrollTo({
								top: 1900,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
		<br/><br/> 
		<h3 style={{ color: 'blue' }}> Work Experience </h3>
		<h5> AT&T Cyber Security </h5> Columbia, MD <br/>
		-Completed a new internship program in the cyber security government branch for AT&T <br/>
		-Created presentations to teach employees in my branch of new technology after researching various topics <br/>
		-Deployed network monitoring tools and configured networks to test the best tools for our branch <br/>
		-Created the webpage that will be used as the interface for a website built for government employees to collaborate  <br/>
		-Created python scripts for parsing through ICMP packets to troubleshoot networks<br/>
		-Set an example for future interns by creating an intern guide and curriculum for the interns in the Cyber Patriots Branch<br/>
		<br/><br/>
		<h5> McDonogh School </h5>
		Owings Mills, MD
		Software Intern <br/>
		Worked with Javascript, SQL, ColdFusion, HTML, CSS, and Git to update the school's website and databases<br/>
		<br/>
		<br/>
		<br/>
		</h6>
		</div>
		</div>
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