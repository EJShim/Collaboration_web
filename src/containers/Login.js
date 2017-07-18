import React from 'react';


class LoginWindow extends React.Component{


  render(){
    return(
      <div>
        <input type="text" placeholder="name"/>
        <input type="text"/>
        <button>Log In</button>
      </div>
    );
  }
}

export default LoginWindow;
