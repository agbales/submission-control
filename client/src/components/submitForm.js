import React from 'react';
import submittableExport from '../images/submittable-export.png'
import { FaCloudDownloadAlt, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'

export default class SubmitForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let paragraphStyle = { textAlign: 'center', maxWidth: '280px', height: '60px', lineHeight: '60px', paddingBottom: '30px', margin: '0 auto' }
        let imgStyle = { maxWidth: '100%' }
        let uploadBox = {  marginBottom: '10px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }
        let downloadIconStyle = { color: '#FC5B30' }
        let uplaodIconStyle = { color: '#00AF79' }
        let errAlert = { size: '1rem', color: '#eb4d4b'}
        return(<div className="container">
                <div className="row">
                    <div className="col">
                        <FaCloudDownloadAlt style={downloadIconStyle} size={70}/> 
                        <p style={paragraphStyle}>Download your submissions data from Submittable.</p>
                        <img src={submittableExport} 
                            style={imgStyle} />
                    </div>
                    <div className="col">
                        <FaPlaneDeparture style={uplaodIconStyle} size={70} />
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
                                            backgroundColor: '#00AF79', 
                                            color: '#f5f5f5', 
                                            border: 'none'}}>Upload</button>
                        </form>
                        { this.props.error && 
                            <p style={errAlert}>{this.props.error}</p>
                        }
                        </div>
                        <div style={uploadBox}>
                            <p>Don't have data, but want a peek?</p>
                            <button className="btn" 
                                    style={{marginTop: '20px', 
                                            border: 'none',
                                            backgroundColor: '#FFC10E'}}
                                    onClick={this.props.getTestData}>Test Flight</button>
                        </div>
                    </div>
                </div>   
            </div>)
    }
}