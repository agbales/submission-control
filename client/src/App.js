import React, { Component } from 'react'
import './App.css'
import logo from './images/submission-control-stars-color.png'
import SubmitForm from './components/submitForm'
import axios from 'axios'
import MissionControl from './components/missionControl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      data: [],
      stats: {}
    }
    this.handleUpload = this.handleUpload.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.getTestData = this.getTestData.bind(this)
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

  getTestData() {
    axios({
      url: './testData',
      method: 'GET'
    })
    .then(res => {
      let data = res.data;
      this.setState({ data: data.csv, stats: data.stats })
    })
    .catch(error => {
      console.log(error)
    })
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
      this.setState({error: 'Upload a Submittable CSV only!'})
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-wrapper"> 
          <div className="nav">
            <a href="/"><img src={logo} className="logo" alt="Logo" style={{marginBottom: '40px'}} /></a>
          </div>
          <div id="main">
            { this.state.data.length === 0 
              ? <SubmitForm handleFile = {this.handleFile} 
                            handleUpload = {this.handleUpload}
                            getTestData = {this.getTestData}
                            error={this.state.error}
                />
              : (<MissionControl acceptances={this.state.stats.acceptances}
                                 data={this.state.data}
                                 stats={this.state.stats} />)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
