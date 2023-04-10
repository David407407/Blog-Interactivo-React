import Image from "next/image"
import Link from "next/link"
import ImagenPersonalizada from "./imagenPersonalizada"
import { formatearFecha, generarId } from "@/utils/helpers"

function Vehiculo({vehiculo}) {
    const { titulo, caracteristicas, precio, url, imagen, updatedAt } = vehiculo
  return (
    <div className='text-white bg-gray-800 w-full rounded-lg pt-1'>
        <div className="grid grid-cols-2 items-center p-3">
          <ImagenPersonalizada 
            ruta={imagen.data.attributes.url} 
            pequeña={true}
          />
          <h2 className="text-amber-500 titulo font-bold text-2xl col-start-1 text-center mb-2">{titulo}</h2>

          <div className="text-white grid gap-2 w-11/12 col-start-2 row-start-1">
              <h3 className="text-xl font-bold heading">Más Información:</h3>
              <p className="line-clamp-2 fecha text-lg">{caracteristicas.split('\n').map( parrafo => (
                <p key={generarId()}>{parrafo}</p>
              ))}</p>
              <p className="text-lg font-bold text-yellow-500 heading">Precio: ${precio.toLocaleString('mx')}</p>
              <p className="text-lg font-semibold fecha">Publicado el: {formatearFecha(updatedAt)}</p>
              <Link 
                href={`/vehiculo/${url}`}
                className="bg-black text-white p-3 text-lg heading font-bold rounded-lg text-center hover:bg-slate-900 transition-all duration-500"
              >Ver Vehiculo</Link>
          </div>
        </div>
        
    </div>
  )
}

export default Vehiculo