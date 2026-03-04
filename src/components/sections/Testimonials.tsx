import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setActiveIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla, onSelect]);

  const arrows = (
    <div className="flex gap-2">
      <button
        onClick={() => embla?.scrollPrev()}
        className="w-[60px] h-[60px] bg-[#101418] text-white flex items-center justify-center hover:brightness-110 transition cursor-pointer border-0"
      >
        ←
      </button>
      <button
        onClick={() => embla?.scrollNext()}
        className="w-[60px] h-[60px] bg-[#101418] text-white flex items-center justify-center hover:brightness-110 transition cursor-pointer border-0"
      >
        →
      </button>
    </div>
  );

  return (
    <section className="bg-[#EEF3F6] py-[60px] md:py-[120px]">
      <div className="container-lg">
        <div style={{ maxWidth: '1200px' }}>
          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-[50px]">
            <div>
              <div className="flex items-center gap-2 text-primary text-[18px] mb-3">
                <span>⚡</span>
                <span>TESTIMONIOS</span>
              </div>
              <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-dark leading-[48px]">
                Lo que Dicen Nuestros Clientes
              </h2>
            </div>
            {/* Arrows — desktop: top right */}
            <div className="hidden md:flex">{arrows}</div>
          </div>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden max-w-full md:max-w-[575px]">
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-none w-full md:w-[575px] min-w-0 pr-4">
                  <div className="bg-white p-[55px_35px_45px_35px] relative mb-6">
                    <p className="text-body-text text-[22px] italic leading-relaxed">
                      {testimonial.quote}
                    </p>

                    <div className="flex gap-1 mt-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-primary text-lg">⭐</span>
                      ))}
                    </div>

                    <div className="absolute bottom-[-10px] left-[40px] opacity-20">
                      <div
                        className="grid gap-1"
                        style={{ gridTemplateColumns: 'repeat(6, 6px)', width: '64px' }}
                      >
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-body-text" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <div className="w-[60px] h-[60px] rounded-full bg-gray-300 shrink-0" />
                    <div>
                      <h3 className="font-heading font-bold text-dark text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-body-text text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows — mobile: below carousel */}
          <div className="flex md:hidden justify-start mt-6">{arrows}</div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => embla?.scrollTo(index)}
                className="w-2 h-2 rounded-full border-0 cursor-pointer transition-colors duration-200"
                style={{
                  backgroundColor: activeIndex === index ? '#101418' : 'rgba(16,20,24,0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
