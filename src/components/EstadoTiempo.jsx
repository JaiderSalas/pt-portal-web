import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/estilos.css'

export default function EstadoTiempo() {
    const [Estado,setEstado] = useState([])
    useEffect(() => {
    const traerEstado =  async () =>{
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?id=3687925&appid=c48f4c6012bc643a5b01467c26b1a1d7&lang=es&&units=metric')
      setEstado(response.data.main)
      var requests=JSON.parse(localStorage.getItem('requests') || "[]")
      var request = {
        FechaRequest:date,
        url:'https://api.openweathermap.org/data/2.5/weather?id=3687925&appid=c48f4c6012bc643a5b01467c26b1a1d7&lang=es&&units=metric',
        params:{
          Estado
        }
      }
      requests.push(request)
      localStorage.setItem('requests',JSON.stringify(requests))
    }
    traerEstado()
    },[])
  return (
      <div className='container'>
            <h1>Cali</h1>
            <h1>Temperatura: {Estado.temp}°C</h1>
            <h1>Sensación Real: {Estado.feels_like}°C</h1>
            <h1>Humedad: {Estado.humidity}</h1>
      </div>
  )
}