import React, { Component } from "react";
import "./Recover.css";

//--This to handle only one list to delete and recover :
class Recoverplaylist extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
            deletedLists: [
              { date:2/4, title: 'singer1', songs: 5}
               //this array must be empty when integrating with real data to fill it with data from server
              
              ],
            onTable:true, //to visualize table of deleted playlist.. if data exist set this manually to true..it will change atoumatically when there's real data from server in handling function below
            onHeader:false //to visualize that no deleted playlist set this manually to true..it will change atoumatically when there's real data from server in handling function below

        };
    }
     //-----------here fetch data from server to the deleted lists array (deletedLists must be handeled in backend)
    //  componentDidMount() {
  //    fetch('...................')
  //    .then(response => {
  //      response.json
  //    })
  //    .then(deletedlists => {
  //      this.setState({
  //       deletedLists:deletedlists,
  //       loaded:true
  //      })
       
  //    });
  //  }

    //-------------Handling Recovering Playlist
      // handling = e => {
      
      //  if(user array is not empty fetched with data from the above function)//get data heree from server using if condition 
      //   {
      //     this.setState({onTable:true}) //therefore it will render table content on the screen
      
      //   }
      //    else {
      //      this.setState({onHeader:true})
      //   }

      // }


    restoreData = e => {
      this.setState({onTable:false,onHeader:true})
      alert("Playlist RESTORED")
      //must return data again to the server by post request 
      }
    renderTableData() {
        //there's a deleted playlist
      if(this.state.deletedLists){
        
      return this.state.deletedLists.map((deletedLists, index) => {
         const { date, title, songs } = deletedLists //destructuring
         
         return (
           <div>
          <tr>
          <th>DELETED</th>
          <th>TITLE</th>
          <th>SONGS</th>
          <th>RESTORE</th>
          </tr>
               <td>{date}</td>
               <td>{title}</td>
               <td>{songs}</td>
               <td>
               <button className="restor" onClick={this.restoreData}>
          RESTORE
        </button>
              </td>
               </div>     
            
         )
      })
    }
   }
    
   

   
  




        render() {
         
           // must call handling function here to know the state of onTable and onHeader before entering
    return (
        
      <div style={{paddingBottom:300}} >
        <br></br> <br></br> <br></br> <br></br>
        <header className="heading">
       
           Recover playlists</header> <hr/>

        <header className="statment" >
            {this.state.onHeader? "You haven't deleted any playlists":null}
        </header> 

        <div> 
        {this.state.on}
        <header className="table">
        {this.state.onTable?"Accidentally deleted a playlist?No worries, find the deleted playlist you'de like to recover below and click RESTORE to recover it.":null}
        </header>
        <table id='deletedLists'>
               <tbody>
                  { this.state.onTable ? this.renderTableData():null} 
                  
               </tbody>
            </table>
        
       </div> <br></br> <br></br> <br></br> <br></br>





        <header className="styling">
            Help improve your account experience. 
        </header>
        <br></br>
        <header className="ques">
            Do you find what you looking for?
        </header>

        <input className="radio" type="radio" onClick={()=>alert("Thanks for your response")}  name="enable" value="yes" checked /> 
        <label id="forlabel">Yes</label> <br></br>
        <input className="radio" type="radio" onClick={()=>alert("Send your complains to spotify service center!")}  name="enable" value="no" checked/>
        <label id="forlabel">No</label>
  
       

      </div>
    );
    }
}

export default Recoverplaylist;
