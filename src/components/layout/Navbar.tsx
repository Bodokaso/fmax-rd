import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Contacto', id: 'contacto' },
];

const socials = [
  { icon: <FaFacebookF />, href: "#", hover: "hover:bg-[#1877F2]" },
  { icon: <FaXTwitter />, href: "#", hover: "hover:bg-black" },
  { icon: <FaInstagram />, href: "#", hover: "hover:bg-[#E4405F]" },
  { icon: <FaLinkedinIn />, href: "#", hover: "hover:bg-[#0A66C2]" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 144;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000]">
      {/* Top bar */}
      <div className="h-[55px] bg-white border-b border-gray-100 px-[20px] flex justify-between items-center">
        <div className="flex gap-[17px] items-center">
          <div className="flex gap-[8px] items-center">
            <a href="tel:+18294707193" className="text-sm text-body-text hover:text-primary transition">
              (829) 470-7193
            </a>
            <span className="text-body-text text-sm">/</span>
            <a href="tel:+18292594180" className="text-sm text-body-text hover:text-primary transition">
              (829) 259-4180
            </a>
          </div>
          <a href="mailto:info@fmaxrd.com" className="hidden md:block text-sm text-body-text hover:text-primary transition">
            info@fmaxrd.com
          </a>
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

      {/* Main nav */}
      <div className="h-[89px] bg-white border-b border-gray-100 px-[20px] flex justify-between items-center">
        <img
          src="/images/logo-bw.jpeg"
          alt="F MAX RD"
          className="h-full w-auto object-contain py-[8px]"
        />

        <nav className="hidden md:flex gap-[34px]">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-heading font-semibold text-[18px] text-dark hover:text-secondary transition cursor-pointer bg-transparent border-0 p-0"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="btn-primary text-sm px-5 py-3" onClick={() => scrollTo('contacto')}>
            Contáctanos
          </button>
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-dark" />
            <span className="block w-6 h-0.5 bg-dark" />
            <span className="block w-6 h-0.5 bg-dark" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-white border-t border-gray-100 px-[20px] py-4 flex flex-col gap-4 md:hidden">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMenuOpen(false); }}
              className="font-heading font-semibold text-[18px] text-dark hover:text-secondary transition text-left bg-transparent border-0 p-0 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
