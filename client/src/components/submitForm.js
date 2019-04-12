import React from 'react';
import submittableExport from '../images/submittable-export.png'
import { FaCloudDownloadAlt, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import { GiSpaceShuttle, GiUrsaMajor } from 'react-icons/gi'
import screenshot from '../images/Submission-Control-Screenshot.png'

export default class SubmitForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let paragraphStyle = { textAlign: 'center', maxWidth: '300px', height: '120px', paddingTop: '30px',paddingBottom: '30px', margin: '0 auto' }
        let imgStyle = { maxWidth: '100%' }
        let uploadBox = { textAlign: 'center', margin: '15px', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', backgroundColor: '#fff' }
        let downloadIconStyle = { color: '#FC5B30' }
        let uplaodIconStyle = { color: '#00AF79' }
        let errAlert = { size: '1rem', color: '#eb4d4b'}
        let center = {width: '100%', position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}
    
        return(<div className="container">  
                <div className="row" style={{backgroundColor: '#f9f9f9', borderRadius: '10px'}}>
                    <div className="col" style={uploadBox}>
                        <div>
                        <form onSubmit={this.props.handleUpload} sytle={{ marginTop: '40px' }}>
                            <GiSpaceShuttle style={uplaodIconStyle} size={250} />
                            <p style={paragraphStyle}>Upload your data & enjoy!</p>
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
                    </div>
                    <div className="column" style={{textAlign: 'center', width: '50%', margin: '10px', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', backgroundColor: '#fff'}}>
                        <div>
                            <GiUrsaMajor size={250} style={{color: '#FFC10E'}} />
                            <p style={paragraphStyle}>Do data? No Problem. Take a test flight.</p>
                            <button className="btn" 
                                    style={{marginTop: '20px', 
                                            border: 'none',
                                            backgroundColor: '#FFC10E'}}
                                    onClick={this.props.getTestData}>Takeoff</button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#fff', borderRadius: '10px'}}>
                    <div className="col">
                        <img src={screenshot} className="img-rounded img-responsive" style={{width: '100%'}} /> 
                    </div>
                    <div className="col">
                        <ul style={center}>
                            <li style={{textAlign: 'center', color: '#1a1a1a'}} className="overview-box">Submission Stats</li>
                            <li style={{textAlign: 'center', color: '#1a1a1a'}} className="overview-box">Flight Logs</li>
                            <li style={{textAlign: 'center', color: '#1a1a1a'}} className="overview-box">Annual Rankings</li>
                        </ul>
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#fff', borderRadius: '10px'}}>
                    <div className="col">
                        <FaCloudDownloadAlt style={downloadIconStyle} size={70}/> 
                        <p style={paragraphStyle}>How to Download Your Data</p>
                        <img src={submittableExport} 
                            style={imgStyle} />
                    </div>
                </div>
            </div>)
    }
}