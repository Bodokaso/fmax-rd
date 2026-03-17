import { FaWhatsapp } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#101418] flex flex-col items-center justify-center gap-[21px] text-center px-[34px]">
      <img
        src="/images/logo-bw.webp"
        alt="F MAX RD"
        className="h-[73px] w-auto object-contain mb-[21px] border-2 border-dark p-1"
      />
      <h1 className="font-heading font-bold text-white text-[84px] leading-none">
        404
      </h1>
      <p className="font-heading font-bold text-primary text-[28px]">
        Página no encontrada
      </p>
      <p className="text-white/70 font-body text-[18px] max-w-[400px]">
        La página que buscas no existe o fue movida.
      </p>
      <div className="flex gap-[21px] mt-[21px] flex-wrap justify-center">
        <button
          onClick={() => window.location.href = '/'}
          className="btn-primary"
        >
          Volver al inicio
        </button>
        <a
          href="https://wa.me/18294707193?text=Hola%20F%20MAX%20RD%2C%20necesito%20ayuda."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark inline-flex items-center gap-[13px]"
        >
          <FaWhatsapp className="text-green-400 text-xl" />
          Contáctanos
        </a>
      </div>
    </div>
  );
}
