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
        let secondNum = { fontFamily: "'Bungee Shade', cursive", margin: '5px 15px', fontSize: '4rem', color: '#00AF79'}
        let third = { color: '#FFC10E' }
        let link = { cursor: 'pointer'}

        return(
        <div>
            <header className="App-header">
                <div className="flex-container">
                    <div className="overview-box">
                        <GiAstronautHelmet className="bigIcon" style={submittableOrange} />
                        <div>
                            <h1 className="inline-block playfair" style={{fontSize: '6rem', marginRight: '10px'}}>
                                { this.props.stats.totalSubmissions &&
                                    this.props.stats.totalSubmissions.toString()
                                }
                            </h1>
                            <h1 className="inline-block" style={{fontSize: '3rem', fontFamily: 'open sans'}}>  missions</h1>
                            <span className="inline-block"> </span>
                        </div>
                    </div>
                    <div className="overview-box" >
                        <GiLunarModule className="bigIcon" 
                                       style={second} 
                                       onClick={ ()=> this.toggleAcceptedVisible() } />
                        <div>
                            <h1 onClick={ ()=> this.toggleAcceptedVisible() } style={secondNum} className="inline-block">
                                { this.props.stats.totalAcceptances &&
                                    this.props.stats.totalAcceptances.toString()
                                } 
                            </h1>
                            <h2 style={{display: 'inline-block', marignRight: '10px'}}>  landings</h2>
                        </div>
                        {/* <span onClick={ ()=> this.toggleAcceptedVisible() } style={link}>landings</span> */}
                    </div>
                    <div className="overview-box">
                        <GiBeamSatellite className="bigIcon" style={third} />
                        <h1 style={{fontSize: '3rem'}}>{ this.props.stats.overallAcceptanceRate &&
                                this.props.stats.overallAcceptanceRate.toString()
                            }%
                        </h1>
                        <span style={{fontFamily: 'roboto'}}>success rate</span>
                    </div>
                </div>
                
                <div className="container">
                    <AnnualStats annualStats={this.props.stats.years}/>
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