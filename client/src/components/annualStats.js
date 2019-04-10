import React from 'react';
// import '../App.css';

export default class AnnualStats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let obj = this.props.annualStats
        let years = Object.keys(obj)
        let successRate = (acceptances, subs) => parseFloat(acceptances / subs * 100).toFixed(2)
        return(<div>
                <table>
                    <tr>
                        <th>Year</th>
                        <th>Acceptances</th>
                        <th>Submissions</th>
                        <th>Success Rate</th>
                        <th>Costs</th>
                    </tr>
                    { years.map( (year, index) => {
                        let y = obj[year]
                        return(<tr key={index}>
                            <td><span className="numbers">{year}</span></td>
                            <td>{y.acceptances}</td> 
                            <td>{y.submissions}</td> 
                            <td>{successRate(y.acceptances, y.submissions)}%</td>
                            <td>${y.costs}</td>
                        </tr>)
                    })}
                </table>
            </div>)
    }
}