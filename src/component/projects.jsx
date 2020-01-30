import React from "react";
import Vmarine from "../img/SmartyPill.jpg";
import SmartyPill from "../img/SmartyPill.jpg";
import SmartTrash from "../img/smarttrash.jpg";
import roboArm from '../img/roboarm.mov'
import roboArm2 from '../img/roboarmpic.png';
import aguaDeLuz from "../img/agueDeLuz.png";
import Spotr from '../img/IMG_0441.jpg'
import todo from "../img/todolist.png";
import PropTypes from "prop-types";
import Carousel from 'react-images';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand1: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen1: {
    transform: 'rotate(180deg)',
  },
  expand2: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen2: {
    transform: 'rotate(180deg)',
  },
  expand3: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen3: {
    transform: 'rotate(180deg)',
  },
  expand4: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen4: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const images=[{source:'../img/SmartyPill.jpg', }]


export default function Projects() {
	const classes = useStyles();
 	const [expanded1, setExpanded1] = React.useState(false);
 	const [expanded2, setExpanded2] = React.useState(false);
 	const [expanded3, setExpanded3] = React.useState(false);
 	const [expanded4, setExpanded4] = React.useState(false);
 	const [expanded5, setExpanded5] = React.useState(false);
 	const [expanded6, setExpanded6] = React.useState(false);
 	const handleExpandClick1 = () => {
    	setExpanded1(!expanded1);
  	};
  	const handleExpandClick2 = () => {
    	setExpanded2(!expanded2);
  	};
  	const handleExpandClick3 = () => {
    	setExpanded3(!expanded3);
  	};
  	const handleExpandClick4 = () => {
    	setExpanded4(!expanded4);
  	};
  	const handleExpandClick5 = () => {
    	setExpanded5(!expanded5);
  	};
  	const handleExpandClick6 = () => {
    	setExpanded6(!expanded6);
  	};


		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects" style={{textAlign:'center'}}>
							
							Projects
						</h1>
						
						{/*<div className="row my-5">
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
						</div>*/}

						{/*This is the second row */}
						{/*<div className="row my-7">
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
					{/* Cards */}
					<div style={{display:'flex'}}>

					<Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            <MoreVertIcon />
				          </IconButton>
				        }
				        title="Smarty Pill"
				        subheader="September-December 2019"
				      />
				      <CardMedia
				        className={classes.media}
				        image={SmartyPill}
				        title="SmartyPill"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          Smart Pill depensing device and website to manage precriptions
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				        <IconButton
				          className={clsx(classes.expand1, {
				            [classes.expandOpen1]: expanded1,
				          })}
				          onClick={handleExpandClick1}
				          aria-expanded={expanded1}
				          aria-label="show more"
				        >
				         Learn more <ExpandMoreIcon />
				        </IconButton>
				      </CardActions>
				      <Collapse in={expanded1} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li> Built a smart pill dispensing device with Generate for our client who is now in the process of patenting it</li>
				            <li> Created the web portal interface for patients and caregivers to manage prescriptions and dispense times </li>
				            <li> Worked with a software-hardware integrated team to turn our client’s idea into a product by figuring out important details to frame the project </li>
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>

				    <Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            <MoreVertIcon />
				          </IconButton>
				        }
				        title="A+tendance"
				        subheader="January-April 2019"
				      />
				      <CardMedia
				        className={classes.media}
				        image={aguaDeLuz}
				        title="attendance"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          Worked on a Generate team to create an RFID scanner that connects to the mobile app for taking attendance
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				        <IconButton
				          className={clsx(classes.expand2, {
				            [classes.expandOpen2]: expanded2,
				          })}
				          onClick={handleExpandClick2}
				          aria-expanded={expanded2}
				          aria-label="show more"
				        >
				          Learn more <ExpandMoreIcon />
				        </IconButton>
				      </CardActions>
				      <Collapse in={expanded2} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li> Worked on a Generate team to create an RFID scanner that connects to the mobile app for taking attendance</li>
				            <li> Completed a significant portion of the project by learning from my teammates and teaching myself  ReactNative, Heroku, and Node to make the phone app for the project despite being the only first-year student accepted onto a generate team </li>
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>

				    <Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            <MoreVertIcon />
				          </IconButton>
				        }
				        title="Smart Trash"
				        subheader="January-April 2018"
				      />
				      <CardMedia
				        className={classes.media}
				        image={SmartTrash}
				        title="smart trash"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          Worked with a team to create a trash can that used TensorFlow for machine learning to determine if an item is trash or recycling which then had the Raspberry Pi control a servo motor to place the item in the corresponding bin 
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				        <IconButton
				          className={clsx(classes.expand3, {
				            [classes.expandOpen3]: expanded3,
				          })}
				          onClick={handleExpandClick3}
				          aria-expanded={expanded3}
				          aria-label="show more"
				        >
				          Learn more <ExpandMoreIcon />
				        </IconButton>
				      </CardActions>
				      <Collapse in={expanded3} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li> Worked with a team to create a trash can that used TensorFlow for machine learning to determine if an item is trash or recycling which then had the Raspberry Pi control a servo motor to place the item in the corresponding bin </li>
				            
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>






						{/*<Card style={{ maxWidth: 345 }}>
					      <CardActionArea>
					        <CardMedia
					          style={{ height: 400 }}
					          image={SmartTrash}
					          title="Contemplative Reptile"
					        />
					        <CardContent>
					          <Typography gutterBottom variant="h5" component="h2">
					            Lizard
					          </Typography>
					          <Typography variant="body2" color="textSecondary" component="p">
					            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					            across all continents except Antarctica
					          </Typography>
					        </CardContent>
					      </CardActionArea>
					      <CardActions>
					        <Button size="small" color="primary">
					          Share
					        </Button>
					        <Button size="small" color="primary">
					          Learn More
					        </Button>
					      </CardActions>
					    </Card>
					    <Card style={{ maxWidth: 345 }}>
					      <CardActionArea>
					        <CardMedia
					          style={{ height: 300 }}
					          image={Spotr}
					          title="Contemplative Reptile"
					        />
					        <CardContent>
					          <Typography gutterBottom variant="h5" component="h2">
					            Spotr
					          </Typography>
					          <Typography variant="body2" color="textSecondary" component="p">
					            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					            across all continents except Antarctica
					          </Typography>
					        </CardContent>
					      </CardActionArea>
					      <CardActions>
					        <Button size="small" color="primary">
					          Share
					        </Button>
					        <Button size="small" color="primary">
					          Learn More
					        </Button>
					      </CardActions>
					    </Card>*/}
					    </div>
					    <div style={{display:'flex'}}>

					<Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            <MoreVertIcon />
				          </IconButton>
				        }
				        title="Spotr"
				        subheader="March 2019"
				      />
				      <CardMedia
				        className={classes.media}
				        image={Spotr}
				        title="Spotr"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          Created an app during a hackathon that tracks the side of crowds at places around campus
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				        <IconButton
				          className={clsx(classes.expand4, {
				            [classes.expandOpen4]: expanded4,
				          })}
				          onClick={handleExpandClick4}
				          aria-expanded={expanded4}
				          aria-label="show more"
				        >
				         Learn more <ExpandMoreIcon />
				        </IconButton>
				      </CardActions>
				      <Collapse in={expanded4} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li>Created an app during a hackathon that tracks the side of crowds at places around campus</li>
				            <li> Developed the app on Swift, used IBM’s non-relational database, and created scripts in Python   </li>
				            <li> Delegated tasks efficiently to finish the project within the 24-hour time limit  </li>
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>
				    <Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            <MoreVertIcon />
				          </IconButton>
				        }
				        title="Robotic Arm"
				        subheader="December 2019"
				      />
				      <CardMedia
				        className={classes.media}
				        image={roboArm2}
				        title="Robotic Arm"
				      >  </CardMedia>
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          Programmed a robotic arm to be controlled by a wii remote for my Embedded Design class
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				        <IconButton
				          className={clsx(classes.expand5, {
				            [classes.expandOpen5]: expanded5,
				          })}
				          onClick={handleExpandClick5}
				          aria-expanded={expanded5}
				          aria-label="show more"
				        >
				          Learn more <ExpandMoreIcon />
				        </IconButton>
				      </CardActions>
				      <Collapse in={expanded5} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li> Created C++ code to determine what actions on the wiimote correspond to the robotic arm movement</li>
				            <li> Created a circuit using logic gates on Matlab </li>
				            
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>
				    </div>

					</div>
				</div>


				{/*hidden modals*/}
				{/*<div id="gallery-card">
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
								</a>
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
									</li>
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
				</div>*/}
			</React.Fragment>
		);
	
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
