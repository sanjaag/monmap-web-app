import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { text: 'НҮҮР', url: '#' },
    { 
      text: 'БИДНИЙ ТУХАЙ', 
      url: '#',
      submenu: [
        { text: 'Танилцуулга', url: '#' },
        { text: 'Түүхэн замнал', url: '#' }
      ]
    },
    { 
      text: 'ҮЙЛЧИЛГЭЭ', 
      url: '#',
      submenu: [
        { text: 'Геодези', url: '#' },
        { text: 'ГМС', url: '#' }
      ]
    },
    { text: 'ТӨСӨЛ', url: '#' },
    { 
      text: 'ТЕХНОЛОГИ', 
      url: '#',
      submenu: [
        { text: 'Дижитал Твин', url: '#' },
        { text: 'AI шийдэл', url: '#' },
        { text: 'Орон зайн шинжилгээ', url: '#' }
      ]
    },
    { text: 'ДИСТРИБЬЮТЕР', url: '#' },
    { text: 'ХОЛБОО БАРИХ', url: '#' }
  ]

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://monmap.maps.arcgis.com/sharing/rest/content/items/0f750a04133346269cd0be7a5779f585/data" 
              alt="MonMap Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.url}
                  className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {item.text}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.url}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-blue-400"
                      >
                        {subItem.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
              Sign In
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800">
            <nav className="py-4 space-y-2">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a 
                    href={item.url}
                    className="block px-4 py-2 text-white hover:text-blue-400 transition-colors"
                  >
                    {item.text}
                  </a>
                  {item.submenu && (
                    <div className="pl-8 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.url}
                          className="block px-4 py-1 text-sm text-gray-300 hover:text-blue-400"
                        >
                          {subItem.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header