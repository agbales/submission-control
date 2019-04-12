import React from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { GiBlackHoleBolas } from 'react-icons/gi'

export default class PushcartPrizeRankings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    uniquePieces(data) {
        let titles = data.map( entry => entry['Title'])
        let unique = []
        let checkAcceptance = (index) => {
          return data[index]['Status'] === "Accepted" ? true : false
        }
    
        titles.forEach( (title, index, arr) => { 
          if (arr.indexOf(title) === index) {
            unique.push({ title: title, 
                          count: 1, 
                          date: data[index]['Submission Date'], 
                          accepted: checkAcceptance(index) 
                        })
          } else {
            unique.forEach( entry => {
              if (entry.title === title) {
                entry.count += 1
                if (entry.accepted !== true) {
                  entry.accepted = checkAcceptance(index)
                }
              }
            })
          }
        })
        // { title: "publication", count: 9, accepted: true, date: '9/15/2018...' }
        return unique
    }

    render() {
        let data = this.props.data
        let spacer = { marginTop: '50px'}

        return(<div style={spacer}>
                  <GiBlackHoleBolas size={200} className="spinning-bh" />
                  <h2 style={{margin: '20px 0'}}>All Submisisons</h2>
                  <ul>
                      { this.uniquePieces(data).reverse().map( (entry, i) => {
                          return (<li key={i}>
                                    <span className="accepted">
                                        { entry.accepted ? <span><FaCheckCircle className="green-checkmark"/></span>
                                                         : <span><FaRegCircle /></span> }
                                    </span>
                                    <span className="list-title" onClick={ () => { this.props.toggleSimilar(entry.title) }}>{entry.title}</span>
                                    <span className="submission-count">{entry.count}</span>
                                  </li>)
                      })}
                  </ul>
                </div>)
    }
}