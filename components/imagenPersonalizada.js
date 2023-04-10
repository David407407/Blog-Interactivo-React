
function ImagenPersonalizada({ruta, pequeña = false}) {
  return pequeña ? (
    <div className="imagen m-auto rounded-xl">
      <style jsx>{`
          .imagen {
            background-image: url(${ruta});
            background-position: center;
            background-size: cover;
            width: 14rem;
            height: 14rem;
          }
      `}</style>
    </div>
  ) : (
    <div className="imagen m-auto rounded-xl">
      <style jsx>{`
          .imagen {
            background-image: url(${ruta});
            background-position: center;
            background-size: cover;
            width: 28rem;
            height: 28rem;
          }
      `}</style>
    </div>
  )
}

export default ImagenPersonalizada