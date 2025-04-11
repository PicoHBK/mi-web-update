function Footer() {
  return (
    <footer className="w-full bg-white border-t border-mylight-300 font-poppins text-sm text-mydark-700">
      <div className="max-w-[1920px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección Sobre mí */}
        <div>
          <h4 className="text-myprim-600 font-semibold mb-2">Sobre mí</h4>
          <p className="text-xs text-mydark-600">
            Desarrollador Full Stack Junior enfocado en crear experiencias web funcionales y accesibles.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-myprim-600 font-semibold mb-2">Enlaces útiles</h4>
          <ul className="space-y-1 text-xs text-mydark-600">
            <li><a href="/" className="hover:text-myprim-500 transition">Inicio</a></li>
            <li><a href="/about" className="hover:text-myprim-500 transition">Sobre mí</a></li>
            <li><a href="/proyectos" className="hover:text-myprim-500 transition">Proyectos</a></li>
            <li><a href="/contacto" className="hover:text-myprim-500 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-myprim-600 font-semibold mb-2">Redes sociales</h4>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=106564&format=png&color=000000"
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="GitHub"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-mylight-200 text-[12px] text-mydark-500">
        © 2022 - 2025 Gustavo Paredez | Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
