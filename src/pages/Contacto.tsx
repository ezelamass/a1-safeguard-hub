import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-variants";
import { MessageCircle, Phone, Clock, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contacto = () => {
  const handleWhatsApp = () => {
    const message = "Hola! Me gustaría recibir asesoramiento sobre seguros.";
    window.open(`https://wa.me/5491157388695?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+5491157388695", "_self");
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
              Contactanos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos para ayudarte. Elegí el canal que prefieras y te responderemos a la brevedad.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Direct Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                ¿Preferís contacto directo?
              </h2>
              
              <div className="space-y-6">
                {/* WhatsApp Button */}
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chateá por WhatsApp
                </Button>

                {/* Phone */}
                <div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={handleCall}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Llamanos</p>
                    <p className="text-lg font-bold text-gray-900">+54 9 11 5738-8695</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horario de atención</p>
                    <p className="text-lg font-semibold text-gray-900">Lun a Vie: 9 a 18hs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email & Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Otros canales
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:info@a1broker.com.ar"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-bold text-gray-900">info@a1broker.com.ar</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Oficina</p>
                    <p className="text-lg font-semibold text-gray-900">Buenos Aires, Argentina</p>
                    <p className="text-sm text-gray-500 mt-1">Atención con cita previa</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-center text-gray-600 mb-4">
                    ¿Querés una cotización personalizada?
                  </p>
                  <Button variant="outline" size="lg" fullWidth asChild>
                    <a href="/cotizar">Completar formulario de cotización</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center bg-gradient-to-br from-azulNoche to-primary-900 rounded-2xl p-8 lg:p-12 text-white"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Respuesta garantizada en menos de 2 horas
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Nuestro equipo de asesores está listo para ayudarte a encontrar la mejor cobertura para vos y tu familia.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
