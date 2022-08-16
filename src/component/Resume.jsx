import React from "react";
import PropTypes from "prop-types";


export default class Resume extends React.Component {
	render() {
		return (
		<div id="my-resume" className="container text-center my-5">
		<h1 id="resume"> Haley Fogelson Resume </h1>
		<div style={{ display:'inline', textAlign:'left'}}>
		<h3 style={{ color: 'blue' }}> Education </h3>
		
		<h6> <h5> Northeastern Univerisity</h5> Boston, MA <br/> 
		Bachelor of Science in Computer Engineering and Computer Science with Minor in Entrepreneurial Startups,  GPA: 3.85 <br/>
		Dean’s List: Fall 2018-present  <br/> <br/>
		<div style={{ display:'flex'}}>
		<h5>Courses:</h5>      Artificial Intelligence, Object Oriented Design, Computer Systems, Digital Design, Fund. of Computer Science 2, Calculus 2, Chemistry 2,  Physics 2,
		 Differential Equations and Linear Algebra, Embedded Design, Discrete Structures, Circuits and Signals, Fund. of Networks, Algorithms, Logic and Computation
	</div>
	<br/> <br/>
	<div style={{ display:'flex'}}>
	<h5>Activities:</h5>   Generate (Build Studio Engineer, Chief Computer Engineer, & Project Lead), Hillel (Learning Chair & Community Engagement Intern), Delta Phi Epsilon(Panhel Delegate), SWE,    
                    IEEE, NUHOC, CHAARG and Club running
     </div>
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
		<h5> Amazon Robotics </h5> North Reading, MA <br/> July-December 2021 <br/> Firmware Engineering CO-OP <br/>
		<li>Worked on the safety mechanisms for the Robots in the Warehouses </li>
		<li>Created tests in python and C++ to run on the hardware </li>
		<li>Researched and documented how to use Amazon's other software on the microchips of a device </li> <br/><br/>
		<h5> CLYPD and Xandr </h5> Boston, MA <br/> July-December 2020 <br/> Software Engineering CO-OP <br/>
		<li>Created features using Go, Python, SQL, and AWS on platform that creates ad placements for advanced targets on linear television</li>
		<li>Integrated Xandr data in platform and taught Xandr employees how Clypd’s platform works during company merger</li>
		<li>Led an Epic to create useful debugging tools for the company</li>
		<li>Planned sprints for software team using Jira while shadowing agile coach</li>
		<li>Optimized code by doing code review on pull requests and testing deployment with Docker on Jenkins’ sandboxes</li>
		<li>Learned about how to make teams efficient and how a company runs well by meeting with executives</li>
		<br/><br/>
		<h5> AT&T Cyber Security </h5> Columbia, MD <br/> May-August 2019 <br/> Goverment solutions Intern <br/>
		<li>Interned in the cyber security government branch for AT&T </li>
		<li>Researched new technologies and created presentations to teach full-time employees new skills</li> 
		<li>Deployed network monitoring tools and configured networks to test the best tools for our branch </li>
		<li>Created the webpage that will be used as the interface for government employees to collaborate  </li>  
		<li>Wrote Python scripts for parsing ICMP packets to troubleshoot networks</li>
		<li>Created an intern guide and curriculum for future interns in the Cyber Patriots Branch</li>
		<br/><br/>
		<h5> McDonogh School </h5>
		Owings Mills, MD<br/> May-August 2019<br/>
		Software Intern <br/>
		<li> Worked with Javascript, SQL, ColdFusion, HTML, CSS, and Git to update the school's website and databases</li>
		<br/><br/>
		<h5>DRD Pools</h5>
		Baltimore, MD <br/>
		<br/><br/>
		<h5>Michael Phelps Swim School/ Meadowbrook Swim Club</h5>
		Baltimore, MD <br/>
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
