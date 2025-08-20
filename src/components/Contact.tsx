const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
            Биднэтэй холбоо барих
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Танай байгууллагын чадавх дээшлүүлэхэд манай мэргэжилтнүүд туслахад бэлэн байна.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Хаяг:</h3>
              <p className="text-gray-300 mb-2">1005, Pearl Tower,</p>
              <p className="text-gray-300 mb-2">Жуулчны гудамж 34, 5-р</p>
              <p className="text-gray-300 mb-2">давхар</p>
              <p className="text-gray-300 mb-2">Чингэлтэй дүүрэг</p>
              <p className="text-gray-300">Улаанбаатар 15172</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Утас:</h3>
              <p className="text-gray-300 mb-4">(+976) 9911-1781</p>
              
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Мэйл:</h3>
              <p className="text-gray-300">info@monmap.mn</p>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-cyan-400 mb-8">Харилцагч</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/07/Mongolian_Emergency_Service_emblem.svg" 
              alt="Client 1" 
              className="h-16 w-auto filter brightness-0 invert"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b0/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D1%82_%D2%AE%D0%B9%D0%BB%D0%B4%D0%B2%D1%8D%D1%80_%D0%A2%D3%A8%D2%AE%D0%93_logo.png" 
              alt="Client 2" 
              className="h-16 w-auto filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact