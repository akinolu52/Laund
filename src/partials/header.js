import React from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import axios from 'axios'
import geolib from 'geolib'

class Header extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            file: null,
            address: null
        } 
        this.getLocation = this.getLocation.bind(this);
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log('pos')
                // this.setState({lat: position.coords.latitude})
                let lat = position.coords.latitude
                let lng = position.coords.longitude
                let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyB5HRuo5KNhe4mDzldTSsQeZssll7LWfxE`
                // console.log(url)
                // await axios.get(url)
                axios.get(url).then( (response) => {
                    console.log(response)
                    this.setState({address : response.data.results[0].formatted_address})
                }).catch(e =>{
                    console.log(e);
                })
                // console.log(this.state.address)
                // .then( (response) => {
                //     var address = response.data.results[0].formatted_address
                //     console.log(address)
                //     this.setState({ address: address })
                //     console.log(address)
                // })
                // .catch((e) => 
                // {
                //   console.error(e);
                // });
                // let unilagCoordinate = { latitude: 6.518940, longitude: 3.391380 } // node @ akoka
                // let icmCoordinate = { latitude: 34.175820, longitude: -118.301880 } // node @ ikeja
                // let cchubCoordinate = { latitude: 36.797290, longitude: 65.806690 } // node @ Yaba
                // let my_position = {'latitude': lat, 'longitude': lng}
                // let distanceFromUnilag = geolib.getDistance(my_position, unilagCoordinate)
                // let distanceFromIcm = geolib.getDistance(my_position, icmCoordinate)
                // let distanceFromVi = geolib.getDistance(my_position, cchubCoordinate)
                // console.log('You are ' + distanceFromUnilag + ' meters away from Unilag');
                // console.log('You are ' + distanceFromIcm + ' meters away from ICM');
                // console.log('You are ' + distanceFromVi + ' meters away from CChub');
            },
            function() {
                console.error('Position could not be determined.')
            },
            {
                enableHighAccuracy: true
            }
        );
    }

    fileChangedHandler = (event) => {
        const file = event.target.files[0]
        this.setState({selectedFile: file})
    }
    uploadHandler = (event) => { 
        event.preventDefault();
        const formData = new FormData()
        formData.append('image', this.state.selectedFile)

        API.post('analyse', formData, {
            onUploadProgress: progressEvent => {
              console.log(progressEvent.loaded / progressEvent.total)
            }
        }).then(res => {
            let d =  JSON.parse(res.data.replace(/'/g, '"'))
            console.log(d[0])
            console.log(d.pant)
          })
    }
    renderSwitch () {
        switch (this.props.page) {
            case 'pricing':
            return (
                <form className="getStarted">
                    <div className="div-1">
                        <input id="input-1" data-id="1" type="text" placeholder="Yaba, Lagos" required autoFocus="true" />
                        <label htmlFor="input-1">
                            <span className="label-text">
                                Your Location
                                <button onClick={this.getLocation} style={{ display: 'inline-block', color: '#202427', background: 'transparent', border: '2px solid #FFF', borderRadius: '6px', width: '50px', height: '20px', lineHeight: '20px', textAlign: 'center', fontSize: '0.8em' }}>Click</button>
                            </span>
                            <span className="nav-dot"></span>
                        </label>
                    </div>
                    <div className="div-2">
                        <input data-id="2" id="input-2" type="text" placeholder="john" required />
                        <label htmlFor="input-2">
                            <span className="label-text">Username</span>
                            <span className="nav-dot"></span>
                        </label>
                    </div>
                    <div className="div-3">
                        <input data-id="3" id="input-3" type="email" placeholder="email@address.com" required />
                        <label htmlFor="input-3">
                            <span className="label-text">Email</span>
                            <span className="nav-dot"></span>
                        </label>
                    </div>
                    <div className="div-4">
                        <input id="input-4" data-id="4" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                        <label htmlFor="input-4">
                            <span className="label-text">Password</span>
                            <span className="nav-dot"></span>
                        </label>
                    </div>
                    <div className="div-5">
                        <input data-id="5" id="input-5" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                        <label htmlFor="input-5">
                            <span className="label-text">Confirm Password</span>
                            <span className="nav-dot"></span>
                        </label> 
                    </div>
                    <p className="tip">Press Enter</p>
                    <div className="signup-button">Sign Up</div>
                </form>

                // <form>
                //     {this.state.selectedFile &&
                //         <img src={URL.createObjectURL(this.state.selectedFile)} alt="user file" style={{ width: '81%' }}/>
                //     }
                //     <input type="file" onChange={this.fileChangedHandler}/>
                //     <button onClick={this.uploadHandler}>Upload!</button>
                // </form>
            );
            default:
            return (
                <div>
                    {/* Wash it chaper and get it to you faster */}
                    <h1>Laund-It: Analyse and classify your fashion material.</h1>
                    <Link to="/pricing" className="btnOutline">Get Started</Link>
                    <div className="dot-elastic"></div>
                </div>
            );

        }
    }
    render ()  {
        return (
            <header>
                <nav>  
                    <Link to="/" style={{ visibility: "hidden" }}>Laund It</Link>
                    <Link to="/sign-in">About</Link> 
                    <Link to="/sign-up">Terms and Conditions</Link> 
                    {/* <Link to="/pricing">Pricing</Link>  */}
                </nav>
                {/* <div> */}
                    { this.renderSwitch() }
                {/* </div> */}
            </header> 
        )
    }
};

export default Header;
