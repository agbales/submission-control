import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { FaFileInvoiceDollar, FaCalendarAlt, FaUserAstronaut } from 'react-icons/fa';
import { GiLunarModule, GiBeamSatellite } from 'react-icons/gi';

export default class AnnualStats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    acceptanceRate = (acceptances, subs) => parseFloat( (acceptances / subs * 100).toFixed(2) )

    percentageFormatter(cell) {
        return `${cell}%`;
    }
    
    priceFormatter(cell) {   
        return `$ ${cell}`
    }
    
    yearFormatter(cell) {
        return `<span class="numbers">${cell}</span>`
    }

    render() {
        let data = Object.keys(this.props.annualStats).map( year => {
            let y = this.props.annualStats[year] 
            let obj = {}

            obj.year = year
            obj.acceptances = y.acceptances
            obj.submissions = y.submissions
            obj.acceptanceRate = this.acceptanceRate(y.acceptances, y.submissions)
            obj.cost = y.costs

            return obj
        })
        
        let orange = { color: '#FC5B30' }
        let green = { color: '#00AF79'}
        let yellow = { color: '#FFC10E' }

        return(<div>
                <BootstrapTable data={ data } striped hover>
                    <TableHeaderColumn dataField='year' dataFormat={this.yearFormatter} dataSort={true} isKey><FaCalendarAlt /> year</TableHeaderColumn>
                    <TableHeaderColumn dataField='submissions' dataSort={true}><FaUserAstronaut style={orange}/> missions</TableHeaderColumn>
                    <TableHeaderColumn dataField='acceptances' dataSort={true}><GiLunarModule style={green}/>  landings</TableHeaderColumn>
                    <TableHeaderColumn dataField='acceptanceRate' dataFormat={this.percentageFormatter} dataSort={true}><GiBeamSatellite style={yellow}/> success</TableHeaderColumn>
                    <TableHeaderColumn dataField='cost' dataFormat={this.priceFormatter} dataSort={true}><FaFileInvoiceDollar className="green-checkmark" /> expenses</TableHeaderColumn>
                </BootstrapTable>
            </div>)
    }
}