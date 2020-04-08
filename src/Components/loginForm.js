import React, { Component } from "react";
import "./login.css";
import "./page.js";

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      password: "",
      isLoading: false,
      nameError: "",
      passwordError: "",
      loggedIn: false,
      loggingError: "",
      loaded:true, //seted to false in normal mocking
      user:{
        email:"user1@gmail.com",
        password:"123456"
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  isValid() {
    if (this.state.identifier.length < 1 && this.state.password.length < 1) {
      this.setState({
        nameError: "Please enter your Spotify username or email address.",
        passwordError: "Please enter your password."
      });
    } else if (
      this.state.identifier.length < 1 &&
      this.state.password.length > 0
    ) {
      this.setState({
        nameError: "Please enter your Spotify username or email address."
      });
    } else if (
      this.state.password.length < 1 &&
      this.state.identifier.length > 1
    ) {
      this.setState({ passwordError: "Please enter your password." });
    } else {
      return true;
    }
  }

  //  componentDidMount() {
  //    fetch('...................')
  //    .then(response => {
  //      response.json
  //    })
  //    .then(users => {
  //      this.setState({
  //       user:users,
  //       loaded:true
  //      })
       
  //    });
  //  }



  onSubmit = e => {
    this.setState({ nameError: "", passwordError: "" });
    e.preventDefault();

    if (this.isValid()) {
      //----- This lines are must when integrating with the backend not now
      /* let input = document.querySelectorAll('.center');

       const data = {

           email: input[0].value,
           password: input[1].value,
           

       }

   return axios.post('http://localhost:3000/users' , data)
    .then(response => {
    console.log(response)
        if(response.data.token) {
         //Finish Login
        }
        else {
            alert('please check your username or password')
        }
        
    })
   }
   //CatchErrorOfServer
   
}*/

      //-------------------------------------------------------
      //Here's to only fake log in without any connections with database "static user"

        if(this.state.identifier===this.state.user.email  && this.state.password===this.state.user.password) {
      this.setState({
        loggedIn: true
      });}
      else {
        this.setState({
          loggingError:"Incorrect username or password"
        })
          
      }
    }
    
  };
  render() {
    const { identifier, password, isLoading,loaded } = this.state;
    if(loaded===false) {
      return <div style={{paddingBottom:600}}>loading...</div>
    }
    else {
    if (this.state.loggedIn) {
      return (window.location.href = "/Home");
    }

    return (
      <form id="loginForm">
        <h3> To continue,log in to Spotify </h3>
        <div className="error">{this.state.loggingError}</div> <br />
        <button
          className="btn2"
          
            //alert("try later");
            onClick={this.onSubmit}
          
          disabled={isLoading}
        >
          CONTINUE WITH FACEBOOK
        </button>
        <h3>OR</h3>
        <input
          name="identifier"
          field="identifier"
          value={identifier}
          className="center"
          type="text"
          placeholder="Enter Username or Email "
          onChange={this.onChange}
        />
        <div className="error">{this.state.nameError}</div> <br />
        <input
          name="password"
          field="password"
          value={password}
          type="password"
          className="center"
          placeholder="Password"
          onChange={this.onChange}
        />
        <div className="error">{this.state.passwordError}</div> <br />
        <button className="btn" onClick={this.onSubmit} disabled={isLoading}>
          LOG IN
        </button>{" "}
        <br />
        <a href="/page" className="hyperLink">
          Forgot your password?
        </a>
        <hr />
        <h3>Don't have an account ?</h3>
        <a className="btn3" href="/signup" disabled={isLoading}>
          SIGN UP FOR SPOTIFY
        </a>
      </form>
    );
  }
}
}
export default Loginform;
