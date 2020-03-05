import React from 'react';
import { Container } from 'shards-react';
import img from '../../../resources/bubbles.jpg';

const Main = () => {
	return (
		<Container>
			<div id="main-text">
				<h1>Welcome to Bubblify!</h1>
				<h3>Where all your bubble dreams come true!</h3>
			</div>
			<div id="main-img">
				<img src={ img } alt=""/>
			</div> 
		</Container>
	);
};

export default Main;
