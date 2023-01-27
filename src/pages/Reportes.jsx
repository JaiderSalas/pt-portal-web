import React,{useState,useEffect} from 'react'

function Reportes() {

  const [requests, setRequests] = useState([]);

useEffect(() => {
  const requests = JSON.parse(localStorage.getItem('requests'));
  if (requests) {
   setRequests(requests);
   console.log(requests)
  }
}, []);

  return (
    <div>
      {
        requests.map((request,i) => {
          return(
            <div key={i} item={request}>
            <p>Fecha de Peticion: {request.FechaRequest}</p>
            <p>URL: {request.url}</p>
            {/*<p>datos: {request.params}</p>*/}
            </div>
          )
        })
      }
    </div>
  )
}

export default Reportes