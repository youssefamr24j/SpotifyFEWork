import React from "react";
import "./SignupForm.css";
//import { browserHistory } from 'react-router';
//import axios from 'axios';
//import Home from './Home';
//import { Component } from 'react';
//import { userService } from './user.service2';
//import { Link } from 'react-router';
//for email validation
const emailRegax = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data:{email: "",
      userName: "",
      password: "",
      day: 30,
      month: 1,
      year: 1999,
      gender: "Female",},

      isvalid: false,
      signedup: false, 

      formerrors: {
        emailError: "not yet",
        usernameError: "notyet",
        passwordError: "notyet",
        errormsg: ""
      },
      loaded:true, //MAKE LOADED:FALSE AFTER THE INTERGRATION
      //the data that the user data must be not equal it
      user: {            
          username1:"areejkhalid",
          email1:"user1@gmail.com", //make the object empty after intergration
        },
        //
       

    };
  }


/*
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
  onsubmit = e => {
    e.preventDefault();
    if (
      this.state.passwordError === "" &&
      this.state.usernameError === "" &&
      this.state.emailError === ""
    ) {

     if(this.state.email===this.state.user.email || this.state.userName===this.state.user.username){
      this.setState({errormsg:"choose another email or username"})
     }
     else{
       ////////this equation will removed and replaced by backened to get thier responed 
       /*
       let input = document.querySelectorAll('.forminput');
       const data={
           
           email : input[0].value,
           username: input[1].value,
           password: input[2].value,
           day:input[3].value,
           month:input[4].value,
           year:input[5].value,
           gender:input[6].value,
   
       }  
       return axios.post('api/link', data)
       //user exist response->false
       .then (response =>{
       if (response.data.userexist) // return true if username &email  exit before in databse
      {
       this.setState({errormsg:"choose another email or username"});
      }
     else{
      //signup
      this.setState({errormsg:"you are signed up!"});
      //send data to add to the backend
   ///
   
       }
       })
       //this if an error with server occur
                   .catch(error => {
                   if (error.response && error.response.data && error.response.data.error) {
                       this.setState({
                           errormsg: "*" + error.response.data.error
                       });
                   } else {
                       this.setState({errormsg:"an unknown error occur"});
                   }
               })
   */
  ///////////////////////////////////////
             /////
             //return axios.post('http://192.168.1.3:8080/users.json', this.state.Data)
            // .then (response =>{this.setState({signedup:true})})
      this.setState({ signedup: true });  //-
     }
    }
      
      


  };

  onChangeemail = e => {
    this.setState({
      email: e.target.value
    });
    let emailerror = this.state.emailError;
    emailerror =
      !emailRegax.test(e.target.value) ||
      e.target.value.trim() === "" ||
      e.target.value.length > 100 ||
      e.target.value.length < 5 ||
      e.target.value.length === 0
        ? "InvalidEmail!"
        : "";
    this.setState({ emailError: emailerror });
  };

  onChangeusername = e => {
    this.setState({
      userName: e.target.value
    });
    let usernameerror = this.state.usernameError;
    usernameerror =
      e.target.value.length > 16 ||
      e.target.value.length === 0 ||
      e.target.value.trim() === "" ||
      e.target.value.length < 6
        ? "minimum 6charchters And Maxmium 16 charchters are required"
        : "";
    this.setState({ usernameError: usernameerror });
  };

  onChangepassword = e => {
    this.setState({
      password: e.target.value
    });
    let passworderror = this.state.passwordError;
    passworderror =
      e.target.value.length > 16 ||
      e.target.value.trim() === "" ||
      e.target.value.length === 0 ||
      e.target.value.length < 8
        ? "minimum 8 charchters And Maxmium 16 charchters are required to make strong password"
        : "";
    //this.state.passwordError=passworderror;
    this.setState({ passwordError: passworderror });
  };

  onchangedateday = e => {
    this.setState({
      day: e.target.value
    });
  };

  onchangedateyear = e => {
    this.setState({
      year: e.target.value
    });
  };

  onchangedatemonth = e => {
    this.setState({
      month: e.target.value
    });
  };

  onChangegender = e => {
    this.setState({
      gender: e.target.value
    });
  };
  gologin = e => {
    return (window.location.href = "/login");
  }

  render() {
    var { user1,loaded } =this.state;
    if(loaded===false){
      return ( <div>loading..</div>)
    }
    else{


    if (this.state.signedup) {
      return (window.location.href = "/Home");
    }

    return (
      <form onSubmit={this.onsubmit} id="signupForm">
        <div className="components">
          <br></br>
          <br></br>
          <button id="bfb">SIGNUP WITH FACEBOOK</button>
          <br></br>
          <h2>OR</h2>
          <h1>Sign Up With Your Email Address</h1>
          <div className="errormsg">{this.state.errormsg}</div>
          <input
            onChange={this.onChangeemail}
            type="text"
            placeholder="Email"
            name="email"
            className="forminput"
            required="required"
          />

          <div className="errormsg">{this.state.emailError}</div>
          <br></br>

          <input
            onChange={this.onChangeusername}
            type="text"
            placeholder="UserNamee"
            name="userName"
            className="forminput"
            required="required"
          />

          <div className="errormsg">{this.state.usernameError}</div>
          <br></br>

          <input
            onChange={this.onChangepassword}
            type="password"
            placeholder="Password"
            name="password"
            className="forminput"
            required="required"
          />

          <div className="errormsg">{this.state.passwordError}</div>
          <br></br>

          <label id="label1">Date of Birth</label>
          <input id="D1"  onChange={this.onchangedateday}
  type="number" placeholder="Day" name="day" maxLength="2" max="30" min="01" pattern="[0-9]*"  required="required"  />
  
<select id= "D3" onChange={this.onchangedatemonth}
  name="month" required="required" >/option><option value="01">January</option><option value="02">February</option><option value="03">March</option><option value="04">April</option><option value="05">May</option><option value="06">June</option><option value="07">July</option><option value="08">August</option><option value="09">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select>
  
<input id="D2"  onChange={this.onchangedatemonth}
  type="number" placeholder="Year" name="year" maxLength="4" max="2019" min="1970"  required="required" ></input>  
 

          <br></br>
          <br></br>

          <select
            id="select"
            className="forminput"
            onChange={this.onChangegender}
            name="gender"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>

          <br></br>
          <br></br>

          <button className="btn" onClick={this.onSubmit}>
            {" "}
            SIGN UP
          </button>
          <h3> Already have account?</h3>
          <button id= "forlogin" onClick={this.gologin}>Login</button>
        </div>
      </form>
    );
    }
  }

}
export default SignupForm;
