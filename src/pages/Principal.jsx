import React, {Component } from 'react'
import EstadoTiempo from "../components/EstadoTiempo";
import ListaNoticias from "../components/ListaNoticias";
import '../styles/estilos.css'
import Reportes from "./Reportes";

export default class Principal extends Component {
  render(){
    return (
      <div>
      <div>
        <div>
          <h1 className="title">Noticias</h1>
          <ListaNoticias />
        </div>
        <div className="estado">
        <EstadoTiempo />
        </div>
      </div>
      <Reportes/>
      </div>
    );
  }
 
}
