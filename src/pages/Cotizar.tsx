import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  User,
  Mail,
  ChevronDown,
  Send,
  CheckCircle2,
  Shield,
  MessageCircle,
  Phone,
  Clock,
  Loader2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const formSchema = z.object({
  nombre: z.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "Máximo 100 caracteres"),

  email: z.string()
    .email("Email inválido")
    .min(5, "Email muy corto"),

  riesgo: z.string()
    .min(1, "Seleccioná un tipo de seguro"),

  mensaje: z.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "Máximo 500 caracteres"),

  terminos: z.boolean()
    .refine(val => val === true, "Debés aceptar los términos")
});

type FormData = z.infer<typeof formSchema>;

const Cotizar = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, touchedFields },
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      nombre: '',
      email: '',
      riesgo: '',
      mensaje: '',
      terminos: false
    }
  });

  const mensaje = watch("mensaje");
  const email = watch("email");

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form data:", data);

    // Redirect to WhatsApp with form data
    const text = `Hola! Solicito una cotización:\n\nNombre: ${data.nombre}\nEmail: ${data.email}\nTipo: ${data.riesgo}\nMensaje: ${data.mensaje}`;
    const whatsappUrl = `https://wa.me/5491133258129?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
  };

  // Update character count
  if (mensaje?.length !== charCount) {
    setCharCount(mensaje?.length || 0);
  }

  const isEmailValid = touchedFields.email && !errors.email && email;

  return (
    <Layout>
      <div className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Solicitá tu Cotización Gratuita
            </h1>
            <p className="text-xl text-gray-600">
              Completá el formulario y un asesor te contactará en menos de 10 minutos
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 border-t-4 border-primary-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Formulario de Contacto
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre <span className="text-red-500 text-xs">*requerido</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          {...register("nombre")}
                          type="text"
                          placeholder="Ingresá tu nombre completo"
                          className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl text-base text-gray-900 transition-all duration-200 
                            ${errors.nombre ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'}
                            focus:outline-none`}
                        />
                      </div>
                      {errors.nombre && (
                        <p className="text-red-600 text-sm mt-1.5">{errors.nombre.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500 text-xs">*requerido</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="tu@email.com"
                          className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl text-base text-gray-900 transition-all duration-200 
                            ${errors.email ? 'border-red-500 focus:ring-red-100' : isEmailValid ? 'border-green-500' : 'border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'}
                            focus:outline-none`}
                        />
                        {isEmailValid && (
                          <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1.5">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Tipo de Riesgo */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ¿Qué Riesgo querés cotizar? <span className="text-red-500 text-xs">*requerido</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register("riesgo")}
                          className={`w-full px-4 py-3.5 border-2 rounded-xl text-base appearance-none bg-white transition-all duration-200
                            ${errors.riesgo ? 'border-red-500 focus:ring-red-100 text-gray-400' : 'border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 text-gray-700'}
                            focus:outline-none`}
                        >
                          <option value="">Seleccioná un tipo de seguro</option>
                          <option value="autos">🚗 Autos</option>
                          <option value="motos">🏍️ Motos</option>
                          <option value="transporte">🚚 Transporte</option>
                          <option value="bicicletas">🚲 Bicicletas</option>
                          <option value="monopatines">🛴 Monopatines</option>
                          <option value="art">💼 ART (Riesgos del Trabajo)</option>
                          <option value="accidentes_personales">👥 Accidentes Personales</option>
                          <option value="integral_comercio">🏪 Integral de Comercio</option>
                          <option value="combinado_familiar">🏠 Combinado Familiar</option>
                          <option value="incendio">🔥 Incendio</option>
                          <option value="responsabilidad_civil">🛡️ Responsabilidad Civil</option>
                          <option value="cauciones">📋 Cauciones</option>
                          <option value="tro">🏭 TRO</option>
                          <option value="asistencia_viajero">✈️ Asistencia al Viajero</option>
                          <option value="salud">🩺 Salud</option>
                          <option value="sepelio">🖤 Sepelio</option>
                          <option value="bolso_protegido">👜 Bolso Protegido</option>
                          <option value="tecnologia">📱 Tecnología</option>
                          <option value="embarcaciones">🛥️ Embarcaciones</option>
                          <option value="flotas">🚛 Flotas</option>
                          <option value="prepaga">🏥 Medicina Prepaga</option>
                          <option value="vida">❤️ Seguro de Vida</option>
                          <option value="otro">📦 Otro</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.riesgo && (
                        <p className="text-red-600 text-sm mt-1.5">{errors.riesgo.message}</p>
                      )}
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje <span className="text-red-500 text-xs">*requerido</span>
                      </label>
                      <textarea
                        {...register("mensaje")}
                        rows={5}
                        placeholder="Contanos qué necesitás asegurar y cualquier detalle relevante..."
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-base text-gray-900 resize-none transition-all duration-200
                          ${errors.mensaje ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100'}
                          focus:outline-none`}
                      />
                      <div className="flex justify-between items-center mt-1.5">
                        {errors.mensaje && (
                          <p className="text-red-600 text-sm">{errors.mensaje.message}</p>
                        )}
                        <p className={`text-sm ml-auto ${charCount > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                          {charCount}/500 caracteres
                        </p>
                      </div>
                    </div>

                    {/* Términos */}
                    <div className="flex items-start gap-3 mt-6">
                      <input
                        {...register("terminos")}
                        type="checkbox"
                        id="terminos"
                        className="w-5 h-5 rounded border-2 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500 mt-0.5"
                      />
                      <label htmlFor="terminos" className="text-sm text-gray-600">
                        Acepto la <a href="#" className="text-primary-600 hover:underline">Política de Privacidad</a> y autorizo a ser contactado
                      </label>
                    </div>
                    {errors.terminos && (
                      <p className="text-red-600 text-sm">{errors.terminos.message}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className="w-full mt-8 bg-gradient-to-r from-a1pink to-a1violet hover:opacity-90 hover:scale-105 
                        text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl 
                        transition-all duration-300 flex items-center justify-center gap-2
                        disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Cotización
                        </>
                      )}
                    </button>

                    {/* Security Message */}
                    <div className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-gray-400" />
                      Tus datos están protegidos. No compartimos tu información.
                    </div>
                  </form>
                ) : (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Recibida!</h3>
                    <p className="text-gray-600">Te contactaremos en menos de 10 minutos (L a V de 9 a 18hs)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Benefits Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6">¿Por qué elegirnos?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Respuesta Inmediata</p>
                      <p className="text-white/80 text-sm">Te contactamos en menos de 10 minutos (L a V de 9 a 18hs)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Asesoría Gratuita</p>
                      <p className="text-white/80 text-sm">Sin costo ni compromiso de contratación</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Mejores Precios</p>
                      <p className="text-white/80 text-sm">Comparamos 15+ aseguradoras por vos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Expertos Certificados</p>
                      <p className="text-white/80 text-sm">Matrícula SSN 84872 - Regulados oficialmente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  ¿Preferís contacto directo?
                </h3>

                <a
                  href="https://wa.me/5491133258129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-6 rounded-xl 
                    flex items-center justify-center gap-2 mb-4 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chateá por WhatsApp
                </a>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Llamanos</p>
                    <a href="tel:+5491133258129" className="text-lg font-bold text-gray-900 hover:text-primary-600">
                      +54 9 11 3325-8129
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-600">Lun a Vie: 9 a 18hs</p>
                </div>
              </div>

              {/* Trust Card */}
              <div className="bg-accent-50 border-2 border-accent-200 rounded-2xl p-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-600" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900">Matrícula SSN 84872</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Superintendencia de Seguros de la Nación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cotizar;
