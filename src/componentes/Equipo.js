import React, { Component } from 'react';
import { LaLigaContext } from './LaLiga';

class Equipo extends Component {
    render() {
        
        return (
            <LaLigaContext.Consumer>
                { (value) => {
                    return Object.keys(value.state).map(idEquipo => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-tems-center" key={idEquipo}>
                                <p className="m-0">
                                    {value.state[idEquipo].nombre}
                                
                                    <span className="ml-4 badge badge-danger">
                                        {value.state[idEquipo].titulos}
                                    </span>
                                </p>

                                <button  className="btn btn-success" type="button" onClick={ () => {
                                    value.esCampeon(idEquipo);
                                }} >
                                    Es campeon
                                </button>
                            </li>
                        )
                    })
                }}
            </LaLigaContext.Consumer>
        );
    }
}

export default Equipo;