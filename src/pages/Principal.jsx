import EstadoTiempo from "../components/EstadoTiempo";
import ListaNoticias from "../components/ListaNoticias";
import '../styles/estilos.css'
import Reportes from "./Reportes";
function Principal() {
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

export default Principal;