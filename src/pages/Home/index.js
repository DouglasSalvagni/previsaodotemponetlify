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
                diasSemana: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
                tempoInfo: {
                    'Thunderstorm':['Trovoada','11d','fas fa-bolt'],
                    'Drizzle': ['Chuvisco','09d','fas fa-cloud-rain'],
                    'Rain':['Chuva','10d','fas fa-cloud-showers-heavy'],
                    'Snow':['Neve','13d','far fa-snowflake'],
                    'Mist':['Névoa','50d','fas fa-smog'],
                    'Smoke':['Fumaça','50d','fas fa-smog'],
                    'Haze':['Neblina', '50d','fas fa-smog'],
                    'Dust':['Poeira','50d','fas fa-smog'],
                    'Fog':['Névoa','50d','fas fa-smog'],
                    'Sand':['Areia','50d','fas fa-smog'],
                    'Ash':['Cinzas','50d','fas fa-smog'],
                    'Squall':['Squall','50d','fas fa-smog'],
                    'Tornado':['Tornado0','50d','fas fa-wind'],
                    'Clear':['Limpo','01d','fas fa-sun'],
                    'Clouds':['Nuvens','02d','fas fa-cloud']
                },
                horaAHora: '',
                paramUrl: '',
                url: 'http://api.openweathermap.org/data/2.5/forecast?APPID=7e06bd8c11c32dfc21196675a15cd05b&units=metric&',
            }
        };

        this.formatTempo = this.formatTempo.bind(this)
    }

    componentDidMount() {
        let state = this.state;
        let { id } = this.props.match.params;
        state.suporte.paramUrl = id;
        this.setState(state);

        fetch((this.state.suporte.url + this.state.suporte.paramUrl))
            .then((r) => r.json())
            .then((json) => {
                let state = this.state;
                state.api = json;
                if (state.api.cod === '200') {
                    state.suporte.dataApi = new Date(state.api.list[0].dt_txt);
                    if (state.api.city.name) {
                        this.setState(state);
                    } else {
                        state.api.city.name = 'Local não nominado';
                        this.setState(state);
                    }
                } else if (state.api.cod === '400') {
                    this.setState(state);
                }
            })

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
                {this.state.api.cod === '200' &&
                    <div>
                        <div className="mainWeatherCard p-5">
                            <div className="row">
                                <div className="col-md-7">
                                    <h1><span>{this.state.api.city.name}</span>, {this.state.api.city.country}</h1>
                                    <h3>{this.state.suporte.diasSemana[this.state.suporte.dataApi.getDay()]}</h3>
                                    <h4>{this.state.suporte.tempoInfo[this.state.api.list[0].weather[0].main][0]} <i className={this.state.suporte.tempoInfo[this.state.api.list[0].weather[0].main][2]}></i></h4>
                                    <div className="temp">{`${parseInt(this.state.api.list[0].main.temp)}°`}</div>
                                </div>
                                <div className="col-md-5">
                                    <h1>{`Mínime de ${parseInt(this.state.api.list[0].main.temp_min)}°`}</h1>
                                    <h1>{`Máxima de ${parseInt(this.state.api.list[0].main.temp_max)}°`}</h1>
                                    <div className="icon"><i className={this.state.suporte.tempoInfo[this.state.api.list[0].weather[0].main][2]}></i></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mainWeatherList mt-4'>
                                <h2>Próximas Horas</h2>
                                <p>Confira o tempo para às próximas horas.</p>
                                <table className="table table-dark table-striped"> 
                                    <thead>
                                        <tr>
                                            <th>Dia</th>
                                            <th>Hora</th>
                                            <th>Clima</th>
                                            <th>Mínima</th>
                                            <th>Máxima</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.api.list.map((lista) => {
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
                }

                {this.state.api.cod === '400' &&
                    <div className='row'>
                        <div className='col-md-8'><h1>O valor inserido não é válido.</h1></div>
                        <div className='col-md-4'><i style={{fontSize: '10rem'}} className="fas fa-bug"></i></div>
                    </div>
                }

                {this.state.api.cod === '429' &&
                    <div className='row'>
                        <div className='col-md-8'><h1>Excedido o limite de acesso.</h1></div>
                        <div className='col-md-4'><i style={{fontSize: '16rem'}} className="fas fa-sad-tea"></i></div>
                    </div>
                }

            </div>
        );
    }
}

export default Home;