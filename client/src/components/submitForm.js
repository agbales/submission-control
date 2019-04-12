import React from 'react';
import submittableExport from '../images/submittable-export.png'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { GiSpaceShuttle, GiUrsaMajor } from 'react-icons/gi'
import { IoMdStats, IoMdCheckmarkCircle, IoMdFiling } from 'react-icons/io'
import screenshot from '../images/Submission-Control-Screenshot.png'
import Footer from './footer'

export default class SubmitForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let paragraphStyle = { textAlign: 'center', maxWidth: '500px', height: '120px', paddingTop: '30px',paddingBottom: '30px', margin: '0 auto' }
        let imgStyle = { maxWidth: '100%' }
        let uploadBox = { textAlign: 'center', margin: '15px', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', backgroundColor: '#fff' }
        let downloadIconStyle = { color: '#FC5B30' }
        let uplaodIconStyle = { color: '#00AF79' }
        let errAlert = { size: '1rem', color: '#eb4d4b' }
        let center = { width: '100%', position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }
        let testFlightButton = { marginTop: '20px', border: 'none', backgroundColor: '#FFC10E' }
        let uploadButton = { marginTop: '20px', backgroundColor: '#00AF79', color: '#f5f5f5', border: 'none' }
        let orangeRow = { margin: '60px 0', backgroundColor: 'rgb(252, 91, 48)', padding: '40px 0px', borderRadius: '10px' }
        let listText = { textAlign: 'center', color: '#fff' }

        return(<div className="container">  
                <div className="row" style={{backgroundColor: '#f9f9f9', borderRadius: '10px'}}>
                    <div className="col" style={uploadBox}>
                        <div>
                        <form onSubmit={this.props.handleUpload}>
                            <GiSpaceShuttle style={uplaodIconStyle} size={250} />
                            <p style={paragraphStyle}>Upload Your Data & Explore!<span style={{color: '#FC5B30'}}>*</span></p>
                            <div className="form-group" style={{display: 'inline-block'}}>
                            <input className="form-control" 
                                    onChange={this.props.handleFile}
                                    ref={(ref) => { this.uploadInput = ref; }} 
                                    type="file"
                                    style={{fontSize: '1rem', border: 'none'}} />
                            </div>
                            <button className="btn btn-success" 
                                    type="submit"
                                    style={uploadButton}>Upload</button>
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
                                    style={testFlightButton}
                                    onClick={this.props.getTestData}>Takeoff</button>
                        </div>
                    </div>
                </div>
                <div className="row" style={orangeRow}>
                    <div className="col">
                        <img src={screenshot} className="img-rounded img-responsive" style={{width: '100%'}} /> 
                    </div>
                    <div className="col" style={{backgroundColor: '#FC5B30', borderRadius: '10px'}}>
                        <ul style={center}>
                            <li style={listText} className="overview-box"><h2>Submission Stats  <IoMdStats /></h2></li>
                            <li style={listText} className="overview-box"><h2>Flight Logs  <IoMdFiling /></h2></li>
                            <li style={listText} className="overview-box"><h2>Annual Rankings  <IoMdCheckmarkCircle /></h2></li>
                        </ul>
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#f9f9f9', borderRadius: '10px', marginBottom: '40px'}}>
                    <div className="col">
                        <h1 style={{textAlign: 'center', margin: '40px 0'}}>Finding & Using Your Data</h1>
                        <FaCloudDownloadAlt style={downloadIconStyle} size={125}/> 
                        <ol style={{maxWidth: '500px', margin: '0 auto', marginTop: '20px', backgroudColor: '#fff', borderRadius: '10px', paddingInlineStart: '0px'}}>
                            <li style={{textAlign: 'center'}}>1. Log into <a href="www.submittable.com" target="_blank">Submittable</a></li>
                            <li style={{textAlign: 'center'}}>2. Click the export button, as seen below</li>
                        </ol>
                        <img src={submittableExport} 
                            style={imgStyle} />
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#FFC10E', borderRadius: '10px'}}>
                    <div className="col">
                        {/* <FaCloudDownloadAlt style={downloadIconStyle} size={125}/>  */}
                        <p style={{ color: '#1a1a1a', maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'justified'}}>
                            <span style={{color: '#FC5B30'}}>*</span> We don't store or use your data. We simply clean it up and send it back to you for a one-time display. Simple as that.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>)
    }
}