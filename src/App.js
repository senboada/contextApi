import React, { Component } from 'react';
import Equipos from './componentes/Equipos';
import LaLiga from './componentes/LaLiga';
class App extends Component {
  
  

  render() {
    return (
      <div className="container">
        <LaLiga>
          <Equipos />
        </LaLiga>
      </div>
    );
  }
}

export default App;