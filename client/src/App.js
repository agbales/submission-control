import React, { Component } from 'react'
import './App.css'
import logo from './images/submission-control-stars-color.png'
import Overview from './components/overview'
import SubmitForm from './components/submitForm'
import InspectSimilar from './components/inspectSimilar'
import UniquePieces from './components/uniquePieces'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      data: [],
      inspectingSimilar: false,
      similar: [],
      stats: {}
    }
    this.handleUpload = this.handleUpload.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.toggleSimilar = this.toggleSimilar.bind(this)
  }

  componentDidMount() {
  }

  callBackendAPI = async (route) => {
    const response = await fetch(route)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body
  }

  getSimilar(title) {
    let similar = this.state.data.filter( submission => {
      return submission.Title === title
    })
    this.setState({ similar: similar })
  }

  handleFile(e) {
    let file = e.target.files[0]
    this.setState({ file: file })
  }

  handleUpload(e) {
    e.preventDefault();

    const data = new FormData()
    const file = this.state.file
    data.append('file', file)
    data.set('name', 'submittableCSV')

    axios({
      url: './upload',
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
      data: data,
      onUploadProgress: progressEvent => {
        console.log('upload progress:' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
    .then(res => {
      let data = res.data;
      this.setState({ data: data.csv, stats: data.stats })
    })
    .catch(error => {
      console.log(error)
    })
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
    
    return (
      <div className="App">
        <header className="App-header"> 
          <div className="nav">
            <a href="/"><img src={logo} className="logo" alt="Logo" /></a>
          </div>
          <div id="main">
            { this.state.data.length === 0 
              ? <SubmitForm handleFile = {this.handleFile} 
                            handleUpload = {this.handleUpload}
                />
              : (<div>
                  <Overview stats={this.state.stats} 
                            acceptances={this.state.stats.acceptances}
                            inspectingSimilar={this.state.inspectingSimilar} 
                            toggleSimilar={this.state.toggleSimilar} 
                  />
                  { !this.state.inspectingSimilar 
                      ? <UniquePieces data={this.state.data}
                                      toggleSimilar={this.toggleSimilar}                                                
                        />
                      : <InspectSimilar toggleSimilar={this.toggleSimilar}
                                        similar={this.state.similar}
                        />
                  }
                </div>)
            }
          </div>
        </header>
      </div>
    )
  }
}

export default App
