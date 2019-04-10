import React from 'react';
import submittableExport from '../images/submittable-export.png'

export default class PushcartPrizeRankings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showExample: true
        }
        this.toggleExample = this.toggleExample.bind(this)
    }

    toggleExample() {
        this.setState(prevState => ({
            showExample: !prevState.showExample
        }))
    }

    render() {
        let paragraphStyle = { textAlign: 'center', maxWidth: '280px', height: '60px', lineHeight: '60px', paddingBottom: '30px', margin: '0 auto' }
        let imgStyle = { maxWidth: '100%' }
        let uploadBox = {  marginBottom: '10px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }

        return(<div className="container">
                <div class="row">
                    <div class="col">
                        <h1 className="numbers">1</h1> 
                        <p style={paragraphStyle}>Download your submissions data from Submittable.</p>
                        <img src={submittableExport} 
                            style={imgStyle} />
                    </div>
                    <div class="col">
                        <h1 className="numbers">2</h1> 
                        <p style={paragraphStyle}>Upload & enjoy!</p>
                        <div style={uploadBox}>

                        <form onSubmit={this.props.handleUpload} sytle={{ marginTop: '40px' }}>
                            <div className="form-group" style={{display: 'inline-block'}}>
                            <input className="form-control" 
                                    onChange={this.props.handleFile}
                                    ref={(ref) => { this.uploadInput = ref; }} 
                                    type="file"
                                    style={{fontSize: '1rem', border: 'none'}} />
                            </div>
                            <button className="btn btn-success" 
                                    type="submit"
                                    style={{marginTop: '20px', 
                                            backgroundColor: 'rgb(252, 91, 48)', 
                                            color: '#f5f5f5', 
                                            border: 'none'}}>Upload</button>
                        </form>
                        </div>
                        <div style={uploadBox}>
                            <p>Don't have data, but want a peek?</p>
                            <button className="btn btn-success" 
                                    style={{marginTop: '20px', 
                                            border: 'none'}}>Test Flight</button>
                        </div>
                    </div>
                </div>   
            </div>)
    }
}