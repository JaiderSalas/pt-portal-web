import React, {Component } from 'react'
import '../styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import usuarios from '../db/db.json'

export default class Login extends Component {
  
  state={
    form:{
      usuario:'',
      contraseña:''
    }
  }

  handleChange = async e =>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    });
  }

  iniciarSesion = async() =>  {
    usuarios.usuarios.map((usuario)=>{
      if(usuario.usuario === this.state.form.usuario && usuario.contraseña === this.state.form.contraseña){
        alert("Sesion Iniciada")
        window.location.href="/pt-portal-web/main"
      }
      else{
          alert("Usuario o contraseña Incorrectas")
        }
    })
  }
render() {
  return (
    <div className='containerPrincipal'>
    <div className='containerSecundario'>
      <div className='form-group'>
        <label>Usuario: </label>
        <br />
        <input type="text" className='form-control' name='usuario' onChange={this.handleChange}/>
        <br />
        <label>Contraseña: </label>
        <input type="password" className='form-control' name='contraseña' onChange={this.handleChange}/>
        <br />
        <button className='btn btn-primary' onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
      </div>
    </div>
  </div>
  );
}
    }