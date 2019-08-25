import React from "react";
import {render} from "react-dom";
// import "../NightTime/NightTime.css";
// import {Row,Col} from "react-bootstrap";
// import "../../../src/assets/Location.css";
import axios from "axios";

class Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        axios.get("http://localhost:1337/fetch/userDetails")
        .then(response =>{
            console.log(response);
        });
        
    }

    render(){
        return(
			<div>
                </div>
        );
    }
    
}
export default Welcome;