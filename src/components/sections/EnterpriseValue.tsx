import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button-variants';
import {
    Target,
    BarChart3,
    ShieldAlert,
    Calendar,
    Building2
} from 'lucide-react';

const BENEFITS = [
    {
        icon: Target,
        title: "Cotización y Emisión",
        description: "Buscamos siempre la mejor opción del mercado para tu empresa."
    },
    {
        icon: BarChart3,
        title: "Renovaciones",
        description: "Controlamos vencimientos proactivamente para evitar descubiertos."
    },
    {
        icon: ShieldAlert,
        title: "Gestión de Siniestros",
        description: "Resolvemos los problemas por vos, de principio a fin."
    }
];

export const EnterpriseValue = () => {
    const { ref, inView } = useScrollAnimation();

    return (
        <section ref={ref} className="py-20 md:py-24 bg-gradient-to-b from-gray-900 to-azulNoche relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-900/90 to-teal-800/90 border border-emerald-400/50 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider animate-glow-pulse-emerald mb-6">
                            <Building2 className="w-4 h-4 text-emerald-400" />
                            Soluciones para Empresas
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Convertí la gestión de Seguros en tiempo productivo
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            ¿Sabías que tu equipo administrativo puede estar perdiendo <span className="text-white font-semibold">cientos de horas anuales</span> gestionando pólizas?
                            <br /><br />
                            Liberá el talento de tu empresa de la carga burocrática y recuperá esa productividad para lo que realmente importa: <span className="text-white font-semibold">hacer crecer tu negocio</span>.
                            <br /><br />
                            Nosotros nos convertimos en tu <span className="text-accent-400 font-bold">departamento de seguros externo</span> sin costo de nómina. Gestionamos el ciclo completo:
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <benefit.icon className="w-6 h-6 text-primary-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <Button variant="primary" size="lg" className="text-lg px-8 py-6 shadow-xl shadow-primary-900/20" asChild>
                        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Agenda una reunión
                        </a>
                    </Button>
                    <p className="text-gray-400 text-base mt-4">
                        Dejá los Seguros en manos expertas y enfocate en tu estrategia.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
