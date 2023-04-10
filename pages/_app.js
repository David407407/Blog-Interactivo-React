import { useState } from 'react'
import Swal from 'sweetalert2'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [carrito, setCarrito] = useState({})
  
  const añadirCarro = carro => {
    if(Object.values(carrito).length === 0) {
      // Agregar al Carrito
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Carro Ha Sido Guardado!',
        showConfirmButton: false,
        timer: 1500
      })
      setCarrito(carro)
    }
    if(Object.values(carrito).length > 0) {
      Swal.fire({
        title: 'Quieres Comprar Otro Carro?',
        showDenyButton: true,
        text: 'Ya Existe un Carro en el Carrito',
        confirmButtonText: 'Estoy Seguro',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
          setCarrito(carro)
        }
      })
    }
    console.log(carrito)
  } 
  return <Component 
    {...pageProps} 
    carrito={carrito}
    setCarrito={setCarrito}
    añadirCarro={añadirCarro}
  />
}
