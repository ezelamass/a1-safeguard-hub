import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-variants";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

export default function Seguros() {
  const { type } = useParams();
  
  const typeName = type?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Seguro";

  const handleWhatsApp = () => {
    const message = `Hola! Me interesa cotizar un seguro de ${typeName}`;
    window.open(`https://wa.me/5491133258129?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Seguro de {typeName}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protegé lo que más te importa con la mejor cobertura del mercado
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cobertura completa</h3>
                    <p className="text-gray-600">Protección integral ante todo tipo de imprevistos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Asistencia 24/7</h3>
                    <p className="text-gray-600">Te acompañamos en todo momento cuando más nos necesitás</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mejor precio del mercado</h3>
                    <p className="text-gray-600">Comparamos más de 15 aseguradoras por vos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Gestión de siniestros</h3>
                    <p className="text-gray-600">Nos encargamos de todo el proceso por vos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Coberturas Incluidas</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Responsabilidad civil hacia terceros</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Daños totales y parciales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Robo e incendio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Asistencia mecánica y remolque</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Granizo y fenómenos naturales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Servicio de grúa 24hs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 lg:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              ¿Querés cotizar este seguro?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contactanos ahora y obtené la mejor cobertura al mejor precio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button
                variant="hero"
                size="lg"
                onClick={handleWhatsApp}
                className="flex-1"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar por WhatsApp
              </Button>
              <Button
                variant="hero"
                size="lg"
                asChild
                className="flex-1"
              >
                <Link to="/cotizar">
                  <Phone className="w-5 h-5" />
                  Completar Formulario
                </Link>
              </Button>
            </div>

            <p className="text-sm text-white/70 mt-6">
              Respuesta en menos de 2 horas • Sin costo ni compromiso
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
