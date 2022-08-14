import React from "react";
import Vmarine from "../img/SmartyPill.jpg";
import SmartyPill from "../img/SmartyPill.jpg";
import SmartTrash from "../img/smarttrash.jpg";
import roboArdunio from "../img/roboArdunio.png"
import MaskUp from "../img/Maskup.png"
import roboArm from '../img/roboarm.mov'
import roboArm2 from '../img/roboarmpic.png';
import aguaDeLuz from "../img/agueDeLuz.png";
import Spotr from '../img/IMG_0441.jpg'
import todo from "../img/todolist.png";
import PropTypes from "prop-types";
import Carousel from 'react-images';
import github from "../img/github.png";
import growOrganic from "../img/groworganic.png"
import GoImageRecognition from "../img/GoImageRecoginition.png"

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
    expand5: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen5: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
   expand6: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen6: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
    expand7: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen7: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
    expand8: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen8: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
    expand9: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen9: {
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
 	const [expanded7, setExpanded7] = React.useState(false);
 	const [expanded8, setExpanded8] = React.useState(false);
 	const [expanded9, setExpanded9] = React.useState(false);


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
  	const handleExpandClick7 = () => {
    	setExpanded7(!expanded7);
  	};
  	const handleExpandClick8 = () => {
    	setExpanded8(!expanded8);
  	};
  	const handleExpandClick9 = () => {
    	setExpanded9(!expanded9);
  	};


		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects" style={{textAlign:'center'}}>
							
							Projects
						</h1>
					{/* Cards */}
					<div style={{display:'flex'}}>

					<Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            
				          </IconButton>
				        }
				        title="MaskUP"
				        subheader="December 2020-Present"
				      />
				      <CardMedia
				        className={classes.media}
				        image={MaskUp}
				        title="MaskUP"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          Security System for detecting personal protective equipment
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				        <IconButton
				          className={clsx(classes.expand7, {
				            [classes.expandOpen7]: expanded7,
				          })}
				          onClick={handleExpandClick7}
				          aria-expanded={expanded7}
				          aria-label="show more"
				        >
				         Learn more <ExpandMoreIcon />
				        </IconButton>
				      </CardActions>
				      <Collapse in={expanded7} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li> Developed code to build off TensorFlow’s face recognition to determine if an individual is wearing is a Mask</li>
				            <li> Got project funded by pitching during an Israel Round Table Shark Tank competition and winning 3rd place</li>
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>



				    <Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            
				          </IconButton>
				        }
				        title="Grow Organic"
				        subheader="September-December 2020"
				      />
				      <CardMedia
				        className={classes.media}
				        image={growOrganic }
				        title="Grow Organic"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				         A growing setup that monitors and takes care of plants
				        </Typography>
				        <br/>
				        
				      </CardContent>
				      <CardActions disableSpacing>
				        <IconButton
				          className={clsx(classes.expand8, {
				            [classes.expandOpen8]: expanded8,
				          })}
				          onClick={handleExpandClick8}
				          aria-expanded={expanded8}
				          aria-label="show more"
				        >
				          Learn more <ExpandMoreIcon />
				        </IconButton>
				      </CardActions>
				      <Collapse in={expanded8} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li> Worked on a Generate team to create a growing system for our client that monitors and cares for plants</li>
				            <li> Wrote Python and C++ code to control motors and store sensor data in an AWS SQL database</li>
				            <li> Helped design the circuit</li>
				          </Typography>
				          <Typography variant="body2" color="textSecondary" component="p">
				          Software used: C++, Python, Raspberry pi, and AWS web services
				        </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>

				    <Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            
				          </IconButton>
				        }
				        title="Animal Classifier"
				        subheader="July 2020"
				      />
				      <CardMedia
				        className={classes.media}
				        image={GoImageRecognition}
				        title="GoImageRecognition"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          GO ramp up project where I chose to create an animal classifier with Tensorflow 
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				      <Button size="small" color="secondary" href="https://github.com/HaleyFogelson/GoImageRecognition">
					         View Code
					      </Button>
				        <IconButton
				          className={clsx(classes.expand9, {
				            [classes.expandOpen9]: expanded9,
				          })}
				          onClick={handleExpandClick9}
				          aria-expanded={expanded9}
				          aria-label="show more"
				        >
				          Learn more <ExpandMoreIcon />
				        </IconButton>
				        
				      </CardActions>
				      <Collapse in={expanded9} timeout="auto" unmountOnExit>
				        <CardContent>
				          <Typography paragraph>About:</Typography>
				          <Typography>
				            <li> Created a GO program using TensorFlow to classify my co-workers' pets during my co-op at Xandr</li>
				            <li>They let me pick anything I am passinate about so I picked AI and animals because I love both</li>
				            <li>The ramp up project allowed me to get comfortable enough with GO and Docker to spend following 6 months after developing with it</li>
				            <li> Program takes a picture or URL and gives the top 3 classifications that the image could be </li>
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>
				     </div>
					    <br/>







					<div style={{display:'flex'}}>

					<Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            
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
				         RFID scanner that connects to the mobile app for taking attendance through bluetooth
				        </Typography>
				        <br/>
				        
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
				          <Typography variant="body2" color="textSecondary" component="p">
				          Software used: React Native, Node js, Firebase, Python
				        </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>

				    <Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            
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
				          Self-sorting trash and recycling bin using machine learning
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				      <Button size="small" color="secondary" href="https://github.com/HaleyFogelson/Smart-Trash-can">
					         View Code
					      </Button>
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
				     </div>
					    <br/>




					  <div style={{display:'flex'}}>

					<Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            
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
				         App that tracks the size of crowds at places around campus
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
				          Robotic arm to be controlled by a Wii remote 
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
				          	<li> Programmed a robotic arm to be controlled by a wii remote for my Embedded Design class </li>
				            <li> Created C++ code to determine what actions on the wiimote correspond to the robotic arm movement</li>
				            <li> Created a circuit using logic gates on Matlab </li>
				            
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>


				    <Card className={classes.card}>
				      <CardHeader
				        action={
				          <IconButton aria-label="settings">
				            
				          </IconButton>
				        }
				        title="Autonomous Robot"
				        subheader="September 2018"
				      />
				    <CardMedia
				        className={classes.media}
				        image={roboArdunio}
				        title="Autonomous Robot"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          Collection of random robotic projects using ardunio
				        </Typography>
				      </CardContent>
				      <CardActions disableSpacing>
				      <Button size="small" color="secondary" href="https://github.com/HaleyFogelson/Arduino-Projects/tree/master/Don_t_fall_off_table">
					         View Code
					     </Button>
				        <IconButton
				          className={clsx(classes.expand6, {
				            [classes.expandOpen6]: expanded6,
				          })}
				          onClick={handleExpandClick6}
				          aria-expanded={expanded6}
				          aria-label="show more"
				        >
				          Learn more <ExpandMoreIcon />
				        </IconButton>
				        
				      </CardActions>
				      <Collapse in={expanded6} timeout="auto" unmountOnExit>
				        <CardContent>
				        <Typography>
				          	I have created a bunch of random mini robots using arduino. This robot used IR sensors in order to sense the edge of the table and keep itself on the table. 
				          </Typography>
				          <Typography paragraph>Other Ardunio Projects:</Typography>
				          <Typography>
				          Sonar Robot
				          	<li> Robot that uses a ping-sensor ontop of a servo to create a radar that drew the directions it go on a screen and avoided obstacles 
				            <Button size="small" color="primary" href="https://github.com/HaleyFogelson/Arduino-Projects/blob/master/robot_with_ping_and_servo/robot_with_ping_and_servo.ino">
					         Source Code
					      </Button>
				            </li>
				 			Encoder Robot
				            <li> Robot going straight using encoders 
				            <Button size="small" color="primary" href="https://github.com/HaleyFogelson/Arduino-Projects/blob/master/Incoder_Robot/Incoder_Robot.ino">
					         Source Code
					      </Button>
				            </li>
				            
				          </Typography>
				        </CardContent>
				      </Collapse>
				    </Card>
				    </div>

					</div>
				</div>


				{/*hidden modals*/}
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
