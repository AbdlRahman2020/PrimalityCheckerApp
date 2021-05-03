import ResultPanel from "./ResultPanel";
import { Component } from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state =
    {
      result: ' is Prime',
      inputNumber: 2
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    const { value } = event.target.numberField
    console.log(value);
    const url = "http://localhost:8080/api/main";
    
    this.setState({
      inputNumber: value
    })

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(this.state.inputNumber);
    console.log('raw: ' +raw);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(results => {
        this.setState({ result: results })
      })
      .catch(error => console.log('error', error));
  }

  render() {
    const resultData = this.state;
    const inputNumber = this.state.inputNumber;
    console.log(resultData)
    console.log(inputNumber)
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
        <ResultPanel number={inputNumber} result={resultData} />
      </form>
    );
  }
}

//onClick={() => this.setState({ inputNumber })}