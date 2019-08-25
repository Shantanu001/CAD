import React from "react";
import {render} from "react-dom";
import "../NightTime/NightTime.css";
import {Row,Col} from "react-bootstrap";
import "../../../src/assets/Location.css";

class NightTime extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
			<div id="container">
			<div class="star" id="one"></div>
			<div class="star" id="two"></div>
			<div class="star" id="three"></div>
			<div class="star" id="four"></div>
			<div class="star" id="five"></div>
			<div class="star" id="six"></div>
			<div class="star" id="seven"></div>
			<div class="star" id="eight"></div>
			<div class="star" id="nine"></div>
			<div class="star" id="ten"></div>
			<div class="star" id="eleven"></div>
			<div class="star" id="twelve"></div>
			<div class="star" id="thirteen"></div>
			<div class="star" id="fourteen"></div>
			<div class="star" id="fifteen"></div>
			<div class="star" id="sixteen"></div>
			<div class="star" id="seventeen"></div>
			<div id="moon">
				<div class="crater" id="one"></div>
				<div class="crater" id="two"></div>
				<div class="crater" id="three"></div>
				<div class="crater" id="four"></div>
				<div class="crater-round" id="one"></div>
				<div class="crater-round" id="two"></div>
				<div class="crater-round" id="three"></div>
				<div id="face">
					<div id="eyes"><div class="eye"></div><div class="eye"></div></div>
					<div id="mouth"></div>
				</div>
			</div>
			<div className="Top-Bottom-night">
			<h1 class="main-heading">
				<span class="main-heading-primary">Good Evening</span>
				<span class="main-heading-secondary">karnatka Bangalore</span>
			</h1>
			</div>
		</div>
        );
    }
    
}
export default NightTime;