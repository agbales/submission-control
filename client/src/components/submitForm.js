import React from 'react';
import '../App.css';
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
        let paragraphStyle = { marginBottom: '20px', textAlign: 'left' }
        let imgStyle = { maxWidth: '90vmin', marginTop: '10px' }

        return(<div>
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
                    <p style={paragraphStyle}><span className="numbers">1</span> Download your submissions data from Submittable.</p>
                    <p style={paragraphStyle}><span className="numbers">2</span> Upload & enjoy!</p>
                    <img src={submittableExport} 
                         style={imgStyle} />
                </div>)
    }
}