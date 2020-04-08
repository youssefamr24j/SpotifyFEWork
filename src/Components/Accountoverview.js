import React from "react";
import  "./Accountoverview.css";

class Accountoverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         //make the userinfo in user
          user: {   
                    username:"areejkhalid",
            email:"areejkhalid03@gmail.com",
            day:20,
            month:10,
            year:1999 
          },
          
          loaded:true,// MAKE LOADED:FALSE AFTER THE INTERGRATION
        };
    }
    
   /*  MAKE LOADED:FALSE AFTER THE INTERGRATION
    componentDidMount(){
      fetch('http://192.168.1.3:8080/users.json')
      .then(response => {
      response.json();
       })
      .then(users => {
        this.setState({
          user:users,
       loaded:true})

      });
    }
    */
    
    
    gotoprem = e => {
//go to premium page
return (window.location.href = "/Premium");
      };

    gotoeditprofile = e=>{
     return (window.location.href = "/EditProfile");
    };


   

render() {      
  var { user,loaded } =this.state;
  if(loaded===false){
    return ( <div>Data is loading..</div>)// if data still not available
  }
  else{
    return(
   <div style={{paddingBottom:200}} className="info">
<h1>Account overview</h1>
  <h2>Profile</h2>

  <label className="labels">Username:</label><label className="data"> {this.state.user.username}</label>
<br></br>
<label className="labels">Email:</label> <label className="data">{this.state.user.email}</label>  
<br></br>
<label className="labels">Date of birth: </label> <label className ="data"> {this.state.user.day}/{this.state.user.month}/{this.state.user.year}</label>
  <br></br>
  <br></br>


  <button className="button1" onClick={this.gotoeditprofile}>EDIT PROFILE</button>
  <br></br>
 
  <br></br>
  <h4> YOUR PLAN</h4>
  <div className="id">
  <br></br> 
  <br></br>
  <h3 className="pp"> Spotify Free</h3><br></br>
  <br></br> 
  </div>
    <div className ="labels">Play music in shuffle mode only, with ads.</div>
    <h5> FREE</h5>
   <button className="button1" onClick={this.gotoprem}>JOIN PREMIUM</button>
 </div>
    ); }}

}
export default Accountoverview;
////{this.state.users.username }