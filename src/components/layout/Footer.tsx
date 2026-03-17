import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const socials = [
  { icon: <FaFacebookF />, href: "#", hover: "hover:bg-[#1877F2]" },
  { icon: <FaXTwitter />, href: "#", hover: "hover:bg-black" },
  { icon: <FaInstagram />, href: "#", hover: "hover:bg-[#E4405F]" },
  { icon: <FaLinkedinIn />, href: "#", hover: "hover:bg-[#0A66C2]" },
];

const appLinks = ['Columnas', 'Muros Estructurales', 'Losas en Puentes', 'Puentes', 'Pilotes', 'Túneles', 'Cimentaciones'];

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 50;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101418] pt-[144px] pb-[55px]">
      <div className="container-std">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[34px] mb-[50px]">
          {/* COL 1 */}
          <div className="bg-[#1C2024]">
            <div className="p-[50px_40px_40px_40px]">
              <img
                src="/images/logo-wb.webp"
                alt="F MAX RD"
                className="h-[52px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-[21px] px-10 pb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <FaPhone className="text-primary text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+18294707193" className="text-white hover:text-primary transition text-base">
                    (829) 470-7193
                  </a>
                  <a href="tel:+18292594180" className="text-white hover:text-primary transition text-base">
                    (829) 259-4180
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <FaEnvelope className="text-primary text-sm" />
                </div>
                <a href="mailto:info@fmaxrd.com" className="text-white hover:text-primary transition text-base">
                  info@fmaxrd.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary text-sm" />
                </div>
                <p className="text-white text-base">
                  Calle Max Henríquez Ureña No. 84,
                  <br />
                  3er Nivel, Piantini, D.N.
                </p>
              </div>
            </div>

            <div className="hidden">
              {socials.map(({ icon, href, hover }, index) => (
              <a
                key={index}
                href={href}
                className={`w-8 h-8 bg-dark text-white flex items-center justify-center transition ${hover}`}
              >
                {icon}
              </a>
            ))}
            </div>
          </div>

          {/* COL 2 */}
          <div className="bg-[#1C2024] p-[40px]">
            <div className="flex flex-wrap gap-[34px] items-start">
              <div className="min-w-[140px]">
                <h3 className="font-heading font-bold text-white mb-4 text-base">Páginas</h3>
                <div className="flex flex-col gap-2">
                  <span onClick={() => scrollTo('inicio')} className="text-white/70 hover:text-primary transition text-sm block cursor-pointer">Inicio</span>
                  <span onClick={() => scrollTo('nosotros')} className="text-white/70 hover:text-primary transition text-sm block cursor-pointer">Nosotros</span>
                  <span onClick={() => scrollTo('servicios')} className="text-white/70 hover:text-primary transition text-sm block cursor-pointer">Servicios</span>
                  <span onClick={() => scrollTo('proyectos')} className="text-white/70 hover:text-primary transition text-sm block cursor-pointer">Proyectos</span>
                  <span onClick={() => scrollTo('contacto')} className="text-white/70 hover:text-primary transition text-sm block cursor-pointer">Contacto</span>
                </div>
              </div>

              <div className="min-w-[140px]">
                <h3 className="font-heading font-bold text-white mb-4 text-base">Aplicaciones</h3>
                <div className="flex flex-col gap-2">
                  {appLinks.map((link) => (
                    <span key={link} className="text-white/70 text-sm block">{link}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-[21px]">
          <a href="/privacidad" className="text-white/70 hover:text-white transition text-sm font-body">
            Política de Privacidad
          </a>
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
