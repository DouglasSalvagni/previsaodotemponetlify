import React, { Component } from 'react';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                lat: '',
                lon: ''
            }
        }

        this.inserirLat = this.inserirLat.bind(this);
        this.inserirLon = this.inserirLon.bind(this);
        this.verificar = this.verificar.bind(this)
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

    verificar(){
        if (this.state.form.lat === '' || this.state.lon === '') {
            return 'erro'
        } else {
            return `lat=${this.state.form.lat}&lon=${this.state.form.lon}`
        }
    }

    render() {
        return (
            <header className="container p-5">
                <div className='row'>
                    <div className='col-6'>
                        <h1>Pesquisa </h1>
                    </div>
                    <div className='col-6'>
                        <i className="fas fa-cloud-sun float-right" style={{fontSize: '5rem'}}></i>
                    </div>
                </div>
                <p>Encontre a previsão do tempo de acordo com as coordenadas a serem especificadas abaixo:  </p>
                <form>

                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Digite a latitude" id="latitude" value={this.state.form.lat} 
                                onChange={this.inserirLat}/> 
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Digite a longitude" id="longitude" value={this.state.form.lon} 
                                onChange={this.inserirLon}/> 
                        </div>
                        {/* <a className="btn btn-outline-primary center"  href={`/tempApi`}>Temp api</a> */}
                        {/* <a className="btn btn-outline-primary center"  href={this.verificar()}>Busca</a> */}
                        {/* <a className="btn btn-outline-primary center"  href={`lat=${this.state.form.lat}&lon=${this.state.form.lon}`}>Verificar</a> */}
                        <Link  to={`lat=${this.state.form.lat}&lon=${this.state.form.lon}`}>Verificar</Link>
                    </div>

                </form>
            </header>
        );
    }
}

export default Header;