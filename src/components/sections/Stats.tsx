import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';

const stats = [
  { value: 10, suffix: '%', label: 'Ahorro en Acero' },
  { value: 100, suffix: '%', label: 'Normativas locales e internacionales cumplidas' },
];

const StatCounter = ({
  value,
  suffix,
  label,
  isActive,
}: {
  value: number;
  suffix: string;
  label: string;
  isActive: boolean;
}) => {
  const count = useCountUp(value, 2000, isActive);
  return (
    <div className="flex flex-col items-center text-center w-[45%] md:w-auto">
      <div className="flex items-end gap-1 mb-2">
        <span className="font-heading text-[40px] md:text-[60px] font-bold text-white leading-none">
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-white/70 font-body text-base">{label}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative pt-[89px] md:pt-[120px] pb-0">
      {/* Dark background block */}
      <div
        className="absolute top-0 left-0 w-full bg-[#101418] z-0"
        style={{ height: '600px' }}
      />

      <div className="relative z-10 container-std">
        {/* Stats bar */}
        <div
          ref={ref}
          className="flex flex-wrap justify-center md:justify-between items-center gap-[21px] md:gap-[34px] w-full mb-[34px] md:mb-[55px] py-[20px]"
        >
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isActive={inView}
              />
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-[60px] bg-white/20" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Grid */}
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 items-center md:pr-[40px]">
          {/* COL 1 — image + phone overlay */}
          <div className="relative w-full min-h-[280px] md:min-h-[525px]">
            <img src="/images/stats-cta.jpeg" alt="F MAX RD equipo" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 flex items-center gap-[13px] p-[13px] md:p-[20px] bg-secondary w-full md:w-[320px] min-h-[80px] md:h-[100px] z-10">
              <div className="w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-dark text-xl">📞</span>
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-base">Teléfono</h3>
                <a href="tel:+18294707193" className="text-white hover:text-primary">
                  (829) 470-7193
                </a>
              </div>
            </div>
          </div>

          {/* COL 2 — CTA text */}
          <div className="flex flex-col justify-center gap-[13px] md:gap-[21px] p-[34px] md:py-10 md:pl-0">
            <div className="flex items-center gap-2 text-secondary text-[18px]">
              <span>⚡</span>
              <span>CONTÁCTANOS</span>
            </div>

            <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-dark leading-tight">
              ¡Llámanos o Escríbenos Para Comenzar!
            </h2>

            <p className="text-body-text text-[16px] md:text-[20px] font-body">
              Llevamos nuestra máquina directamente a tu obra. Cotiza sin compromiso para
              columnas, muros, puentes o cimentaciones.
            </p>

            <button
              className="btn-primary mt-2"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
