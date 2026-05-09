import { useState } from 'react';

const Noticias = () => {
  // Datos iniciales - CE6 (Jerarquía y Estética)
  const noticiasIniciales = [
    { id: 1, titulo: "Beca Municipal 2026", detalle: "Postulaciones abiertas para estudiantes de educación superior." },
    { id: 2, titulo: "Taller de Telar Mapuche", detalle: "Inscríbete en el centro cultural para los cursos de invierno." }
  ];

  const [noticias, setNoticias] = useState(noticiasIniciales);

  // Función para agregar contenido al DOM - CE3
  const agregarNoticia = () => {
    const nueva = {
      id: Date.now(),
      titulo: "Nueva Obra Vial",
      detalle: "Mejoramiento de caminos rurales en el sector de Huamaqui."
    };
    setNoticias([...noticias, nueva]);
  };

  // Función para eliminar contenido del DOM - CE3
  const eliminarNoticia = (id) => {
    setNoticias(noticias.filter(n => n.id !== id));
  };

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Noticias Comunales</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map(noticia => (
            <div key={noticia.id} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-700 animate-fade-in">
              <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
              <p className="text-gray-600 mb-4">{noticia.detalle}</p>
              <button 
                onClick={() => eliminarNoticia(noticia.id)}
                className="text-red-600 hover:text-red-800 text-sm font-bold"
              >
                Ocultar Noticia
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={agregarNoticia}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold transition shadow-md"
          >
            + Cargar Más Noticias
          </button>
        </div>
      </div>
    </section>
  );
};

export default Noticias;

