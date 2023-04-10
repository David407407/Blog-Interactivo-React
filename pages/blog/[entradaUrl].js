import Layout from "@/components/layout"
import ImagenPersonalizada from "@/components/imagenPersonalizada"
import { formatearFecha } from "@/utils/helpers"

function Entrada({post}) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes

  return (
    <Layout
      title={titulo}
      description={`Artículo ${titulo}, CarWallet`}
    >
      <div className="contenedor ">
        <div className="p-3 grid grid-cols-2 text-white items-center mb-28 mt-28 ">
          <ImagenPersonalizada 
            ruta={imagen.data.attributes.url} 
          />

          <div className=''>
            <h1 className="text-center text-5xl text-amber-500 font-bold titulo borde-bajo mb-5 w-full m-auto">{titulo}</h1>
            <h3 className="heading font-bold text-3xl">Contenido:</h3>
            <p className="fecha text-lg mb-3">{contenido}</p>

            <p className="text-xl fecha font-semibold">Publicado el: {formatearFecha(publishedAt)}</p>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}car-blogs`)
  const { data } = await respuesta.json()
  const paths = data.map( post => ({
    params: {
      entradaUrl: post.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {entradaUrl}}) {
  const respuesta = await fetch(`${process.env.API_URL}car-blogs?filters[url]=${entradaUrl}&populate=imagen`)
  const { data: post } = await respuesta.json()

  return {
    props: {
      post
    }
  }
}

export default Entrada