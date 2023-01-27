import React from "react";
import '../styles/estilos.css'

const ItemNoticias = ({ titulo, autor, descripcion, url, imagen }) => {
  return (
    <a href={url} className="article">
      <div className="article-image">
        <img src={imagen} alt={titulo} />
      </div>
      <div className="article-content">
            <h2>{titulo}</h2>
        <p className="article-description">
            {descripcion}
        </p>
        <div className="article-details">
            <small>
              {autor ? <b>Autor: {autor}</b> : <b>Autores varios</b> }
              </small>
        </div>
      </div>
    </a>
  );
};

export default ItemNoticias;