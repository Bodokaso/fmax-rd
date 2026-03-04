import { useState } from 'react';
import { pricingPlans } from '../../data/pricing';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="precios" className="py-[120px] bg-white">
      <div className="container-std">
        {/* Title area */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-secondary text-[18px] mb-3">
            <span>⚡</span>
            <span>PLANES DE SERVICIO</span>
          </div>
          <h2 className="font-heading text-[40px] font-bold text-dark">
            Elige el Plan Correcto
          </h2>
          <p className="text-body-text mt-2">
            Sin tarjeta de crédito. Cancela cuando quieras.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="font-heading font-semibold text-dark">Mensual</span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-12 h-6 rounded-full border-0 transition-colors duration-200 cursor-pointer"
            style={{ backgroundColor: isAnnual ? '#1756B5' : '#F5C518' }}
          >
            <div
              className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200"
              style={{ transform: isAnnual ? 'translateX(24px)' : 'translateX(4px)' }}
            />
          </button>

          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold text-dark">Anual</span>
            <span className="bg-secondary text-white text-xs px-2 py-0.5 rounded font-heading font-semibold">
              25% off
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-[15px] mt-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-[10px] rounded-sm transition-all duration-200 border-2 ${plan.featured ? 'border-primary shadow-lg' : 'border-gray-100'}`}
              style={plan.featured ? { transform: 'scale(1.02)' } : {}}
            >
              <div className="bg-white p-6 flex flex-col gap-4 h-full">
                <span className="text-3xl">
                  {plan.id === 1 ? '⭐' : plan.featured ? '💎' : '👑'}
                </span>

                <h3 className="font-heading font-bold text-dark text-2xl">{plan.name}</h3>

                <p className="text-body-text text-sm">{plan.subtitle}</p>

                <div className="w-full h-px bg-gray-100" />

                <div className="flex items-end gap-1">
                  <span className="font-heading font-bold text-dark text-[40px] leading-none">
                    ${isAnnual ? Math.floor(plan.price * 0.75) : plan.price}
                  </span>
                  <span className="text-body-text text-sm mb-1">/{plan.period}</span>
                </div>

                <div className="flex flex-col gap-2 flex-1 mt-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <span className="text-primary">⚡</span>
                      <span className="text-body-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  {plan.featured ? (
                    <button className="btn-primary w-full justify-center">Comenzar</button>
                  ) : (
                    <button className="btn-dark w-full justify-center">Comenzar</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
