import React from "react";
import './Home.css'
import splash from './big_data.jpeg';

export default function Home() {
    return (
	<div className="container">
		<img src={splash} alt="DNB's Applications"/>
		<div className="centered">Applications</div>
	</div>
    )
}