const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">MonMap LLC</h3>
            <p className="text-gray-400 text-sm mb-4">
              Бид газарзүйн мэдээллийн системийн бүтээн байгуулалт, 
              хөгжүүлэлт болон Монгол Улс.
            </p>
            <p className="text-gray-400 text-sm">УТН: 7013-1391</p>
            <p className="text-gray-400 text-sm">info@monmap.mn</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Үйлчилгээ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Геодези</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">ГМС</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">ArcGIS Platform</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Хөгжүүлэлт</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Технологи</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Дижитал Твин</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI шийдэл</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Орон зайн шинжилгээ</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Веб программ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MonMap LLC. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built with</span>
            <span className="text-cyan-400 text-sm">ArcGIS Hub</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer