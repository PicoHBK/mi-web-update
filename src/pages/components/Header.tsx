import logov1 from "../../assets/logo/logov1.png"
function Header() {
  return (
    <header className="flex  w-full justify-between items-center min-h-20 max-w-[1920px]">
        <div className="h-10 w-10 lg:h-16 lg:w-16">
            <img src={logov1} alt="" className="w-full h-full object-fill" />
        </div>
        <nav className="flex h-full items-center justify-center">
            <ul className="flex gap-3 items-center">
                <li>
                    <a href="/" className="text-lg font-normal text-mydark-800 font-poppins">Home</a>
                </li>
                <li>
                    <a href="/" className="text-lg font-regular text-mydark-800 font-poppins">About</a>
                </li>
                <li>
                    <a href="/" className="text-lg font-regular text-mydark-800 font-poppins">Contact</a>
                </li>
            </ul>
        </nav>
        <div className="h-16 w-16">

        </div>
    </header>
  )
}

export default Header