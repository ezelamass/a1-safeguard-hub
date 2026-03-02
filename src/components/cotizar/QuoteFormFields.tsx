import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface QuoteFormFieldsProps {
  riesgo: string;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
}

const inputClass =
  "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base text-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-200";

const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4 mt-2">
    {children}
  </h3>
);

// ── Movilidad (autos, motos) ──
const MovilidadFields = ({ register }: { register: UseFormRegister<any> }) => (
  <>
    <SectionTitle>Datos del vehículo</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Marca y Modelo</label>
        <input {...register("vehiculo_marca_modelo")} placeholder="Ej: Toyota Corolla" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Año</label>
        <input {...register("vehiculo_anio")} type="number" placeholder="Ej: 2023" className={inputClass} />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>¿Tiene GNC?</label>
        <select {...register("vehiculo_gnc")} className={inputClass}>
          <option value="">Seleccionar</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Valor GNC (si aplica)</label>
        <input {...register("vehiculo_gnc_valor")} placeholder="Valor del equipo" className={inputClass} />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Uso</label>
        <select {...register("vehiculo_uso")} className={inputClass}>
          <option value="">Seleccionar</option>
          <option value="particular">Particular</option>
          <option value="comercial">Comercial</option>
          <option value="uber">Uber / Remis</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Tipo de cobertura buscada</label>
        <select {...register("vehiculo_cobertura")} className={inputClass}>
          <option value="">Seleccionar</option>
          <option value="responsabilidad_civil">Responsabilidad Civil</option>
          <option value="terceros_completo">Terceros Completo</option>
          <option value="todo_riesgo">Todo Riesgo</option>
        </select>
      </div>
    </div>
  </>
);

// ── Flotas ──
const FlotasFields = ({ register }: { register: UseFormRegister<any> }) => (
  <>
    <MovilidadFields register={register} />
    <div className="mt-4">
      <label className={labelClass}>Adjuntar listado de flota (Excel)</label>
      <input type="file" accept=".xlsx,.xls,.csv" {...register("flotas_archivo")} className={inputClass} />
      <p className="text-xs text-gray-500 mt-1">Formato: Excel o CSV. Los archivos serán solicitados por el asesor.</p>
    </div>
  </>
);

// ── Micro-movilidad (bicicletas, monopatines) ──
const MicroMovilidadFields = ({ register }: { register: UseFormRegister<any> }) => (
  <>
    <SectionTitle>Datos del rodado</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Tipo</label>
        <select {...register("micro_tipo")} className={inputClass}>
          <option value="">Seleccionar</option>
          <option value="bicicleta">Bicicleta</option>
          <option value="monopatín">Monopatín eléctrico</option>
          <option value="bici_electrica">Bicicleta eléctrica</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Marca y Modelo</label>
        <input {...register("micro_marca_modelo")} placeholder="Ej: Topmega Folding" className={inputClass} />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Suma asegurada (valor)</label>
        <input {...register("micro_suma")} type="number" placeholder="$" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Accesorios (casco, luces, etc.)</label>
        <input {...register("micro_accesorios")} placeholder="Detalle accesorios" className={inputClass} />
      </div>
    </div>
  </>
);

// ── Hogar / Comercio ──
const HogarFields = ({ register }: { register: UseFormRegister<any> }) => (
  <>
    <SectionTitle>Datos del inmueble</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Tipo de vivienda / edificio</label>
        <select {...register("hogar_tipo")} className={inputClass}>
          <option value="">Seleccionar</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="ph">PH</option>
          <option value="local">Local comercial</option>
          <option value="oficina">Oficina</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Metros cuadrados</label>
        <input {...register("hogar_m2")} type="number" placeholder="m²" className={inputClass} />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Medidas de seguridad</label>
        <input {...register("hogar_seguridad")} placeholder="Alarma, rejas, vigilancia..." className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Suma asegurada estimada</label>
        <input {...register("hogar_suma")} type="number" placeholder="$" className={inputClass} />
      </div>
    </div>
    <div>
      <label className={labelClass}>¿Linderos peligrosos?</label>
      <select {...register("hogar_linderos")} className={inputClass}>
        <option value="">Seleccionar</option>
        <option value="no">No</option>
        <option value="si">Sí</option>
      </select>
    </div>
  </>
);

// ── Personas (ART, AP) ──
const PersonasFields = ({ register, riesgo }: { register: UseFormRegister<any>; riesgo: string }) => (
  <>
    <SectionTitle>Datos de cobertura</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Actividad / Oficio</label>
        <input {...register("personas_actividad")} placeholder="Ej: Construcción" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>CBU / Nómina</label>
        <input {...register("personas_cbu")} placeholder="CBU o cantidad de empleados" className={inputClass} />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelClass}>Suma asegurada requerida</label>
        <input {...register("personas_suma")} type="number" placeholder="$" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Ámbito de cobertura</label>
        <input {...register("personas_ambito")} placeholder="Nacional / Regional" className={inputClass} />
      </div>
    </div>
    {riesgo === "art" && (
      <div className="mt-4">
        <label className={labelClass}>Adjuntar documentación ART</label>
        <input type="file" {...register("personas_archivo")} className={inputClass} />
        <p className="text-xs text-gray-500 mt-1">Los archivos serán solicitados por el asesor.</p>
      </div>
    )}
  </>
);

// ── RC Profesional ──
const RCProfesionalFields = ({ register, watch }: { register: UseFormRegister<any>; watch: UseFormWatch<any> }) => {
  const profesion = watch("rc_profesion") || "";
  const esMedico = profesion.toLowerCase().includes("médic") || profesion.toLowerCase().includes("medic");

  return (
    <>
      <SectionTitle>Responsabilidad Civil Profesional</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Profesión / Especialidad</label>
          <input {...register("rc_profesion")} placeholder="Ej: Médico, Abogado, Contador" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Matrícula (Nº y jurisdicción)</label>
          <input {...register("rc_matricula")} placeholder="Ej: 12345 - CABA" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Reclamos anteriores</label>
          <input {...register("rc_reclamos")} placeholder="Fecha y breve explicación" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Suma asegurada requerida</label>
          <input {...register("rc_suma")} type="number" placeholder="$" className={inputClass} />
        </div>
      </div>
      {esMedico && (
        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm font-semibold text-blue-800 mb-3">Campos adicionales para profesionales médicos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>¿Trabaja en ambulancia?</label>
              <select {...register("rc_ambulancia")} className={inputClass}>
                <option value="">Seleccionar</option>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>¿Hace emergencias?</label>
              <select {...register("rc_emergencias")} className={inputClass}>
                <option value="">Seleccionar</option>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>¿Jefe de sector?</label>
              <select {...register("rc_jefe_sector")} className={inputClass}>
                <option value="">Seleccionar</option>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>¿Personal a cargo?</label>
              <select {...register("rc_personal_cargo")} className={inputClass}>
                <option value="">Seleccionar</option>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ── Empresas / Especiales (cauciones, transporte, tro) ──
const EmpresasFields = ({ register, riesgo }: { register: UseFormRegister<any>; riesgo: string }) => (
  <>
    <SectionTitle>Datos específicos</SectionTitle>
    {riesgo === "cauciones" && (
      <div className="space-y-4">
        <div>
          <label className={labelClass}>Datos del alquiler / contrato</label>
          <textarea {...register("caucion_datos")} rows={3} placeholder="Detalle del contrato, monto de alquiler, plazo..." className={inputClass} />
        </div>
      </div>
    )}
    {riesgo === "transporte" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Trayecto</label>
          <input {...register("transporte_trayecto")} placeholder="Origen - Destino" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Tipo de mercadería</label>
          <input {...register("transporte_mercaderia")} placeholder="Descripción de la carga" className={inputClass} />
        </div>
      </div>
    )}
    {riesgo === "tro" && (
      <div className="space-y-4">
        <div>
          <label className={labelClass}>Tipo de actividad</label>
          <input {...register("tro_actividad")} placeholder="Actividad industrial / operativa" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Adjuntar inspección / balance</label>
          <input type="file" {...register("tro_archivo")} className={inputClass} />
          <p className="text-xs text-gray-500 mt-1">Los archivos serán solicitados por el asesor.</p>
        </div>
      </div>
    )}
    {!["cauciones", "transporte", "tro"].includes(riesgo) && (
      <div>
        <label className={labelClass}>Tipo de actividad a cubrir (RC)</label>
        <input {...register("empresa_actividad_rc")} placeholder="Descripción de la actividad" className={inputClass} />
      </div>
    )}
  </>
);

// ── Otros ──
const OtrosFields = ({ register, riesgo }: { register: UseFormRegister<any>; riesgo: string }) => (
  <>
    <SectionTitle>Datos adicionales</SectionTitle>
    {riesgo === "tecnologia" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Tipo de equipo</label>
          <input {...register("tech_tipo")} placeholder="Celular, Notebook, Tablet" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Marca y modelo</label>
          <input {...register("tech_marca")} placeholder="Ej: iPhone 15 Pro" className={inputClass} />
        </div>
      </div>
    )}
    {riesgo === "embarcaciones" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Tipo de embarcación</label>
          <input {...register("nave_tipo")} placeholder="Lancha, velero, yate..." className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Eslora / Motor</label>
          <input {...register("nave_detalle")} placeholder="Detalle técnico" className={inputClass} />
        </div>
      </div>
    )}
    {riesgo === "asistencia_viajero" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Destino</label>
          <input {...register("viajero_destino")} placeholder="País o región" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Fechas de viaje</label>
          <input {...register("viajero_fechas")} placeholder="Desde - Hasta" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Edades de los viajeros</label>
          <input {...register("viajero_edades")} placeholder="Ej: 35, 32, 5" className={inputClass} />
        </div>
      </div>
    )}
    {riesgo === "bolso_protegido" && (
      <div>
        <label className={labelClass}>Detalle de objetos a asegurar</label>
        <textarea {...register("bolso_detalle")} rows={3} placeholder="Describí los objetos personales..." className={inputClass} />
      </div>
    )}
    {riesgo === "sepelio" && (
      <div>
        <label className={labelClass}>Cantidad de integrantes del grupo familiar</label>
        <input {...register("sepelio_integrantes")} type="number" placeholder="Cantidad" className={inputClass} />
      </div>
    )}
  </>
);

// ── Main component ──
export const QuoteFormFields = ({ riesgo, register, watch }: QuoteFormFieldsProps) => {
  if (!riesgo) return null;

  // Movilidad
  if (["autos", "motos"].includes(riesgo)) return <MovilidadFields register={register} />;
  if (riesgo === "flotas") return <FlotasFields register={register} />;

  // Micro-movilidad
  if (["bicicletas", "monopatines"].includes(riesgo)) return <MicroMovilidadFields register={register} />;

  // Hogar / Comercio
  if (["combinado_familiar", "integral_comercio", "incendio"].includes(riesgo)) return <HogarFields register={register} />;

  // Personas
  if (["art", "accidentes_personales"].includes(riesgo)) return <PersonasFields register={register} riesgo={riesgo} />;

  // RC Profesional
  if (riesgo === "responsabilidad_civil") return <RCProfesionalFields register={register} watch={watch} />;

  // Empresas / Especiales
  if (["cauciones", "transporte", "tro"].includes(riesgo)) return <EmpresasFields register={register} riesgo={riesgo} />;

  // Otros
  if (["tecnologia", "embarcaciones", "asistencia_viajero", "bolso_protegido", "sepelio"].includes(riesgo))
    return <OtrosFields register={register} riesgo={riesgo} />;

  return null;
};
