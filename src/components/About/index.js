import React from 'react';
import { Container } from 'shards-react';
import img from '../../../resources/familybubbles.jpg';

const About = () => {
	return (
		<Container>
			<div id="about-text">
				<h1>About us</h1>
				<h3>We are a small family company that just love bubbles!</h3>
				<h6>
					If you need bubbles you have come to the right place. Here you can get
					all things bubble. Be sure to check out our Bundles, they are great!
				</h6>
			</div>
			<div id="about-img">
				<img src={ img } alt=""/>
			</div>
		</Container>
	);
};

export default About;
