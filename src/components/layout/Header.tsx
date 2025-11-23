import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button-variants";
import { MEDICINA_PREPAGA_ITEMS, SEGUROS_ITEMS, SEGUROS_VIDA_ITEMS } from "@/utils/constants";
import * as icons from "lucide-react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    const Icon = icons[iconName as keyof typeof icons] as React.ComponentType<any>;
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center gap-2 z-50">
            <img src={logo} alt="A1 Broker" className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              A1 Broker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-primary-700 transition-colors"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <span>Productos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-xl p-6 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {/* Medicina Prepaga */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wide">
                        Medicina Prepaga
                      </h3>
                      <div className="space-y-1">
                        {MEDICINA_PREPAGA_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50 transition-colors group"
                          >
                            {getIcon(item.icon)}
                            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Seguros */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wide">
                        Seguros
                      </h3>
                      <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2">
                        {SEGUROS_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50 transition-colors group"
                          >
                            {getIcon(item.icon)}
                            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Seguros de Vida */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wide">
                        Seguros de Vida
                      </h3>
                      <div className="space-y-1">
                        {SEGUROS_VIDA_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50 transition-colors group"
                          >
                            {getIcon(item.icon)}
                            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/nosotros"
              className="text-base font-medium text-gray-700 hover:text-primary-700 transition-colors"
            >
              Nosotros
            </Link>
            
            <Link
              to="/contacto"
              className="text-base font-medium text-gray-700 hover:text-primary-700 transition-colors"
            >
              Ayuda
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button variant="primary" size="md" asChild>
              <Link to="/cotizar">Cotizar Ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden pt-20 overflow-y-auto">
          <nav className="container mx-auto px-4 py-8 space-y-6">
            <div className="space-y-6">
              {/* Medicina Prepaga */}
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Medicina Prepaga
                </p>
                <div className="space-y-2">
                  {MEDICINA_PREPAGA_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {getIcon(item.icon)}
                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Seguros */}
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Seguros
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SEGUROS_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {getIcon(item.icon)}
                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Seguros de Vida */}
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Seguros de Vida
                </p>
                <div className="space-y-2">
                  {SEGUROS_VIDA_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {getIcon(item.icon)}
                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <Link
                to="/nosotros"
                className="block text-lg font-medium text-gray-900 hover:text-primary-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="block text-lg font-medium text-gray-900 hover:text-primary-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ayuda
              </Link>
            </div>

            <div className="pt-6">
              <Button variant="primary" size="lg" fullWidth asChild>
                <Link to="/cotizar" onClick={() => setIsMobileMenuOpen(false)}>
                  Cotizar Ahora
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
