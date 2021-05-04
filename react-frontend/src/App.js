import { Component } from 'react';
import Form from "./Form";

export default class App extends Component {

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
