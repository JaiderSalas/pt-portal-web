import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ItemNoticias from './ItemNoticias'
import '../styles/estilos.css'

const ListaNoticias = () => {
  const [Noticias,setNoticias] = useState([])
  useEffect(() => {
    const traerNoticias =  async () =>{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=co&apiKey=65fe23a366ac47cb86eb39d4a3617978&language=es')
      setNoticias(response.data.articles)
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
          autor={Noticia.author}
          descripcion={Noticia.description}
          url={Noticia.url}
          imagen={Noticia.urlToImage}
          />
        )
      })}
    </div>
  )
}

export default ListaNoticias