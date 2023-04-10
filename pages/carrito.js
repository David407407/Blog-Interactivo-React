import { useState, useEffect } from "react"
import Image from "next/image"
import Swal from "sweetalert2"
import Layout from "@/components/layout"
import { generarId } from "@/utils/helpers"

function Carrito({carrito}) {
    const { caracteristicas } = carrito
    const [espera, setEspera] = useState(false)
    useEffect( () => {
        setEspera(true)
    }, [])
  return (
    <Layout
        title={carrito?.titulo ? `Comprar ${carrito.titulo}` : 'Carrito'}
    >
    { Object.values(carrito).length > 0 ?
        <div className="text-white contenedor">
            <h1 className="font-bold titulo text-5xl text-center mb-10">Carrito</h1>
            <div className="grid grid-cols-2 pb-20">
                <Image 
                    src={carrito.imagen} 
                    alt={`Imagen ${carrito.titulo}`} 
                    width={1000} height={1000} 
                    className="w-96 m-auto" 
                />

                <div>
                    <h2 className="font-bold titulo text-3xl ml-4">{carrito.titulo}</h2>   
                    <h3 className="text-xl font-semibold fecha mt-4">Características:</h3>
                    { espera ? (
                        <p className="fecha text-lg">{caracteristicas.split('\n').map( parrafo => (
                            <p key={generarId()}>{parrafo}</p>
                        ))}</p> )
                        : null
                    }
                    <p className="text-2xl mt-4">El Precio es de: <span className="text-yellow-500 font-bold titulo text-4xl">${carrito.precio.toLocaleString('mx')}</span></p>
                    <div className="flex justify-end">
                        <button 
                            className="text-2xl heading uppercase font-bold bg-slate-950 p-3 rounded-lg transition-all duration-500 hover:bg-amber-600"
                            onClick={() => 
                                Swal.fire(
                                    'Vehículo Comprado!',
                                    'Nuestros Vendedores Se Comunicaran Con Usted',
                                    'success'
                                  )
                            }
                        >Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        
     :
     <div className="mt-64 mb-64 p-3">
        <h1 className="text-white text-6xl font-bold titulo text-center">
            El Carrito Esta Vacío
        </h1>
     </div>
    }
    </Layout>
  )
}

export default Carrito