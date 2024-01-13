import React from "react";
import ReactDOM from "react-dom";

class Mount extends React.Component{

    // use either constructor or getDerivedStateFromProps one of them both have same working here
    // props are use to update state
    constructor(props){
        console.log("inside Constructor...!");
        super(props); //every constructor or class have super 
        this.state={
            fname : "Ashu"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("inside getDerivedStateFromProps...!");
        console.log("state is = ",state);
        console.log("props are = ",props);
        
        return{
            fname: props.defaultName
        }
    }

    //componentDidMount get called after render 
    componentDidMount(){
        console.log("Inside componentDidMount....!")
        console.log("Inside this we can impport API,....!")
        
    }

    render(){
        console.log("Inside Render....!")
        return{
            <div className="Mount"> 
              <p> My Name is {this.state.fname} </p>
            </div>
        }
    }
}

export default Mount ;