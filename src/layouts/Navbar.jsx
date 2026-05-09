import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - CE5 (Coherencia Visual) */}
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">MC</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Municipalidad de Cholchol</span>
          </div>

          {/* Menú Desktop - CE4 (Diseño Responsivo) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-blue-200 transition">Inicio</a>
            <a href="#" className="text-sm font-medium hover:text-blue-200 transition">Municipio</a>
            <a href="#" className="text-sm font-medium hover:text-blue-200 transition">Trámites</a>
            <a href="#" className="text-sm font-medium bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600 transition">Contacto</a>
          </div>

          {/* Botón Móvil - CE1 (Eventos) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable - CE3 (DOM Dinámico) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-800 pb-4 px-4`}>
        <a href="#" className="block py-2 text-sm hover:bg-blue-700 px-2 rounded">Inicio</a>
        <a href="#" className="block py-2 text-sm hover:bg-blue-700 px-2 rounded">Municipio</a>
        <a href="#" className="block py-2 text-sm hover:bg-blue-700 px-2 rounded">Trámites</a>
        <a href="#" className="block py-2 text-sm font-bold text-blue-200">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
