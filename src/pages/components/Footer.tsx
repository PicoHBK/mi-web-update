
function Footer() {
  return (
    <footer className="flex items-center h-16 w-full justify-between border-t-2 border-gray-300 max-w-[1920px] mt-auto">
      <p className="text-[12px] font-poppins font-light text-gray-400 max-w-[650px]">© 2024 Gustavo Paredez | Desarrollador Full Stack Junior | Explorando el mundo del desarrollo web con pasión y determinación</p>
      <div className="flex gap-2 opacity-75">
        <div className="w-8 h-8">
          <img src="https://img.icons8.com/?size=100&id=106564&format=png&color=000000" alt="linkedin" className="w-full h-full object-cover" />
        </div>
        <div className="w-8 h-8">
          <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="linkedin" className="w-full h-full object-cover" />
        </div>
      </div>
    </footer>
  )
}

export default Footer