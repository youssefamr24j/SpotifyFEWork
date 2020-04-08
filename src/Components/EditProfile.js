import React from "react";
//import{ Component, Fragment } from "react";
////import axios from 'axios'; 
import  "./EditProfile.css";
const emailRegax = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
const phonenumberRegex =RegExp( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         // newdetails:
            newemail: "",
            newuserName: "",
            password: "",
            newday: 30,
            newmonth: 1,
            newyear: 1999,
           newgender: "Female",
           newphonenumber:"",

          passwordtrue:false,
          changeemail:false,
          changeday:false,
          changemonth:false,
          changeyear:false,
          changegender:false,
          changephonenumber:false,
          formerrors: {
            newemailError: "",
            newusernameError: "",
            newphonenumberError:"",
            msg:"",
          },
          donesaving:"",
          user1 : {},

          loaded:true, //MAKE LOADED:FALSE AFTER THE INTERGRATION
          //make userinfo inside user
          user: {            
              username:"areejkhalid",
              email:"areejkhalid03@gmail.com",
              day:20,
              month:10,
              year:1999,
              pass:"123456",
            },



        };
    }

   /* 
    componentDidMount(){
      fetch("http://192.168.1.3:8080/users.json")
      .then(response => response.json())
      .then (users =>this.setState({
        user:users,
      loaded:true}));
    }
*/
    
   saveEdit =e =>{  
    e.preventDefault();
    console.log("done??");   
    if(this.state.password===this.state.user.pass){
               if(this.state.changeemail===true){
                   if( this.state.newemail !== this.state.user.email) {
                    //axious.post('/users',newemail) 
                    this.setState({msg:"Email is changed!"});
                   }
                   else{
                    this.setState({msg:"Email is already taken!"});
                   }
                  }
            
             if(this.state.changeday===true){
           // axious.post('/users',newday)
           this.setState({msg:"Day of your birthdate is changed!"});
              }
    
          if(this.state.changemonth===true){
            //axious.post('/users',newmonth) 
            this.setState({msg:"month of your birthday is changed!"});
             }
    
          if(this.state.changeyear===true){
            //axious.post('/users',newyear)
            this.setState({msg:"year of your birthday is changed!"});
           }
    
          if(this.state.changegender===true){
            //axious.post('/users',newgender)
            this.setState({msg:"your gender is changed!"});
           }
    
           if(this.state.changephonenumber===true){
    ///axious.post('/users',newphonenumber)
    this.setState({msg:"your phone number is changed!"});
           }
    
    
        }
        else{
          this.setState({msg:"the password is not correct"});
        }
      }
    
    onChangeemail = e => {
      this.setState({
        newemail: e.target.value
      });
      let newemailerror = this.state.newemailError;
      newemailerror =
        !emailRegax.test(e.target.value) ||
        e.target.value.trim() === "" ||
        e.target.value.length > 100 ||
        e.target.value.length < 5 ||
        e.target.value.length === 0
          ? "InvalidEmail!"
          : "";
      this.setState({ newemailError: newemailerror });
      if(newemailerror==="")
      {
        this.setState({changeemail:true})
      }
    };
    onChangephonenumber = e =>{
      this.setState({
        newphonenumber: e.target.value,
      });

      let newphonenumbererror = this.state.newphonenumberError;
      newphonenumbererror =
        !phonenumberRegex.test(e.target.value)||
        e.target.value.trim() === "" ||
        e.target.value.length !== 10 ||
        e.target.value.length === 0
          ? "InvalidPhoneNumber"
          : "";
      this.setState({ newphonenumberError: newphonenumbererror });
      if(newphonenumbererror==="")
      {
        this.setState({changephonenumber:true})
      }
    }
   
    onChangepassword = e => {
      this.setState({
        password: e.target.value
      });

    };
    
    onchangedateday = e => {
      this.setState({
        newday: e.target.value,
        changeday:true,
      });
    };
  
    onchangedateyear = e => {
      this.setState({
        newyear: e.target.value,
        changeyear:true
      });
    };
  
    onchangedatemonth = e => {
      this.setState({
        newmonth: e.target.value,
        changemonth:true,
      });
    }


    onChangegender = e =>{
      this.setState({
        newgender: e.target.value,
        changegender:true,
      });
    }

    cancelEdit =e =>{
      //go to home again
      return (window.location.href = "/account");
    }


    
  

    render() {
      var { user,loaded } =this.state;
      if(loaded===false){
        return ( <div>Data is loading..</div>)
      }
      else{
        
       return(

         <div style={{paddingBottom:200}} className="editprofileform"> 

         <br></br>
         <br></br>
            <h1> Edit Your Profile</h1>
            <br></br>
           <label className="labels">Email</label>
           <br></br>
           
            <input
            onChange={this.onChangeemail}
            type="text"
            placeholder={this.state.user.email}
            name="newemail"
            className="forminput"
          />
          <div className="errormsg">{this.state.newemailError}</div>
          <br></br>

          <label className="labels">Confirmation Password</label>
          <br></br>

          <input
            onChange={this.onChangepassword}
            type="password"
            placeholder="Enter Your Password To Confirm Edits"
            name="newpassword"
            className="forminput"
            required="required"
          />
          
         
          <br></br>
          
          <label className="labels">Gender</label>
          <br></br>
          
           <select
            id="select"
            className="forminput"
            name="newgender"
            placeholder={this.state.user.gender}
            onChange={this.onChangegender}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>

          <br></br>
          <label className="labels">Phone Number</label>
          <br></br>

          <input
            onChange={this.onChangephonenumber}
            type="phonenumber"
            maxLength="10"
            placeholder="Enter phone number after '0'"
            name="newphonenumber"
            pattern="[0-9]*"
            className="forminput"
          />
        <div className="errormsg">{this.state.newphonenumberError}</div>
          <br></br>

          <br></br>

         <label className="labels" >Date Of Birth</label>
        <br></br>

        <input
            id="D1"
            onChange={this.onchangedateday}
            type="number"
            placeholder={this.state.user.date}
            className="forminput"
            name="newday"
            maxLength="2"
            max="30"
            min="01"
            pattern="[0-9]*"
            
          />

          <select
            id="D3"
            className="forminput"
            onChange={this.onchangedatemonth}
            name="newmonth"
            placeholder={this.state.user.month}
            
          >
            /option><option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <input
            id="D2"
            onChange={this.onchangedateyear}
            type="number"
            className="forminput"
            placeholder={this.state.user.year}
            name="newyear"
            maxLength="4"
            max="2019"
            min="1970" ></input>
          <br></br>
          <br></br> 

          <div className="errormsg">{this.state.msg}</div>
              
          <button className="buttonprem" onClick={this.cancelEdit }>Cancel Edits</button>
   <button className="buttonprem" onClick={this.saveEdit }>Save Edits</button>
          

           </div>        
 );
       }
    }
}
export default EditProfile;
//  //#1db954;
