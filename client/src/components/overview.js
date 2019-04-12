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
        let threeRem = { fontSize: '3rem' }
        let roboto = { fontFamily: 'roboto' }
        let uploadButton = { marginTop: '20px', backgroundColor: '#00AF79', color: '#f5f5f5', border: 'none' }

        return(
            <div>
                <header className="App-header">
                    <div className="flex-container">
                        <div className="overview-box">
                            <GiAstronautHelmet className="bigIcon" style={submittableOrange} />
                            <h1 style={threeRem}>{ this.props.stats.totalSubmissions.toString() }</h1>
                            <span style={roboto}>missions</span>
                        </div>
                        <div className="overview-box" >
                            <GiLunarModule className="bigIcon" 
                                        style={second} 
                                        onClick={ ()=> this.toggleAcceptedVisible() } />
                            <h1 onClick={ ()=> this.toggleAcceptedVisible() } 
                                style={threeRem}>{ this.props.stats.totalAcceptances.toString() }
                            </h1>
                            <span style={roboto} onClick={ ()=> this.toggleAcceptedVisible() }>landings</span>
                        </div>
                        <div className="overview-box">
                            <GiBeamSatellite className="bigIcon" style={third} />
                            <h1 style={threeRem}>{ this.props.stats.overallAcceptanceRate.toString() }%</h1>
                            <span style={roboto}>success rate</span>
                        </div>
                    </div>
                    
                    { this.state.showAcceptances 
                        ? (<div> 
                                <Button style={uploadButton} onClick={ ()=> this.toggleAcceptedVisible() }>Close</Button>
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

                    <div className="container">
                        <AnnualStats annualStats={this.props.stats.years}/>
                    </div>

                </header>
            </div>
        )
    }
}