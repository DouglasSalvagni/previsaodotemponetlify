import React, { Component } from 'react';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import getWeatherData from '../../weather.service';
import Home from '../../pages/Home';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                lat: '',
                lon: ''
            },
            api:''
        }

        this.inserirLat = this.inserirLat.bind(this);
        this.inserirLon = this.inserirLon.bind(this);
        this.getData = this.getData.bind(this);
    }


    inserirLat(event) {
        let form = this.state.form;
        form.lat = event.target.value;
        this.setState({form});
    }

    inserirLon(event) {
        let form = this.state.form;
        form.lon = event.target.value;
        this.setState({form});
    }

    getData() {
        getWeatherData(this.state.form.lat, this.state.form.lon)
        .then((resp) => {
            let state = this.state;
            state.api = resp.data;
            state.api.dataApi = new Date(state.api.list[0].dt_txt);
            if (state.api.city.name) {
                this.setState(state);
            } else {
                state.api.city.name = 'Unnamed location';
                this.setState(state);
            }
        })
        .catch((err) => {
            let state = this.state;
            if (!this.state.form.lon || !this.state.form.lon) {
                state.api = 'erro';
                this.setState(state);
            } else if (err.response.status === 400) {
                state.api = '400';
                this.setState(state);
            } else if(err.response.status === 429) {
                state.api = '429';
                this.setState(state);
            } 
        })
    }

    render() {
        return (
            <div>
                <header className="container p-5">
                    <div className='row'>
                        <div className='col-6'>
                            <h1>Search</h1>
                        </div>
                        <div className='col-6'>
                            <i className="fas fa-cloud-sun float-right" style={{fontSize: '5rem'}}></i>
                        </div>
                    </div>
                    <p className="mt-3">Find the weather forecast according to the coordinates to be specified below:</p>
                    <form>

                        <div className="form-row">
                            <div className="col-md-5 mb-2">
                                <input type="text" className="form-control" placeholder="Enter latitude" id="latitude" value={this.state.form.lat} 
                                    onChange={this.inserirLat}/> 
                            </div>
                            <div className="col-md-5 mb-2">
                                <input type="text" className="form-control" placeholder="Enter longitude" id="longitude" value={this.state.form.lon} 
                                    onChange={this.inserirLon}/> 
                            </div>
                            <div className="col mb-2 ">
                                <button type='button' className='mb-2 btn btn-block font-weight-bold ' onClick={this.getData}>Search</button>
                            </div>
                        </div>

                    </form>
                </header>
                <Home api={this.state.api}/>
            </div>
        );
    }
}

export default Header;

/**/