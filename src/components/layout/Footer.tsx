import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="A1 Broker" className="w-10 h-10" />
              <span className="text-xl font-bold">A1 Broker</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones integrales de seguros desde 2016. Matrícula SSN 84872.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/cotizar" className="text-gray-400 hover:text-white transition-colors">
                  Cotizar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos/auto" className="text-gray-400 hover:text-white transition-colors">
                  Seguros de Auto
                </Link>
              </li>
              <li>
                <Link to="/productos/hogar" className="text-gray-400 hover:text-white transition-colors">
                  Seguros de Hogar
                </Link>
              </li>
              <li>
                <Link to="/productos/vida" className="text-gray-400 hover:text-white transition-colors">
                  Seguros de Vida
                </Link>
              </li>
              <li>
                <Link to="/productos/comercio" className="text-gray-400 hover:text-white transition-colors">
                  Seguros de Comercio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@a1broker.com" className="text-gray-400 hover:text-white transition-colors">
                  info@a1broker.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+5491112345678" className="text-gray-400 hover:text-white transition-colors">
                  +54 9 11 1234-5678
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 A1 Broker Seguros. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link to="/terminos" className="text-gray-400 hover:text-white transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
