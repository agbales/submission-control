import React from 'react';
import { Button } from 'react-materialize'
import { FaCheckCircle, FaRegCircle, FaTimesCircle, FaStumbleuponCircle } from 'react-icons/fa'
import '../App.css';

export default class InspectSimilar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    pickSubmissionIcon(entry) {
        let icon 
        let status = entry['Status']
        if (status === 'Accepted') {
          icon = <FaCheckCircle className="green-checkmark" />
        } else if (status === 'In-Progress' || status === 'New') {
          icon = <FaRegCircle />
        } else if (status === 'Withdrawn') {
          icon = <FaStumbleuponCircle />
        } else {
          icon = <FaTimesCircle />
        }
        return icon
    }

    render() {
        let newFirst = (a,b) => {
            if (a.Status === 'New' || a.Status === 'In-Progress' || a.Status === 'Accepted') { return -1 }
            return 0
        }

        let buttonStyle = {margin: '20px 0', backgroundColor: 'rgb(252, 91, 48)', color: '#f5f5f5', border: 'none'}

        return(<div>
                { this.props.similar ?
                    <div style={{width: '500px'}}>
                        <h1 className="playfair">{this.props.similar[0].Title}</h1>
                        <Button onClick={ () => { this.props.toggleSimilar() }} style={buttonStyle}>Back to All</Button>
                        <br />
                        <ul>
                            { this.props.similar.reverse().sort(newFirst).map( (entry, i) => {
                                let price = parseInt(entry['Fee Paid'])
                                let icon = this.pickSubmissionIcon(entry)
                                let dateStyle = { color: 'rgb(164, 164, 164)'}
                                let priceStyle = { color: '#00AF79' }

                                return (<li key={i}>
                                            <span className="accepted">{ icon }</span>
                                            <span className="lato"><a href={entry['Organization Website']} target="_blank" rel="noopener noreferrer">{entry['Organization']}</a></span>
                                            <span style={dateStyle}> {entry['Submission Date'].match(/\d{4}/)[0]} </span>
                                            <span className="submission-count">
                                                <span style={priceStyle}>{ price ? '$' + price : '' }</span>
                                            </span>
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
                : <div>Loading...</div>
                }
            </div>)
    }
}