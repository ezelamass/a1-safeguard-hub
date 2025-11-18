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
  edad: z.string().min(1, "Campo requerido"),
  edad1: z.string().optional(),
  edad2: z.string().optional(),
  edad3: z.string().optional(),
  relacion: z.string().min(1, "Campo requerido"),
  coberturaActual: z.string().min(1, "Campo requerido"),
});

type FormData = z.infer<typeof schema>;

export default function MedicinaPrepagas() {
  const { provider } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const providerName = provider?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Medicina Prepaga";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
    const message = `Hola! Me interesa cotizar ${providerName}`;
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
              {providerName}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontrá el plan de salud que se adapta a vos y tu familia
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
                    <h3 className="font-semibold text-gray-900">Red de prestadores premium</h3>
                    <p className="text-gray-600">Acceso a los mejores profesionales y centros médicos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cobertura integral</h3>
                    <p className="text-gray-600">Incluye consultas, estudios, internación y cirugías</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sin límite de edad</h3>
                    <p className="text-gray-600">Planes disponibles para todas las edades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergencias 24/7</h3>
                    <p className="text-gray-600">Cobertura de urgencias las 24 horas del día</p>
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
                    <span className="text-gray-700">Medicina clínica y especialidades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Estudios de diagnóstico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Internación en habitación compartida/privada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Cirugías programadas y de urgencia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Maternidad y pediatría</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Odontología básica</span>
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
                  ANÁLISIS GRATUITO
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  Solicite una Consultoría y Cotice un Plan a su Medida
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
                      Edad <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("edad")}
                      type="number"
                      placeholder="Tu edad"
                      className={errors.edad ? "border-red-500" : ""}
                    />
                    {errors.edad && (
                      <p className="text-red-600 text-sm mt-1">{errors.edad.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Grupo familiar (edades)
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      <Input {...register("edad1")} type="number" placeholder="Edad 1" />
                      <Input {...register("edad2")} type="number" placeholder="Edad 2" />
                      <Input {...register("edad3")} type="number" placeholder="Edad 3" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Relación de dependencia <span className="text-red-500">*</span>
                    </Label>
                    <select
                      {...register("relacion")}
                      className={`w-full px-4 py-3 border-2 rounded-xl text-base ${
                        errors.relacion ? "border-red-500" : "border-gray-200"
                      } focus:border-primary-500 focus:ring-4 focus:ring-primary-100`}
                    >
                      <option value="">Seleccionar</option>
                      <option value="dependencia">Relación de dependencia</option>
                      <option value="independiente">Independiente</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.relacion && (
                      <p className="text-red-600 text-sm mt-1">{errors.relacion.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Cobertura médica actual <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("coberturaActual")}
                      placeholder="Ej: OSDE, Swiss Medical, sin cobertura, etc."
                      className={errors.coberturaActual ? "border-red-500" : ""}
                    />
                    {errors.coberturaActual && (
                      <p className="text-red-600 text-sm mt-1">{errors.coberturaActual.message}</p>
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
                      {isLoading ? "Enviando..." : "Solicitar Consultoría"}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
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
                  ¡Consultoría Solicitada!
                </h3>
                <p className="text-gray-600">
                  Clara te contactará en las próximas horas con las mejores opciones para tu perfil.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
