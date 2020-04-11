import React  from 'react';
import './Follow.css';

/**
 * follow button it reacts to user click
 */

class Follow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      /**  This binding is necessary to make `this` work in the callback */
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
      return (
          /**
         * it converts the button depending on isToggleOn value 
         */
        <div onClick={this.handleClick}>
          {this.state.isToggleOn ? <li id="follow-btn"> Follow </li> : <li id="unfollow-btn"> UNFOLLOW </li>}
        </div>
      );
    }
}

export default Follow;





