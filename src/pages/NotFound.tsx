import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button-variants";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-azulNoche via-indigo-900 to-blue-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-a1pink rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-a1violet rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* 404 Number with gradient */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-a1pink via-a1violet to-accent-400 bg-clip-text text-transparent">
                404
              </span>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Search className="w-10 h-10 text-a1pink" />
              </div>
            </motion.div>

            {/* Text content */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Página no encontrada
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Lo sentimos, la página que buscás no existe o fue movida. 
              <br className="hidden md:block" />
              Pero no te preocupes, podés volver al inicio y encontrar lo que necesitás.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" asChild>
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Página Anterior
              </Button>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <p className="text-white/60 mb-4">¿Buscabas alguna de estas páginas?</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/cotizar"
                  className="px-4 py-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all text-sm"
                >
                  Cotizar
                </Link>
                <Link
                  to="/nosotros"
                  className="px-4 py-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all text-sm"
                >
                  Nosotros
                </Link>
                <Link
                  to="/contacto"
                  className="px-4 py-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all text-sm"
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
