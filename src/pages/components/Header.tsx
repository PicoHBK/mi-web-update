
function Header() {
  return (
    <header className="flex  w-full justify-center items-center min-h-16">
        <nav className="flex h-full items-center justify-center">
            <ul className="flex gap-3 items-center">
                <li>
                    <a href="/" className="text-sm font-regular text-mydark-800 font-poppins">Home</a>
                </li>
                <li>
                    <a href="/" className="text-sm font-regular text-mydark-800 font-poppins">About</a>
                </li>
                <li>
                    <a href="/" className="text-sm font-regular text-mydark-800 font-poppins">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header