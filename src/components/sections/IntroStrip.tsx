// TODO: Replace 'f58d82e8-1af1-4a27-90ed-f60ef4571663' with actual
// Web3Forms access key from https://web3forms.com
// Free plan sends up to 250 emails/month

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData } from '../../types';

const inputClass =
  'w-full bg-white border-0 px-4 py-3 mb-1 font-body text-dark text-base focus:outline-none focus:ring-2 focus:ring-dark';
const errorClass = 'text-red-700 text-xs mt-1 mb-3 block';

const IntroStrip = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f58d82e8-1af1-4a27-90ed-f60ef4571663',
          subject: 'Nueva Consulta — F MAX RD',
          from_name: 'F MAX RD Website',
          name: data.fullName,
          phone: data.phone,
          project_type: data.projectType,
          to: 'fmaxrd@gmail.com',
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 pt-[40px] pb-[40px] bg-white md:pt-[70px] md:pb-0 md:bg-transparent">
      <div className="container-std flex flex-col md:flex-row justify-between items-center gap-[20px]">
        {/* LEFT — feature points (hidden on mobile) */}
        <div className="hidden md:flex flex-row items-center gap-[20px] flex-1">
          {/* Point 1 */}
          <div className="flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-secondary rounded flex items-center justify-center text-white text-xl shrink-0">
              ⚡
            </div>
            <div>
              <h2 className="font-heading font-semibold text-[24px] text-dark">
                ¡Dile Adiós al Traslapo!
              </h2>
              <p className="text-body-text text-base mt-1">
                Los conectores mecánicos eliminan el traslape tradicional y te ahorran hasta
                un 10% del acero.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-[60px] bg-gray-200 mx-4 shrink-0" />

          {/* Point 2 */}
          <div className="flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-secondary rounded flex items-center justify-center text-white text-xl shrink-0">
              🔧
            </div>
            <div>
              <h2 className="font-heading font-semibold text-[24px] text-dark">
                Aplicación Rápida
              </h2>
              <p className="text-body-text text-base mt-1">
                Instalación eficiente en obra con nuestra máquina portátil de 80 kg.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — overlapping form */}
        <div className="w-full md:w-[426px] shrink-0">
          <div
            className="relative z-20 bg-[rgba(245,197,24,0.92)] p-[50px_35px_40px_35px] w-full md:w-[426px] shadow-2xl"
            style={{ marginTop: isMobile ? '0px' : '-340px' }}
          >
            <h3 className="font-heading font-bold text-dark text-[24px] mb-6">
              ¡Cotiza Sin Compromiso!
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10">
                <span className="text-4xl">✅</span>
                <h3 className="font-heading font-bold text-dark text-center">
                  ¡Mensaje Recibido!
                </h3>
                <p className="text-dark text-center">
                  Nos pondremos en contacto contigo pronto.
                </p>
                <button
                  onClick={() => { setSubmitted(false); reset(); }}
                  className="btn-dark mt-2"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="text-dark font-semibold text-sm mb-1 block">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className={inputClass}
                  {...register('fullName', { required: 'Requerido', minLength: 2 })}
                />
                {errors.fullName && (
                  <span className={errorClass}>{errors.fullName.message}</span>
                )}

                <label className="text-dark font-semibold text-sm mb-1 block">Teléfono</label>
                <input
                  type="tel"
                  className={inputClass}
                  {...register('phone', { required: 'Requerido' })}
                />
                {errors.phone && (
                  <span className={errorClass}>{errors.phone.message}</span>
                )}

                <label className="text-dark font-semibold text-sm mb-1 block">
                  Tipo de Proyecto
                </label>
                <select
                  className={`${inputClass} appearance-none`}
                  {...register('projectType', {
                    required: 'Requerido',
                    validate: (v) => v !== '' || 'Requerido',
                  })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona el tipo de proyecto
                  </option>
                  <option value="columnas">Columnas</option>
                  <option value="muros">Muros</option>
                  <option value="puentes">Puentes</option>
                  <option value="pilotes">Pilotes</option>
                  <option value="cimentaciones">Cimentaciones</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.projectType && (
                  <span className={errorClass}>{errors.projectType.message}</span>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-dark text-white font-heading font-semibold py-[20px] text-[18px] transition mt-4 ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110 cursor-pointer'
                  }`}
                >
                  {loading ? 'Enviando...' : 'Enviar Consulta'}
                </button>

                {error && (
                  <div className="mt-2">
                    <p className="text-red-700 text-sm mt-2 text-center">
                      Hubo un error al enviar. Por favor llámanos directamente al (829) 470-7193
                    </p>
                    <button
                      type="button"
                      onClick={() => setError(false)}
                      className="text-dark underline text-xs mt-1 block text-center w-full"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroStrip;
