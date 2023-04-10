import Link from "next/link";
import ImagenPersonalizada from "./imagenPersonalizada";
import { formatearFecha } from "@/utils/helpers";

function Post({post}) {
    const { titulo, contenido, publishedAt, url, imagen} = post
    
  return (
    <div className="text-white bg-gray-800 rounded-xl p-4">
        <h2 className="text-3xl text-center font-bold text-amber-500 titulo">{titulo}</h2>
        <div className="grid grid-cols-2 p-3 max-h-50">
            <ImagenPersonalizada ruta={imagen.data.attributes.url} pequeña={true} />

            <div className="grid gap-5">
                <p className="line-clamp-4">{contenido}</p>
                <p className="fecha font-semibold text-lg">Publicado el: {formatearFecha(publishedAt)}</p>
                <Link 
                    href={`/blog/${url}`} 
                    className="bg-black text-white p-3 text-lg heading font-bold rounded-lg text-center hover:bg-slate-900 transition-all duration-500"
                >Leer Entrada</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Post