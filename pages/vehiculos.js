import { useEffect, useState } from "react"
import Layout from "@/components/layout"
import Vehiculo from "@/components/vehiculo"

function Vehiculos({vehiculos}) {
  const [espera, setEspera] = useState(false)
  useEffect( () => {
    setEspera(true)
  }, [])
  return (
    <Layout
      title="Vehículos"
      description="Venta de Vehículos, CarWallet"
    >
      <h2 className="text-amber-500 font-bold titulo text-4xl text-center mb-10">Nuestro Catálogo</h2>
      <div className="contenedor grid grid-cols-2 gap-8">
          { espera ?
            vehiculos.map( vehiculo => (
              <Vehiculo 
                key={vehiculo.id}
                vehiculo={vehiculo.attributes}
              />
            )) :
            null
          }
      </div>
        
        
    </Layout>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}carros?populate=imagen`
  const respuesta = await fetch(url)
  const { data: vehiculos } = await respuesta.json()

  return {
    props: {
      vehiculos
    }
  }
}

export default Vehiculos