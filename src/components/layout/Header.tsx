import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button-variants";
import { MEDICINA_PREPAGA_ITEMS, SEGUROS_ITEMS, SEGUROS_VIDA_ITEMS } from "@/utils/constants";
import * as icons from "lucide-react";
import logo from "@/assets/favicon.png";

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
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? "shadow-md"
        : "shadow-sm"
        }`}
      style={{ backgroundColor: '#FEFEFE' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src={logo} alt="A1 Broker" className="h-10 w-auto md:h-20 object-contain" />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-primary-700 transition-colors"
              >
                <span>Productos</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[1000px] bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-100"
                >
                  <div className="grid grid-cols-3">
                    {/* Column 1: Seguros */}
                    <div className="p-6 border-r border-gray-200 bg-gray-50/50">
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wide flex items-center gap-2">
                        <icons.Shield className="w-4 h-4 text-primary-600" />
                        Seguros
                      </h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {SEGUROS_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                          >
                            <span className="text-gray-400 group-hover:text-primary-600 transition-colors">
                              {getIcon(item.icon)}
                            </span>
                            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 truncate">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Medicina Prepaga */}
                    <div className="p-6 border-r border-gray-200">
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wide flex items-center gap-2">
                        <icons.Heart className="w-4 h-4 text-a1pink" />
                        Medicina Prepaga
                      </h3>
                      <div className="space-y-2">
                        {MEDICINA_PREPAGA_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-100"
                          >
                            <span className="text-gray-400 group-hover:text-a1pink transition-colors">
                              {getIcon(item.icon)}
                            </span>
                            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Seguros de Vida */}
                    <div className="p-6">
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wide flex items-center gap-2">
                        <icons.Users className="w-4 h-4 text-a1violet" />
                        Seguros de Vida
                      </h3>
                      <div className="space-y-2">
                        {SEGUROS_VIDA_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-100"
                          >
                            <span className="text-gray-400 group-hover:text-a1violet transition-colors">
                              {getIcon(item.icon)}
                            </span>
                            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Featured Banner or Extra Link could go here */}
                      <div className="mt-8 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                        <p className="text-xs font-medium text-gray-500 mb-2">¿Necesitás asesoramiento?</p>
                        <Link to="/contacto" className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                          Hablá con un experto <icons.ArrowRight className="w-4 h-4" />
                        </Link>
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
        </div >
      </div >

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
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
        )
      }
    </header >
  );
};
