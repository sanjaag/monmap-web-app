const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://www.esri.com/content/dam/esrisites/en-us/what-is-gis/gis-earth-layers.png')`
          }}
        />
        {/* Video element for the provided video URL */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://www.esri.com/content/dam/esrisites/en-us/parallax-gis/wigis-scene-1-0521-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6 leading-tight">
          ОРОНЗАЙН МЭДЭЭЛЭЛ, УХААЛАГ ШИЙДЛҮҮД
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Mapping the world with science and precision
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero