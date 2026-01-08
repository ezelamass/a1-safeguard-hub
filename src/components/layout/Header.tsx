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
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-azulNoche/95 backdrop-blur-md shadow-lg"
          : "bg-azulNoche/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img 
              src={logo} 
              alt="A1 Broker" 
              className="h-20 md:h-[8.5rem] w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-base font-medium text-white/80 hover:text-white transition-colors py-2"
              >
                <span>Productos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Invisible bridge to prevent gap */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 h-2 w-full" />

              {isProductsOpen && (
                <div
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[900px] max-w-[90vw] bg-azulNoche backdrop-blur-xl rounded-xl shadow-2xl shadow-black/30 z-50 overflow-hidden border border-white/15 animate-fade-in"
                >
                  <div className="grid grid-cols-3">
                    {/* Column 1: Seguros */}
                    <div className="p-6 border-r border-white/10">
                      <h3 className="text-sm font-bold text-white uppercase mb-4 tracking-wide flex items-center gap-2">
                        <icons.Shield className="w-4 h-4 text-primary-400" />
                        Seguros
                      </h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {SEGUROS_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsProductsOpen(false)}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                          >
                            <span className="text-gray-400 group-hover:text-primary-400 transition-colors">
                              {getIcon(item.icon)}
                            </span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white truncate">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Medicina Prepaga */}
                    <div className="p-6 border-r border-white/10">
                      <h3 className="text-sm font-bold text-white uppercase mb-4 tracking-wide flex items-center gap-2">
                        <icons.Heart className="w-4 h-4 text-a1pink" />
                        Medicina Prepaga
                      </h3>
                      <div className="space-y-2">
                        {MEDICINA_PREPAGA_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsProductsOpen(false)}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                          >
                            <span className="text-gray-400 group-hover:text-a1pink transition-colors">
                              {getIcon(item.icon)}
                            </span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Seguros de Vida */}
                    <div className="p-6">
                      <h3 className="text-sm font-bold text-white uppercase mb-4 tracking-wide flex items-center gap-2">
                        <icons.Users className="w-4 h-4 text-a1violet" />
                        Seguros de Vida
                      </h3>
                      <div className="space-y-2">
                        {SEGUROS_VIDA_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsProductsOpen(false)}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                          >
                            <span className="text-gray-400 group-hover:text-a1violet transition-colors">
                              {getIcon(item.icon)}
                            </span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>

                        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                          <p className="text-xs font-medium text-gray-400 mb-2">¿Necesitás asesoramiento?</p>
                          <Link 
                            to="/contacto" 
                            onClick={() => setIsProductsOpen(false)}
                            className="text-sm font-bold text-primary-400 hover:text-primary-300 flex items-center gap-1"
                          >
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
              className="text-base font-medium text-white/80 hover:text-white transition-colors"
            >
              Nosotros
            </Link>

            <Link
              to="/contacto"
              className="text-base font-medium text-white/80 hover:text-white transition-colors"
            >
              Contacto
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
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-azulNoche z-40 lg:hidden pt-20 overflow-y-auto">
          <nav className="container mx-auto px-4 py-8 space-y-6">
            <div className="space-y-6">
              {/* Medicina Prepaga */}
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase mb-3">
                  Medicina Prepaga
                </p>
                <div className="space-y-2">
                  {MEDICINA_PREPAGA_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-gray-400">{getIcon(item.icon)}</span>
                      <span className="text-sm font-medium text-gray-200">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Seguros */}
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase mb-3">
                  Seguros
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SEGUROS_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-gray-400">{getIcon(item.icon)}</span>
                      <span className="text-sm font-medium text-gray-200">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Seguros de Vida */}
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase mb-3">
                  Seguros de Vida
                </p>
                <div className="space-y-2">
                  {SEGUROS_VIDA_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-gray-400">{getIcon(item.icon)}</span>
                      <span className="text-sm font-medium text-gray-200">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <Link
                to="/nosotros"
                className="block text-lg font-medium text-white hover:text-primary-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="block text-lg font-medium text-white hover:text-primary-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
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
