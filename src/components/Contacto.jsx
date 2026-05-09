import { useState } from 'react';

const Contacto = () => {
  // Estado para los campos del formulario (CE2)
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  // Estado para los errores (Validación en tiempo real - CE2)
  const [errores, setErrores] = useState({});

  const validar = (name, value) => {
    let error = "";
    if (name === "nombre" && value.trim().length < 3) error = "El nombre es muy corto.";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) error = "Email no válido.";
    if (name === "mensaje" && value.trim() === "") error = "El mensaje no puede estar vacío.";
    
    setErrores(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validar(name, value); // Validación en tiempo real (CE2)
  };

  return (
    <section className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl my-10 border border-gray-100">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contáctanos</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Nombre Completo</label>
          <input 
            name="nombre"
            type="text"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleChange}
          />
          {errores.nombre && <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Correo Electrónico</label>
          <input 
            name="email"
            type="email"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errores.email ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleChange}
          />
          {errores.email && <p className="text-red-500 text-xs mt-1">{errores.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Mensaje</label>
          <textarea 
            name="mensaje"
            rows="4"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errores.mensaje ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleChange}
          ></textarea>
          {errores.mensaje && <p className="text-red-500 text-xs mt-1">{errores.mensaje}</p>}
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all shadow-lg transform hover:-translate-y-1"
        >
          Enviar Solicitud
        </button>
      </form>
    </section>
  );
};

export default Contacto;
