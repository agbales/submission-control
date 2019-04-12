import React from 'react'
import Overview from './overview'
import InspectSimilar from './inspectSimilar'
import UniquePieces from './uniquePieces'
import Footer from './footer'

export default class MissionControl extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inspectingSimilar: false,
            similar: []
        }
        this.toggleSimilar = this.toggleSimilar.bind(this)
    }
    
    getSimilar(title) {
        let similar = this.props.data.filter( submission => {
          return submission.Title === title
        })
        this.props.scrollToTop()
        this.setState({ similar: similar })
    }

    toggleSimilar(title) {
        this.setState(prevState => ({
          inspectingSimilar: !prevState.inspectingSimilar
        }))
        if (title) {
          this.getSimilar(title)
        }
    }

    render() {
        return(<div>
                { !this.state.inspectingSimilar &&
                    <Overview stats={this.props.stats} 
                            acceptances={this.props.stats.acceptances}
                            inspectingSimilar={this.state.inspectingSimilar} 
                            toggleSimilar={this.props.toggleSimilar} 
                    />
                }
                { this.state.inspectingSimilar 
                    ? <InspectSimilar toggleSimilar={this.toggleSimilar}
                                      similar={this.state.similar} />
                    : (<div>
                            <UniquePieces data={this.props.data}
                                        toggleSimilar={this.toggleSimilar} />
                            <Footer />
                        </div>)
                }
            </div>)
    }
}