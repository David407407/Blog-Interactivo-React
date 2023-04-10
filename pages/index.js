import { use, useEffect, useState } from "react"
import Layout from "@/components/layout"
import Vehiculo from "@/components/vehiculo"
import Post from "@/components/post"

export default function Home({vehiculos, entradas}) {
  const [espera, setEspera] = useState(false)
  useEffect( () => {
    setEspera(true)
  }, [])
  return (
    <Layout
      title="Inicio"
      description="Venta y cotización de autos, CarWallet"
    >
      <div className="grid gap-6 contenedor">
        <h2 className="text-amber-500 font-bold titulo text-4xl text-center">Nuestros Vehículos</h2>
        <div className="grid grid-cols-2 gap-5">
          { espera ?
            vehiculos.map( vehiculo => (
              <Vehiculo 
                key={vehiculo.id}
                vehiculo={vehiculo.attributes}
              />
            ))
            : null
          }
        </div>
        
        <h2 className="text-amber-500 font-bold titulo text-4xl text-center">Blog</h2>
        <div className="grid grid-cols-2 gap-5">
          {
            entradas.map( entrada => (
              <Post 
                key={entrada.id}
                post={entrada.attributes}
              />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [ resVehiculos, resBlog ] = await Promise.all([
    fetch(`${process.env.API_URL}carros?populate=imagen`),
    fetch(`${process.env.API_URL}car-blogs?populate=imagen`)
  ])
  const [ {data: vehiculos}, {data: entradas} ] = await Promise.all([
    resVehiculos.json(),
    resBlog.json()
  ])
  return {
    props: {
      vehiculos,
      entradas
    }
  }
}