
import ResultPanel from "./ResultPanel";
import { Component } from 'react';

export default class Form extends Component {

constructor(props) {
    super(props)
    this.state =
    {
      result: ' is Prime',
      number: 2
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (event) => {
    const { value } = event.target
    this.setState({
      number: 44
    })

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(this.state.number);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/api/main", requestOptions)
      .then(response => response.text())
      .then(results => {
        this.forceUpdate({result: results})
      })
      .catch(error => console.log('error', error));

  }

  render() {
    const resultData = this.state;
    const number = this.state;
    console.log(resultData)
    console.log(number)
    return(
        <form onSubmit={this.handleSubmit}
          action='POST' method='handleSubmit' className='primality-check-form'>
          <div className='form-row'>
            
            <label for='number'>Enter a number below to start</label>

            <input type="number" name="number"

              min="1" oninput="validity.valid||(value='');"
              placeholder="Please enter a positive number "
              id="number" required></input>

            <div className='form-row'>
              <button onClick={() => this.setState({ number: 311 })}
              type="submit" 
                id="submitButton">Check for Primality</button>
            </div>
          </div>
          <ResultPanel  number={number} result={resultData} />
        </form>
    );
  }
}