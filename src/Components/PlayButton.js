import React  from 'react';

/**
 * play button it reacts to user click
 */

class Playbutton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      /** This binding is necessary to make `this` work in the callback */
      this.handleClick = this.handleClick.bind(this);
    }
    
    /**
     * toggle the boolean "isToggleOn"
     */
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        
      }));
    }
  
    render() {
        /**
         * converting the button depending on isToggleOn value 
         */
        if(this.state.isToggleOn === true){
            return (
                <div onClick={this.handleClick}>
                  <li id="play-btn"> PLAY </li>
                  
                </div>
              );
        }
        else{
            return (
                <div onClick={this.handleClick}>
                  <li id="play-btn"> PAUSE </li>
                  
                </div>
              );

        }
      
    }
}

export default Playbutton;
