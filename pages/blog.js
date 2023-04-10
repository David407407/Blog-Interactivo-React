import { useEffect, useState } from "react"
import Layout from "@/components/layout"
import Post from "@/components/post";

function Blog({posts}) {
  const [espera, setEspera] = useState(false)
  useEffect( () => {
    setEspera(true)
  }, [])
  return (
    <Layout
      title="Blog"
      description="Venta de Vehículos, CarWallet"
    >
      <h2 className="text-amber-500 font-bold titulo text-4xl text-center mb-10">Blog</h2>
      <div className="contenedor grid grid-cols-2 gap-8">
        { espera ?
            posts.map( post => (
              <Post 
                key={post.id}
                post={post.attributes}
              />
            )) :
            null
        }
      </div>
        
        
    </Layout>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}car-blogs?populate=imagen`
  const respuesta = await fetch(url)
  const { data: posts } = await respuesta.json()

  return {
    props: {
      posts
    }
  }
}

export default Blog