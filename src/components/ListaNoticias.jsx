import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ItemNoticias from './ItemNoticias'
import '../styles/estilos.css'

const ListaNoticias = () => {
  const [Noticias,setNoticias] = useState([])
  const date = new Date()
  useEffect(() => {
    const traerNoticias =  async () =>{
      const response = await axios.get('https://gnews.io/api/v4/top-headlines?token=7ac42caf49052220b085e8b3a4faffb6&lang=es&country=co&max=12')
      setNoticias(response.data.articles)
      var requests=JSON.parse(localStorage.getItem('requests') || "[]")
      var request = {
        FechaRequest:date,
        url:'https://gnews.io/api/v4/top-headlines?token=7ac42caf49052220b085e8b3a4faffb6&lang=es&country=co&max=12'
      }
      requests.push(request)
      localStorage.setItem('requests',JSON.stringify(requests))
    }
    traerNoticias()
  },[])
  return (
    <div className='news-grid'>
      {Noticias.map( (Noticia,i) => {
        return(
          <ItemNoticias
          key={i}
          item={Noticia}
          titulo={Noticia.title}
          autor={Noticia.source.name}
          descripcion={Noticia.description}
          url={Noticia.url}
          imagen={Noticia.image}
          />
        )
      })}
    </div>
  )
}

export default ListaNoticias