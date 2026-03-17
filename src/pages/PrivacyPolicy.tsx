import { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-[#101418] py-[55px]">
        <div className="container-std">
          <img
            src="/images/logo-bw.jpeg"
            alt="F MAX RD"
            className="h-[50px] w-auto object-contain mb-[34px] cursor-pointer"
            onClick={() => window.location.href = '/'}
          />
          <h1 className="font-heading font-bold text-white text-[40px] md:text-[52px]">
            Política de Privacidad
          </h1>
          <p className="text-white/70 font-body text-base mt-[13px]">
            Última actualización: 16 de marzo de 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-std py-[89px] max-w-[800px]">

        <section className="mb-[55px]">
          <h2 className="font-heading font-bold text-dark text-[28px] mb-[21px]">
            1. Información que recopilamos
          </h2>
          <p className="text-body-text font-body text-base leading-relaxed mb-[13px]">
            Cuando usted completa el formulario de contacto en nuestro sitio web, recopilamos la siguiente información:
          </p>
          <ul className="list-disc pl-[21px] text-body-text font-body text-base leading-relaxed flex flex-col gap-[8px]">
            <li>Nombre completo</li>
            <li>Número de teléfono</li>
            <li>Tipo de proyecto de interés</li>
          </ul>
        </section>

        <section className="mb-[55px]">
          <h2 className="font-heading font-bold text-dark text-[28px] mb-[21px]">
            2. Cómo usamos su información
          </h2>
          <p className="text-body-text font-body text-base leading-relaxed mb-[13px]">
            La información recopilada se utiliza exclusivamente para:
          </p>
          <ul className="list-disc pl-[21px] text-body-text font-body text-base leading-relaxed flex flex-col gap-[8px]">
            <li>Responder a su consulta o solicitud de cotización</li>
            <li>Comunicarnos con usted a través de WhatsApp para brindarle información sobre nuestros servicios</li>
            <li>Coordinar visitas técnicas a su obra</li>
          </ul>
        </section>

        <section className="mb-[55px]">
          <h2 className="font-heading font-bold text-dark text-[28px] mb-[21px]">
            3. Compartición de datos
          </h2>
          <p className="text-body-text font-body text-base leading-relaxed">
            F MAX RD no vende, alquila ni comparte su información personal con terceros. Sus datos son utilizados únicamente por nuestro equipo para atender su solicitud.
          </p>
        </section>

        <section className="mb-[55px]">
          <h2 className="font-heading font-bold text-dark text-[28px] mb-[21px]">
            4. Almacenamiento de datos
          </h2>
          <p className="text-body-text font-body text-base leading-relaxed">
            Los datos enviados a través del formulario de contacto son transmitidos directamente a nuestro WhatsApp empresarial y no son almacenados en ningún servidor externo. No mantenemos bases de datos con información de usuarios.
          </p>
        </section>

        <section className="mb-[55px]">
          <h2 className="font-heading font-bold text-dark text-[28px] mb-[21px]">
            5. Sus derechos
          </h2>
          <p className="text-body-text font-body text-base leading-relaxed mb-[13px]">
            Usted tiene derecho a:
          </p>
          <ul className="list-disc pl-[21px] text-body-text font-body text-base leading-relaxed flex flex-col gap-[8px]">
            <li>Solicitar información sobre los datos que tenemos sobre usted</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Retirar su consentimiento en cualquier momento</li>
          </ul>
          <p className="text-body-text font-body text-base leading-relaxed mt-[13px]">
            Para ejercer estos derechos contáctenos en:
            <a href="mailto:info@fmaxrd.com" className="text-secondary hover:text-primary transition ml-1">
              info@fmaxrd.com
            </a>
          </p>
        </section>

        <section className="mb-[55px]">
          <h2 className="font-heading font-bold text-dark text-[28px] mb-[21px]">
            6. Cookies
          </h2>
          <p className="text-body-text font-body text-base leading-relaxed">
            Este sitio web no utiliza cookies de seguimiento ni herramientas de análisis de terceros. No se recopila ningún dato de navegación.
          </p>
        </section>

        <section className="mb-[55px]">
          <h2 className="font-heading font-bold text-dark text-[28px] mb-[21px]">
            7. Contacto
          </h2>
          <p className="text-body-text font-body text-base leading-relaxed">
            Si tiene preguntas sobre esta política de privacidad puede contactarnos en:
          </p>
          <div className="mt-[21px] flex flex-col gap-[8px] text-body-text font-body text-base">
            <p className="flex items-center gap-2"><FaEnvelope className="text-secondary shrink-0" /> info@fmaxrd.com</p>
            <p className="flex items-center gap-2"><FaPhone className="text-secondary shrink-0" /> (829) 470-7193 / (829) 259-4180</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-secondary shrink-0" /> Calle Max Henríquez Ureña No. 84, 3er Nivel, Piantini, D.N.</p>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-[34px] mt-[34px]">
          <button
            onClick={() => window.location.href = '/'}
            className="btn-dark"
          >
            ← Volver al sitio
          </button>
        </div>

      </div>
    </div>
  );
}
