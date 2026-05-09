import Navbar from './layouts/Navbar';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
// 1. Importa la imagen desde tu carpeta assets
import fondoHero from './assets/02.png'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      {/* Sección Héroe (Lo que ya tienes) */}
      <main className="flex-grow">

<header 
  className="relative bg-blue-900 py-24 px-4 overflow-hidden" 
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 50, 0.7)), url(${fondoHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="container mx-auto text-center relative z-10">
    <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
      Municipalidad de Cholchol
    </h1>
    <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
      Bienvenido al nuevo portal ciudadano. Aquí podrás realizar tus trámites, 
      conocer las últimas noticias y contactarte con nosotros de forma más simple.
    </p>
    
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg transform hover:scale-105">
        Pagos Online
      </button>
      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg transform hover:scale-105">
        Transparencia
      </button>
    </div>
  </div>
</header>
        <header className="bg-white py-16 px-4 shadow-sm border-b border-gray-100">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-extrabold text-blue-900 mb-6">
              Municipalidad de Cholchol
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Bienvenido al nuevo portal ciudadano. Aquí podrás realizar tus trámites, 
              conocer las últimas noticias y contactarte con nosotros de forma más simple.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg">
                Pagos Online
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg">
                Transparencia
              </button>
            </div>
          </div>
        </header>

        {/* Sección de Noticias - CE3 (DOM Dinámico) */}
        <Noticias />

        {/* Sección de Contacto - CE2 (Formulario y Validaciones) */}
        <Contacto />
    
      </main>

      {/* Footer - CE5 (Coherencia Visual) */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">© 2026 Municipalidad de Cholchol</p>
          <p className="text-blue-300 mt-2">Desarrollo Frontend - Unidad 2</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
