import React from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import geolib from 'geolib'

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedFile: null,
            file: null
        } 
        // this.handleChange = this.handleChange.bind(this)
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log(position)
                console.log(position.coords.latitude)
                let my_position = {'latitude': position.coords.latitude, 'longitude': position.coords.longitude}
                console.log('You are ' + geolib.getDistance(my_position, {
                    latitude: 6.518940,
                    longitude: 3.391380
                }) + ' meters away from Unilag');
            },
            function() {
                alert('Position could not be determined.')
            },
            {
                enableHighAccuracy: true
            }
        );
    }
    // handleChange(event) {
    //     this.setState({
    //       file: URL.createObjectURL(event.target.files[0])
    //     })
    // }

    fileChangedHandler = (event) => {
        const file = event.target.files[0]
        this.setState({selectedFile: file})
        console.log(this.state.selectedFile)
        console.log(file)
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
            console.log(res);
            console.log(res.data);
            let d = (res.data.replace(/'/g, '"'))
            console.log(d)
            console.log(d = JSON.parse(d))
            console.log(d.pant)

          })
    }
    renderSwitch () {
        switch (this.props.page) {
            case 'pricing':
            return (
                <form>
                    {this.state.selectedFile &&
                        <img src={URL.createObjectURL(this.state.selectedFile)} alt="user file"/>
                    }
                    <input type="file" onChange={this.fileChangedHandler}/>
                    <button onClick={this.uploadHandler}>Upload!</button>
                </form>
            );
            default:
            return (
                <div>
                    <h1>Laund-It: Wash it chaper and get it to you faster.</h1>
                    <Link to="/pricing" className="btnOutline">Pricing</Link>
                </div>
            );

        }
    }
    render ()  {
        return (
            <header>
                <nav>  
                    <Link to="/">Laund It</Link>
                    {/* <Link to="/sign-in">Sign in</Link> 
                    <Link to="/sign-up">Sign up</Link>  */}
                    <Link to="/pricing">Pricing</Link> 
                </nav>
                <div>
                    { this.renderSwitch() }
                </div>
            </header> 
        )
    }
};

export default Header;
