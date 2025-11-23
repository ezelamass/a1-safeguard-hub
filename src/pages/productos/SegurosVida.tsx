import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const schema = z.object({
  apellidoNombre: z.string().min(3, "Mínimo 3 caracteres").max(100),
  fechaNacimiento: z.string().min(1, "Campo requerido"),
  fuma: z.string().min(1, "Campo requerido"),
  capitalInicial: z.string().min(1, "Campo requerido"),
});

type FormData = z.infer<typeof schema>;

export default function SegurosVida() {
  const { type } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const typeName = type?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Seguro de Vida";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const message = `Hola! Me interesa cotizar un Seguro de Vida ${typeName}`;
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
              Seguro de Vida {typeName}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protegé el futuro de tu familia con tranquilidad y seguridad
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
                    <h3 className="font-semibold text-gray-900">Protección financiera</h3>
                    <p className="text-gray-600">Garantizá el bienestar económico de tu familia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Planificación a largo plazo</h3>
                    <p className="text-gray-600">Herramienta ideal para tu retiro y educación</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexibilidad total</h3>
                    <p className="text-gray-600">Adaptamos el plan a tus necesidades específicas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Asesoramiento experto</h3>
                    <p className="text-gray-600">Sofía te guía en cada paso del proceso</p>
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
                    <span className="text-gray-700">Cobertura por fallecimiento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Invalidez total y permanente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Enfermedades graves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Ahorro programado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Beneficios fiscales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Rescate anticipado</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-t-4 border-primary-600"
          >
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Cotizá tu Seguro de Vida
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  Completá los datos y te enviaremos una cotización personalizada
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Apellido y Nombre <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("apellidoNombre")}
                      placeholder="Ingresá tu apellido y nombre"
                      className={errors.apellidoNombre ? "border-red-500" : ""}
                    />
                    {errors.apellidoNombre && (
                      <p className="text-red-600 text-sm mt-1">{errors.apellidoNombre.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Fecha de Nacimiento <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("fechaNacimiento")}
                      type="date"
                      className={errors.fechaNacimiento ? "border-red-500" : ""}
                    />
                    {errors.fechaNacimiento && (
                      <p className="text-red-600 text-sm mt-1">{errors.fechaNacimiento.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      ¿Fumás? <span className="text-red-500">*</span>
                    </Label>
                    <select
                      {...register("fuma")}
                      className={`w-full px-4 py-3 border-2 rounded-xl text-base ${errors.fuma ? "border-red-500" : "border-gray-200"
                        } focus:border-primary-500 focus:ring-4 focus:ring-primary-100`}
                    >
                      <option value="">Seleccionar</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                    </select>
                    {errors.fuma && (
                      <p className="text-red-600 text-sm mt-1">{errors.fuma.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Capital Inicial <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("capitalInicial")}
                      type="text"
                      placeholder="Ej: $5.000.000"
                      className={errors.capitalInicial ? "border-red-500" : ""}
                    />
                    {errors.capitalInicial && (
                      <p className="text-red-600 text-sm mt-1">{errors.capitalInicial.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isLoading}
                      className="flex-1"
                    >
                      {isLoading ? "Enviando..." : "Solicitar Cotización"}
                    </Button>
                    <Button
                      type="button"
                      variant="whatsapp"
                      size="lg"
                      onClick={handleWhatsApp}
                      className="flex-1 sm:flex-initial"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Cotización Solicitada!
                </h3>
                <p className="text-gray-600">
                  Sofía te contactará en las próximas horas con las mejores opciones para tu perfil.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
