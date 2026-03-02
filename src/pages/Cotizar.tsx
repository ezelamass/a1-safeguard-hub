import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
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
  Loader2,
  CalendarIcon,
  MapPin,
  CreditCard,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { QuoteFormFields } from "@/components/cotizar/QuoteFormFields";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(100, "Máximo 100 caracteres"),
  dni_cuit: z.string().min(7, "DNI/CUIT inválido").max(13, "DNI/CUIT inválido"),
  localidad: z.string().min(2, "Ingresá tu localidad"),
  codigo_postal: z.string().min(4, "Código postal inválido").max(8, "Código postal inválido"),
  telefono: z.string().min(8, "Teléfono inválido").max(15, "Teléfono inválido"),
  email: z.string().email("Email inválido").min(5, "Email muy corto"),
  fecha_nacimiento: z.date({ required_error: "Ingresá tu fecha de nacimiento" }),
  riesgo: z.string().min(1, "Seleccioná un tipo de seguro"),
  medio_pago: z.string().min(1, "Seleccioná un medio de pago"),
  mensaje: z.string().max(500, "Máximo 500 caracteres").optional(),
  terminos: z.boolean().refine(val => val === true, "Debés aceptar los términos"),
});

type FormData = z.infer<typeof formSchema>;

const inputClass =
  "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base text-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-200";

const Cotizar = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      nombre: "",
      dni_cuit: "",
      localidad: "",
      codigo_postal: "",
      telefono: "",
      email: "",
      riesgo: "",
      medio_pago: "",
      mensaje: "",
      terminos: false,
    },
  });

  const riesgo = watch("riesgo");
  const fechaNacimiento = watch("fecha_nacimiento");

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));

    const lines = [
      `Hola! Solicito una cotización:`,
      ``,
      `*Datos personales*`,
      `Nombre: ${data.nombre}`,
      `DNI/CUIT: ${data.dni_cuit}`,
      `Localidad: ${data.localidad} (CP: ${data.codigo_postal})`,
      `Teléfono: ${data.telefono}`,
      `Email: ${data.email}`,
      `Fecha Nac.: ${format(data.fecha_nacimiento, "dd/MM/yyyy")}`,
      ``,
      `*Tipo de seguro*: ${data.riesgo}`,
      `*Medio de pago*: ${data.medio_pago}`,
    ];

    if (data.mensaje) {
      lines.push(``, `Mensaje: ${data.mensaje}`);
    }

    const whatsappUrl = `https://wa.me/5491133258129?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

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
                  Formulario de Cotización
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* ═══ CABECERA ═══ */}
                    <div className="space-y-5">
                      <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Datos personales</h3>

                      {/* Nombre */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre y Apellido / Razón Social <span className="text-red-500 text-xs">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            {...register("nombre")}
                            placeholder="Ingresá tu nombre completo"
                            className={cn(inputClass, "pl-12", errors.nombre && "border-red-500")}
                          />
                        </div>
                        {errors.nombre && <p className="text-red-600 text-sm mt-1">{errors.nombre.message}</p>}
                      </div>

                      {/* DNI/CUIT + Fecha Nac */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            DNI / CUIT <span className="text-red-500 text-xs">*</span>
                          </label>
                          <input
                            {...register("dni_cuit")}
                            placeholder="Ej: 30123456"
                            className={cn(inputClass, errors.dni_cuit && "border-red-500")}
                          />
                          {errors.dni_cuit && <p className="text-red-600 text-sm mt-1">{errors.dni_cuit.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Fecha de nacimiento <span className="text-red-500 text-xs">*</span>
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                className={cn(
                                  inputClass,
                                  "flex items-center justify-between text-left",
                                  !fechaNacimiento && "text-gray-400",
                                  errors.fecha_nacimiento && "border-red-500"
                                )}
                              >
                                {fechaNacimiento
                                  ? format(fechaNacimiento, "dd/MM/yyyy")
                                  : "Seleccionar fecha"}
                                <CalendarIcon className="w-5 h-5 text-gray-400" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={fechaNacimiento}
                                onSelect={(date) => date && setValue("fecha_nacimiento", date, { shouldValidate: true })}
                                disabled={(date) => date > new Date() || date < new Date("1920-01-01")}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                          {errors.fecha_nacimiento && <p className="text-red-600 text-sm mt-1">{errors.fecha_nacimiento.message}</p>}
                        </div>
                      </div>

                      {/* Localidad + CP */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Localidad <span className="text-red-500 text-xs">*</span>
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              {...register("localidad")}
                              placeholder="Tu localidad"
                              className={cn(inputClass, "pl-12", errors.localidad && "border-red-500")}
                            />
                          </div>
                          {errors.localidad && <p className="text-red-600 text-sm mt-1">{errors.localidad.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Código Postal <span className="text-red-500 text-xs">*</span>
                          </label>
                          <input
                            {...register("codigo_postal")}
                            placeholder="Ej: 1714"
                            className={cn(inputClass, errors.codigo_postal && "border-red-500")}
                          />
                          {errors.codigo_postal && <p className="text-red-600 text-sm mt-1">{errors.codigo_postal.message}</p>}
                        </div>
                      </div>

                      {/* Teléfono + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Teléfono WhatsApp <span className="text-red-500 text-xs">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              {...register("telefono")}
                              type="tel"
                              placeholder="Ej: 1133258129"
                              className={cn(inputClass, "pl-12", errors.telefono && "border-red-500")}
                            />
                          </div>
                          {errors.telefono && <p className="text-red-600 text-sm mt-1">{errors.telefono.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email <span className="text-red-500 text-xs">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              {...register("email")}
                              type="email"
                              placeholder="tu@email.com"
                              className={cn(inputClass, "pl-12", errors.email && "border-red-500")}
                            />
                          </div>
                          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                      </div>
                    </div>

                    {/* ═══ SELECTOR DE RIESGO ═══ */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">¿Qué querés cotizar?</h3>
                      <div className="relative">
                        <select
                          {...register("riesgo")}
                          className={cn(
                            inputClass,
                            "appearance-none bg-white",
                            errors.riesgo && "border-red-500"
                          )}
                        >
                          <option value="">Seleccioná un tipo de seguro</option>
                          <optgroup label="🚗 Movilidad">
                            <option value="autos">Autos</option>
                            <option value="motos">Motos</option>
                            <option value="flotas">Flotas</option>
                            <option value="bicicletas">Bicicletas</option>
                            <option value="monopatines">Monopatines</option>
                            <option value="embarcaciones">Embarcaciones</option>
                          </optgroup>
                          <optgroup label="🏢 Empresas y Trabajo">
                            <option value="art">ART</option>
                            <option value="accidentes_personales">Accidentes Personales</option>
                            <option value="integral_comercio">Integral de Comercio</option>
                            <option value="responsabilidad_civil">Responsabilidad Civil</option>
                            <option value="cauciones">Cauciones</option>
                            <option value="transporte">Transporte de Mercaderías</option>
                            <option value="tro">Todo Riesgo Operativo (TRO)</option>
                          </optgroup>
                          <optgroup label="🏠 Hogar y Propiedad">
                            <option value="combinado_familiar">Combinado Familiar</option>
                            <option value="incendio">Incendio</option>
                          </optgroup>
                          <optgroup label="❤️ Salud y Personas">
                            <option value="prepaga">Medicina Prepaga</option>
                            <option value="asistencia_viajero">Asistencia al Viajero</option>
                            <option value="sepelio">Sepelio</option>
                          </optgroup>
                          <optgroup label="📱 Vida Urbana">
                            <option value="tecnologia">Tecnología</option>
                            <option value="bolso_protegido">Bolso Protegido</option>
                          </optgroup>
                          <optgroup label="💚 Vida">
                            <option value="vida">Seguro de Vida</option>
                          </optgroup>
                          <option value="otro">Otro</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.riesgo && <p className="text-red-600 text-sm mt-1">{errors.riesgo.message}</p>}
                    </div>

                    {/* ═══ CAMPOS CONDICIONALES ═══ */}
                    {riesgo && (
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-4">
                        <QuoteFormFields riesgo={riesgo} register={register} watch={watch} />
                      </div>
                    )}

                    {/* Mensaje opcional */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje adicional <span className="text-gray-400 text-xs">(opcional)</span>
                      </label>
                      <textarea
                        {...register("mensaje")}
                        rows={3}
                        placeholder="Contanos cualquier detalle relevante..."
                        className={cn(inputClass, "resize-none")}
                      />
                    </div>

                    {/* ═══ CIERRE ═══ */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Medio de pago preferido</h3>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          {...register("medio_pago")}
                          className={cn(inputClass, "appearance-none bg-white pl-12", errors.medio_pago && "border-red-500")}
                        >
                          <option value="">Seleccioná medio de pago</option>
                          <option value="debito_cbu">Débito Automático (CBU)</option>
                          <option value="tarjeta_credito">Tarjeta de Crédito</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.medio_pago && <p className="text-red-600 text-sm mt-1">{errors.medio_pago.message}</p>}
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
                    {errors.terminos && <p className="text-red-600 text-sm">{errors.terminos.message}</p>}

                    {/* Submit */}
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
