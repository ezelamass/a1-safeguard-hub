import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-variants";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

const Cotizar = () => {
  const url = buildWhatsAppUrl("cotizar un seguro");

  useEffect(() => {
    // Auto-redirect to WhatsApp shortly after landing
    const t = setTimeout(() => {
      window.location.href = url;
    }, 1200);
    return () => clearTimeout(t);
  }, [url]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white py-24 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-10"
          >
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-success" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cotizá por WhatsApp
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Te ayudamos a elegir tu cobertura. Consultanos ahora. Te respondemos en el momento para que no pierdas tiempo. Atención: L a V de 9 a 18 h.
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp
              </a>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Te estamos redirigiendo automáticamente…
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cotizar;
