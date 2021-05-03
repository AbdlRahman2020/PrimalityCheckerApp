import { Component } from "react"

export default class ResultPanel extends Component {
   
    render() {   
        let {number} = this.props.number;
        let {result} = this.props.result;
        //console.log(this.props.result.result);
        const ResultPanelBody = () => {
            
            return (

                <div className="resultPanel">
                    <div className='result-text'>
                        <h2>Result</h2>
                    </div>
                    <div className='result-text'>
                        <h3 > {number} {result} </h3>
                    </div>
                </div>
            )
        }

        return (
            <ResultPanelBody number={number} result={result}/>

        )
    }
}

