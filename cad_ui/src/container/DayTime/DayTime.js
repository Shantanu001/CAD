import React from "react";
import {render} from "react-dom";
import "../DayTime/DayTime.scss";
import "../../assets/Location.css";

class DayTime extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
    //     <svg xmlns="http://www.w3.org/2000/svg">
    //     <filter id="melt">
    //       <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
    //         <feColorMatrix in="blur" mode="matrix" values=" 1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
    //         <feBlend in="SourceGraphic" in2="goo" />
    //     </filter>
    //   </svg>
        return(
            <div class="container">
            <div class="rays">
              <div class="ray ray--1"></div>
              <div class="ray ray--2"></div>
              <div class="ray ray--3"></div>
              <div class="ray ray--4"></div>
              <div class="ray ray--5"></div>
              <div class="ray ray--6"></div>
              <div class="ray ray--7"></div>
              <div class="ray ray--8"></div>
            </div>
            <div class="sun">
              <div class="sun__face">
              </div>
            </div>
			<div className="Top-Bottom-morning">
			<h1 class="main-heading">
				<span class="main-heading-primary">Good Morning</span>
				<span class="main-heading-secondary">karnatka Bangalore</span>
			</h1>
			</div>
           
          </div>
          
         
        );
    }
    
}
export default DayTime;