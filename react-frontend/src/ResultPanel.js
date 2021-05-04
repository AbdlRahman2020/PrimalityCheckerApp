import { Component } from "react"

export default class ResultPanel extends Component {
   
    render() {   
        const {data} = this.props; // getting properties

        const ResultPanelBody = (props) => {
            const inputNumber = props.data.inputNumber;
            const checkResult = props.data.checkResult;
           // console.log('number = ' + inputNumber + ', result = ' + checkResult); // debugging

            return (
                <div className="resultPanel">
                    <div className='result-title'>
                        <h2>Result</h2>
                    </div>
                    <div className='result-body'>
                        <h3 > {inputNumber} {checkResult} </h3>
                    </div>
                </div>
            )
        }

        return (
            <ResultPanelBody data={data}/>
        )
    }
}

