import { useState } from 'react';

const navLinks = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Precios', id: 'precios' },
  { label: 'Contacto', id: 'contacto' },
];

const socials = [
  { label: 'FB', href: '#' },
  { label: 'X', href: '#' },
  { label: 'IG', href: '#' },
  { label: 'IN', href: '#' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000]">
      {/* Top bar */}
      <div className="h-[61px] bg-white border-b border-gray-100 px-[20px] flex justify-between items-center">
        <div className="flex gap-6">
          <a
            href="tel:+18294707193"
            className="text-sm text-body-text hover:text-primary transition"
          >
            (829) 470-7193
          </a>
          <a
            href="mailto:fmaxrd@gmail.com"
            className="text-sm text-body-text hover:text-primary transition"
          >
            fmaxrd@gmail.com
          </a>
        </div>
        <div className="flex gap-3">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="w-8 h-8 bg-dark text-white text-xs flex items-center justify-center hover:bg-primary hover:text-dark transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div className="h-[80px] bg-white border-b border-gray-100 px-[20px] flex justify-between items-center">
        <span className="font-heading font-bold text-2xl text-dark">F MAX RD</span>

        <nav className="hidden md:flex gap-8">
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
          <button
            className="btn-primary text-sm px-5 py-3"
            onClick={() => scrollTo('contacto')}
          >
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
