import ResultPanel from "./ResultPanel";
import { Component } from 'react';

export default class Form extends Component {

  // class properties
  data = {
    inputNumber: '', 
    checkResult: ' '
  }
  state = this.data; // Initial state

  // handles button submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.numberField // Retrieves user's input
    //console.log(value);
    this.setState({
      inputNumber: value // changing initial state to user's input.
    })

    const url = "http://localhost:8080/api/main"; // API endpoint
    var myHeaders = new Headers();               
    myHeaders.append("Content-Type", "application/json");  // POST Request headers

    var raw = parseInt(value); //JSON.stringify(value);
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };


    fetch(url, requestOptions) // making API call.
      .then(response => response.text())
      .then(results => {
        this.setState({ checkResult: results })
      })
      .catch(error => console.log('error', error));
  }

  render() {
    const data = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}
        action='POST' method='handleSubmit' className='primality-check-form'>

        <div className='form-row'>
          <label for='numberField'>Enter a number below to start</label>

          <input type="number" name="numberField"
            min="1" oninput="validity.valid||(value='');"
            placeholder="Please enter a positive number "
            id="numberField" required></input>

          <div className='form-row'>
            <button
              type="submit"
              id="submitButton">Check for Primality</button>
          </div>
        </div>

        <div>
          {/* Passing the data to  Result Panel class */}
          <ResultPanel data={data} /> 
        </div>

      </form>

    );
  }
}
