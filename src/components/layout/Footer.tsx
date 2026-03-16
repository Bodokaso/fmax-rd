import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaFacebookF />, href: "#", hover: "hover:bg-[#1877F2]" },
  { icon: <FaXTwitter />, href: "#", hover: "hover:bg-black" },
  { icon: <FaInstagram />, href: "#", hover: "hover:bg-[#E4405F]" },
  { icon: <FaLinkedinIn />, href: "#", hover: "hover:bg-[#0A66C2]" },
];

const pageLinks = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Precios', 'Contacto'];
const appLinks = ['Columnas', 'Muros Estructurales', 'Losas en Puentes', 'Puentes', 'Pilotes', 'Túneles', 'Cimentaciones'];
const utilLinks = ['Guía de Estilos', 'Licencias', 'Changelog', 'Contacto'];

const Footer = () => {
  return (
    <footer className="bg-[#101418] pt-[144px] pb-[55px]">
      <div className="container-std">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[34px] mb-[50px]">
          {/* COL 1 */}
          <div className="bg-[#1C2024]">
            <div className="p-[50px_40px_40px_40px]">
              <img
                src="/images/logo-wb.jpg"
                alt="F MAX RD"
                className="h-[52px] w-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-[21px] px-10 pb-8">
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

            <div className="flex gap-[21px] px-10 pb-10">
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
