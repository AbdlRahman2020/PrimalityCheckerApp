import ResultPanel from "./ResultPanel";
import { Component } from 'react';
import Form from "./Form";
import axios from 'axios';

//let number = this.getElementById("number").value;

export default class App extends Component {

  // 1- Expose the FUCKING API --> done
  // 2- Retrieve the data from the API on button click 
  // 3- update the fucking state when the button is pressed
  // 4- display the fucking result

  

  render() {
    
    return (
      <body>
        <header className='primality-checker-header' >
          <h1>Primality Checker</h1>
          <h4><em>This Demo performs a number primality check</em></h4>
        </header>

        <Form />


      </body>

    );
  }
}
