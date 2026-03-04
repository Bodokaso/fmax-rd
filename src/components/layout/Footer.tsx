import { useState } from 'react';

const socials = [
  { label: 'FB', href: '#' },
  { label: 'X', href: '#' },
  { label: 'IG', href: '#' },
  { label: 'IN', href: '#' },
];

const pageLinks = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Precios', 'Contacto'];
const appLinks = ['Columnas', 'Puentes', 'Losas', 'Pilotes', 'Muros', 'Cimentaciones'];
const utilLinks = ['Guía de Estilos', 'Licencias', 'Changelog', 'Contacto'];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#101418] pt-[60px] md:pt-[100px] pb-[45px]">
      <div className="container-std">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[50px]">
          {/* COL 1 */}
          <div className="bg-[#1C2024]">
            <div className="p-[50px_40px_40px_40px]">
              <span className="text-white font-heading font-bold text-2xl">F MAX RD</span>
            </div>

            <div className="flex flex-col gap-4 px-10 pb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                  📞
                </div>
                <a href="tel:+18294707193" className="text-white hover:text-primary transition text-base">
                  (829) 470-7193 / (829) 259-4180
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                  ✉️
                </div>
                <a href="mailto:fmaxrd@gmail.com" className="text-white hover:text-primary transition text-base">
                  fmaxrd@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                  📍
                </div>
                <p className="text-white text-base">
                  Calle Max Henríquez Ureña No. 84,
                  <br />
                  3er Nivel, Piantini, D.N.
                </p>
              </div>
            </div>

            <div className="flex gap-3 px-10 pb-10">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 bg-dark flex items-center justify-center text-white text-xs hover:bg-primary hover:text-dark transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2 */}
          <div className="bg-[#1C2024] p-[40px]">
            <div className="flex flex-wrap gap-[30px] md:gap-[50px] items-start mb-8">
              <div className="min-w-[140px]">
                <h3 className="font-heading font-bold text-white mb-4 text-base">Páginas</h3>
                <div className="flex flex-col gap-2">
                  {pageLinks.map((link) => (
                    <a key={link} href="#" className="text-white/70 hover:text-primary transition text-sm block">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div className="min-w-[140px]">
                <h3 className="font-heading font-bold text-white mb-4 text-base">Aplicaciones</h3>
                <div className="flex flex-col gap-2">
                  {appLinks.map((link) => (
                    <a key={link} href="#" className="text-white/70 hover:text-primary transition text-sm block">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div className="min-w-[140px]">
                <h3 className="font-heading font-bold text-white mb-4 text-base">Utilidades</h3>
                <div className="flex flex-col gap-2">
                  {utilLinks.map((link) => (
                    <a key={link} href="#" className="text-white/70 hover:text-primary transition text-sm block">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="text-white/70 font-body text-sm block mb-2">
                Suscríbete al Newsletter
              </label>
              <form onSubmit={handleNewsletter} className="flex w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-[20px] bg-[#101418] text-white placeholder:text-white/40 border-0 focus:outline-none focus:ring-1 focus:ring-primary font-body text-base min-w-0"
                  placeholder="Ingresa tu correo electrónico"
                />
                <button type="submit" className="btn-primary shrink-0 rounded-none">
                  Suscribirse
                </button>
              </form>
              {subscribed && (
                <p className="text-primary text-sm mt-2">¡Gracias por suscribirte!</p>
              )}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="text-center pt-[40px] border-t border-white/10">
          <p className="text-white text-[20px] font-body">
            Copyright © F MAX RD | República Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
