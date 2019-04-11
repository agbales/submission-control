import React from 'react';
import AnnualStats from './annualStats'
import '../App.css';
import { Button } from 'react-materialize'
import { GiAstronautHelmet, GiLunarModule, GiBeamSatellite } from 'react-icons/gi';
import { FaCheckCircle } from 'react-icons/fa'

export default class PushcartPrizeRankings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showAcceptances: false
        }
    }

    componentDidMount() {
    }

    toggleAcceptedVisible() {
        this.setState(prevState => ({
            showAcceptances: !prevState.showAcceptances
        }))
    }

    render() {
        let submittableOrange = { color: '#FC5B30' }
        let second = { color: '#00AF79', cursor: 'pointer'}
        let third = { color: '#FFC10E' }
        let link = { cursor: 'pointer'}

        return(
        <div>
            <header className="App-header">
                <div className="flex-container">
                    <div className="overview-box">
                        <GiAstronautHelmet className="bigIcon" style={submittableOrange} />
                        <h2>{ this.props.stats.totalSubmissions 
                                ? this.props.stats.totalSubmissions.toString()
                                : <span>. . .</span> }
                        </h2>
                        <span>missions</span>
                    </div>
                    <div className="overview-box" >
                        <GiLunarModule className="bigIcon" 
                                       style={second} 
                                       onClick={ ()=> this.toggleAcceptedVisible() } />
                        <h2 onClick={ ()=> this.toggleAcceptedVisible() } style={link}>
                            { this.props.stats.totalAcceptances 
                                ? this.props.stats.totalAcceptances.toString()
                                : <div /> }
                        </h2>
                        <span onClick={ ()=> this.toggleAcceptedVisible() } style={link}>landings</span>
                    </div>
                    <div className="overview-box">
                        <GiBeamSatellite className="bigIcon" style={third} />
                        <h2>{ this.props.stats.overallAcceptanceRate 
                                ? this.props.stats.overallAcceptanceRate.toString()
                                : <div /> }%
                        </h2>
                        <span>success rate</span>
                    </div>
                </div>
                
                <div className="container">
                    { !this.props.inspectingSimilar &&
                        <AnnualStats annualStats={this.props.stats.years}/>
                    }
                </div>

                { this.state.showAcceptances 
                    ? (<div> 
                            <Button onClick={ ()=> this.toggleAcceptedVisible() }>Close</Button>
                            <ul>
                                { this.props.acceptances.map( (entry, i) => {
                                    return(<li key={i}>
                                                <span className="accepted"><FaCheckCircle className="green-checkmark" /></span>
                                                <span className="list-title">{entry['Title']}</span>
                                            </li>)
                                })}
                            </ul>
                        </div>)
                    : <div></div> 
                }
            </header>
        </div>)
    }
}