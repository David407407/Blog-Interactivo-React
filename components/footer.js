import Link from "next/link"

function Footer() {
  return (
    <div className='text-white p-12 bg-slate-950 mt-10'>
        <div className="contenedor flex justify-between items-center">
                <p className="font-bold text-2xl">Todos los Derechos Reservados©</p>

            <nav className="font-bold text-lg grid gap-2 grid-cols-4">
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'/'}>Inicio</Link>
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'/vehiculos'}>Vehículos</Link>
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'/blog'}>Blog</Link>
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'iniciar-sesion'}>Iniciar Sesión</Link>
            </nav>
        </div>
    </div>
  )
}

export default Footer