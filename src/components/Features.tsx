import { Button } from './ui/button'

const Features = () => {
  const capabilities = [
    {
      title: 'Газрын зураглал',
      description: 'Өндөр нарийвчлалтай газрын зураг бүтээх, орон зайн мэдээлэл цуглуулах',
      image: 'https://www.esri.com/content/dam/esrisites/en-us/arcgis/about-arcgis/images/about-arcgis-mts-cap-mapping.jpg'
    },
    {
      title: 'Орон зайн шинжилгээ',
      description: 'Орон зайн мэдээллийг ашиглан шинжилгээ хийх, төлөвлөлт хийх',
      image: 'https://www.esri.com/content/dam/esrisites/en-us/arcgis/about-arcgis/images/about-arcgis-mts-cap-spatial-analytics.jpg'
    },
    {
      title: 'Талбайн ажиллагаа',
      description: 'Талбайн судалгаа, хэмжилт, мэдээлэл цуглуулах ажиллагаа',
      image: 'https://www.esri.com/content/dam/esrisites/en-us/arcgis/about-arcgis/images/about-arcgis-mts-cap-field-ops.jpg'
    },
    {
      title: 'Өгөгдлийн менежмент',
      description: 'Орон зайн өгөгдлийг удирдах, хадгалах, боловсруулах',
      image: 'https://www.esri.com/content/dam/esrisites/en-us/arcgis/about-arcgis/images/about-arcgis-mts-cap-data-mgmt.jpg'
    },
    {
      title: 'Зургийн боловсруулалт',
      description: 'Сансрын зураг, дрон зургийг боловсруулах, шинжилгээ хийх',
      image: 'https://www.esri.com/content/dam/esrisites/en-us/arcgis/about-arcgis/images/about-arcgis-mts-cap-imagery-sensing.jpg'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
            Газарзүйн суурьтай чадамжуудын онцгой давуу талууд
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            ГИС нь газарзүйн байршлын мэдээллийг цуглуулах, хадгалах, боловсруулах, шинжлэх, 
            удирдах болон харуулах зориулалттай системийн бүрэн багц, хэрэгслүүд юм.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={capability.image} 
                  alt={capability.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md">
            Learn how ArcGIS works →
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Features