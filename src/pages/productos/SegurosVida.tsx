import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-variants";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

export default function SegurosVida() {
  const { type } = useParams();
  const typeName = type?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Seguro de Vida";
  const waUrl = buildWhatsAppUrl(`un Seguro de Vida ${typeName}`);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Seguro de Vida {typeName}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protegé el futuro de tu familia con tranquilidad y seguridad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios</h2>
              <div className="space-y-4">
                {[
                  ["Protección financiera", "Garantizá el bienestar económico de tu familia"],
                  ["Planificación a largo plazo", "Herramienta ideal para tu retiro y educación"],
                  ["Flexibilidad total", "Adaptamos el plan a tus necesidades específicas"],
                  ["Asesoramiento experto", "Sofía te guía en cada paso del proceso"],
                ].map(([t, d]) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t}</h3>
                      <p className="text-gray-600">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Coberturas Incluidas</h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <ul className="space-y-3">
                  {["Cobertura por fallecimiento","Invalidez total y permanente","Enfermedades graves","Ahorro programado","Beneficios fiscales","Rescate anticipado"].map(c => (
                    <li key={c} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 lg:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Cotizá tu Seguro de Vida por WhatsApp</h2>
            <p className="text-xl mb-8 text-white/90">
              Te ayudamos a elegir tu cobertura. Te respondemos en el momento. Atención: L a V de 9 a 18 h.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
