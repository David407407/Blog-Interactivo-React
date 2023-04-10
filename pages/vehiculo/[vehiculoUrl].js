import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import Layout from "@/components/layout"
import ImagenPersonalizada from "@/components/imagenPersonalizada"
import { formatearFecha, generarId } from "@/utils/helpers"

function Vehiculo({vehiculo, añadirCarro}) {
  const [espera, setEspera] = useState(false)
  const { titulo, caracteristicas, imagen, precio, updatedAt } = vehiculo[0].attributes

  useEffect( () => {
    setEspera(true)
  }, [])

  return (
    <Layout
      title={titulo}
      description={`Venta de vehículo ${titulo}, CarWallet`}
    >
      <div className="contenedor ">
        <div className="p-3 grid grid-cols-2 text-white items-center mb-28 mt-28 ">
          <ImagenPersonalizada 
            ruta={imagen.data.attributes.url} 
          />

          <div className=''>
            <h1 className="text-center text-5xl text-amber-500 font-bold titulo borde-bajo mb-5 w-1/2 m-auto">{titulo}</h1>
            <h3 className="heading font-bold text-3xl">Características:</h3>
            { espera ? (
              <p className="fecha text-lg">{caracteristicas.split('\n').map( parrafo => (
                <p key={generarId()}>{parrafo}</p>
              ))}</p> )
              :
              null
            }
            <p className="text-2xl mt-1">El Precio es de: <span className="text-yellow-500 font-bold titulo text-4xl">${precio.toLocaleString('mx')}</span></p>
            <p className="text-xl fecha font-semibold">Publicado el: {formatearFecha(updatedAt)}</p>

            <div className="flex justify-end">
              <button 
                className="text-2xl heading uppercase font-bold bg-slate-950 p-3 rounded-lg transition-all duration-500 hover:bg-amber-600"
                onClick={() => añadirCarro({
                  id: vehiculo[0].id,
                  titulo,
                  caracteristicas,
                  imagen: imagen.data.attributes.url,
                  precio
                })}
              >Comprar</button>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}carros`)
  const { data } = await respuesta.json()
  const paths = data.map( carro => ({
    params: {
      vehiculoUrl: carro.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {vehiculoUrl}}) {
  const respuesta = await fetch(`${process.env.API_URL}carros?filters[url]=${vehiculoUrl}&populate=imagen`)
  const { data: vehiculo } = await respuesta.json()

  return {
    props: {
      vehiculo
    }
  }
}

export default Vehiculo