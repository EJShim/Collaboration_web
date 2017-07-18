import React from 'react';
import LoginWindow from './Login';
import E_RenderWindow from './RenderWindow';

import E_Manager from '../Managers/E_Manager';

class App extends React.Component{

  constructor(props){
    super(props);
    this.Manager = new E_Manager();
  }



  render(){
    return(
      <div>
        <h1> EJ Shim </h1>
        <LoginWindow/>

        <button onClick={this.Manager.OnClickCube.bind(this.Manager)}> Cube </button>

        <button onClick={this.Manager.OnClickSphere.bind(this.Manager)}> Sphere </button>

        <button onClick={this.Manager.OnClickTorus.bind(this.Manager)}> Torus </button>

        <button onClick={this.Manager.DoAnimate.bind(this.Manager)}> Animate </button>


        <button onClick={this.Manager.CancelAnimate.bind(this.Manager)}>Stop </button>

        <E_RenderWindow Manager={this.Manager} value = {10}/>
      </div>
    )
  }
}

export default App;
