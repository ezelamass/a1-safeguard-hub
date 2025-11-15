import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Target, HeartHandshake, User } from "lucide-react";

const Nosotros = () => {
  const heroAnimation = useScrollAnimation();
  const purposeAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const teamAnimation = useScrollAnimation();

  const valueCards = [
    {
      icon: Shield,
      title: "Experiencia Especializada",
      description: "Contamos con un equipo de profesionales expertos, dedicados a nichos clave: Seguros Generales, Planificación de Vida y Retiro, y Salud (Prepagas).",
    },
    {
      icon: Target,
      title: "Asesoramiento Integral",
      description: "Te ofrecemos una visión 360°, desde la protección de tu auto y hogar hasta la planificación financiera de tu jubilación.",
    },
    {
      icon: HeartHandshake,
      title: "Soporte Humano 24/7",
      description: "Cuando ocurre un siniestro, no te dejamos solo. Gestionamos todo el proceso por ti, asegurando una respuesta rápida y efectiva. Somos tu voz ante las aseguradoras.",
    },
  ];

  const teamMembers = [
    {
      name: "Lía",
      role: "Seguros Generales",
      description: "Tu aliada para proteger tu patrimonio: Autos, Hogar, Integral de Comercio, Consorcios y Siniestros.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Sofía",
      role: "Vida y Retiro",
      description: "Tu guía en la planificación del futuro: Seguros de Vida, Ahorro programado, Educación y Planes de Retiro.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Clara",
      role: "Salud y Prepagas",
      description: "Tu experta en bienestar: Planes de Salud, Prepagas, comparativas de cartillas y optimización de beneficios.",
      gradient: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroAnimation.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={heroAnimation.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Somos A1 Broker:<br />
              <span className="text-accent-400">Tu Tranquilidad, Nuestra Prioridad</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Nuestro Propósito */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={purposeAnimation.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={purposeAnimation.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Introducción: Nuestro Propósito
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                En A1 Broker, no solo vendemos pólizas; somos tus aliados estratégicos en la gestión de riesgos. Nacimos con una misión clara: simplificar el complejo mundo de los seguros y la salud, ofreciendo soluciones que realmente se ajustan a tu vida, tu familia y tu patrimonio.
              </p>
              <p>
                Entendemos que detrás de cada póliza hay una persona, un sueño, un negocio que proteger. Por eso, nuestro enfoque es 100% humano y centrado en la tranquilidad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* El Valor de Elegirnos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valuesAnimation.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesAnimation.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              El Valor de Elegirnos: Por qué somos A1
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Como brókers independientes, nuestro compromiso es contigo, no con una única compañía. Esto nos da la libertad de analizar el mercado y presentar siempre las opciones más competitivas y con la mejor cobertura, garantizando que obtengas el mayor valor por tu inversión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {valueCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesAnimation.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary-600 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo Digital */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={teamAnimation.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={teamAnimation.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conoce a Nuestro Equipo Digital: Expertas a tu Servicio
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Para estar más cerca de ti y resolver tus dudas de manera ágil y amigable, hemos integrado a nuestras especialistas digitales, las caras visibles de nuestra experiencia:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={teamAnimation.inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className={`h-32 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-10 h-10 text-gray-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
