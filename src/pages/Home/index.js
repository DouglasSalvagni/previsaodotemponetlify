import React, { Component } from 'react';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api: '',
            suporte: {
                dataAtual: new Date(),
                dataApi: '',
                diasSemana: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                tempoInfo: {
                    'Thunderstorm':['Thunderstorm','11d','fas fa-bolt'],
                    'Drizzle': ['Drizzle','09d','fas fa-cloud-rain'],
                    'Rain':['Rain','10d','fas fa-cloud-showers-heavy'],
                    'Snow':['Snow','13d','far fa-snowflake'],
                    'Mist':['Mist','50d','fas fa-smog'],
                    'Smoke':['Smoke','50d','fas fa-smog'],
                    'Haze':['Haze', '50d','fas fa-smog'],
                    'Dust':['Dust','50d','fas fa-smog'],
                    'Fog':['Fog','50d','fas fa-smog'],
                    'Sand':['Sand','50d','fas fa-smog'],
                    'Ash':['Ash','50d','fas fa-smog'],
                    'Squall':['Squall','50d','fas fa-smog'],
                    'Tornado':['Tornado','50d','fas fa-wind'],
                    'Clear':['Clear','01d','fas fa-sun'],
                    'Clouds':['Clouds','02d','fas fa-cloud']
                },
                horaAHora: ''
            }
        };

        this.formatTempo = this.formatTempo.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => ({
            suporte: {
                ...prevState.suporte,
                dataApi: nextProps.api.dataApi
            }
        }))
    }


    formatTempo(num) {
        if (num < 10) {
            return '0' + num
        } else {
            return num
        }
    }



    render() {
        return (
            <div className="container p-5">
                {this.props.api.cod === '200' &&
                    <div>
                        <div className="mainWeatherCard p-5">
                            <div className="row">
                                <div className="col-md-7">
                                    <h1><span>{this.props.api.city.name}</span>, {this.props.api.city.country}</h1>
                                    <h3>{this.state.suporte.diasSemana[this.state.suporte.dataApi.getDay()]}</h3>
                                    <h4>{this.state.suporte.tempoInfo[this.props.api.list[0].weather[0].main][0]} <i className={this.state.suporte.tempoInfo[this.props.api.list[0].weather[0].main][2]}></i></h4>
                                    <div className="temp">{`${parseInt(this.props.api.list[0].main.temp)}°`}</div>
                                </div>
                                <div className="col-md-5">
                                    <h1>{`Minimum: ${parseInt(this.props.api.list[0].main.temp_min)}°`}</h1>
                                    <h1>{`Maximum: ${parseInt(this.props.api.list[0].main.temp_max)}°`}</h1>
                                    <div className="icon"><i className={this.state.suporte.tempoInfo[this.props.api.list[0].weather[0].main][2]}></i></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mainWeatherList mt-4'>
                                <h2>Próximas Horas</h2>
                                <p>Confira o tempo para às próximas horas.</p>
                                <div className="table-responsive">
                                    <table className="table table-dark table-striped "> 
                                        <thead className="">
                                            <tr>
                                                <th>Dia</th>
                                                <th>Hora</th>
                                                <th>Clima</th>
                                                <th>Mínima</th>
                                                <th>Máxima</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {this.props.api.list.map((lista) => {
                                            let time = new Date(lista.dt_txt)
                                            return (
                                                <tr key={lista.dt}>
                                                    <td>
                                                        <div className='row'>
                                                            <div className='col-md-12'>
                                                                {this.state.suporte.diasSemana[time.getDay()]}
                                                            </div>
                                                            <div className='col-md-12 smallf'>
                                                                {this.formatTempo(time.getDate())}/{this.formatTempo(time.getMonth() + 1)}/{this.formatTempo(time.getFullYear())}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{this.formatTempo(time.getHours())}:{this.formatTempo(time.getMinutes())}</td>
                                                    <td>{this.state.suporte.tempoInfo[lista.weather[0].main][0]}  <i className={this.state.suporte.tempoInfo[lista.weather[0].main][2]}></i></td>
                                                    <td>{`${parseInt(lista.main.temp_min)}°`}</td>
                                                    <td>{`${parseInt(lista.main.temp_max)}°`}</td>
                                                </tr>
                                                );
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {this.props.api === 'erro' &&
                    <div className='row'>
                        <div className='col-md-8'><h1>Remember that both fields need to be completed. <div className='lead mt-4 mb-4'>An example of latitude and longitude would be <kbd> "-30.0324999"</kbd> and  <kbd>"-51.2303767"</kbd>. </div> Have a fun! </h1></div>
                        <div className='col-md-4'><i style={{fontSize: '16rem'}} className="far fa-smile-wink"></i></div>
                    </div>
                }

                {this.props.api === '400' &&
                    <div className='row'>
                        <div className='col-md-8'><h1>Invalid value. Please fill in the fields area with valid values. <div className='lead mt-4 mb-4'>An example of latitude and longitude would be <kbd> "-30.0324999"</kbd> and  <kbd>"-51.2303767"</kbd>. </div></h1></div>
                        <div className='col-md-4'><i style={{fontSize: '12rem'}} className="fas fa-bug"></i></div>
                    </div>
                }

                {this.props.api === '429' &&
                    <div className='row'>
                        <div className='col-md-8'><h1>Exceeded the access limit.</h1></div>
                        <div className='col-md-4'><i style={{fontSize: '16rem'}} className="fas fa-sad-tea"></i></div>
                    </div>
                }

            </div>
        );
    }
}

export default Home;