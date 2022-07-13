import React from 'react';
import '@styles/NotFound.scss';
import NotFoundImg from '@images/not_found.svg';
import { Link } from "react-router-dom";

const NotFound = () =>{
	return (
		<div className="login">
			<div className="form-container">
				<div className="not-found-image">
					<img src={NotFoundImg} alt="Not Found" />
				</div>
				<h1 className="title">Sorry!</h1>
				<p className="subtitle">We could not find the page you are looking for.</p>
				<Link to="/" className="primary-button login-button">
					Go home!
				</Link>
			</div>
		</div>);
}

export default NotFound;