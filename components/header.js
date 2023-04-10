import Image from "next/image"
import Link from "next/link"

function Header() {

  return (
    <div className='text-white p-8 bg-slate-950 mb-10'>
        <div className="flex justify-between items-center">
            <Link href={'/'} className="flex items-center hover:bg-slate-900 transition-all duration-500 p-4 rounded-lg">
                <Image 
                    className="w-24 cursor-pointer mr-2" 
                    src={'/img/logo.png'} 
                    width={200} 
                    height={400} 
                    alt="CarWallet Logo" />
                <h2 className="text-3xl font-bold heading text-center">CarWallet</h2>
            </Link>

            <nav className="font-bold text-lg grid gap-2 grid-cols-5 items-center">
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'/'}>Inicio</Link>
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'/vehiculos'}>Vehículos</Link>
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'/blog'}>Blog</Link>
                <Link className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg" href={'iniciar-sesion'}>Iniciar Sesión</Link>

                <Link href={'/carrito'} className="text-center hover:bg-slate-900 transition-all duration-500 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className={"m-auto icon icon-tabler icon-tabler-shopping-cart"} width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                </Link>
                
            </nav>
        </div>
    </div>
  )
}

export default Header