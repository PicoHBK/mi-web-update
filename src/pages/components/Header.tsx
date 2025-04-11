import { useRef } from "react";
import logolottie from "../../assets/logo/logolottiev1.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

function Header() {
  const playerRef = useRef<Player>(null);

  const handleClick = () => {
    playerRef.current?.play();
  };

  return (
    <header className=" w-full backdrop-blur-sm font-poppins z-50">
      <div className="max-w-[1920px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="h-12 w-12 lg:h-16 lg:w-16 hover:scale-105 active:scale-95 transition-transform"
          onMouseEnter={handleClick}
          onClick={handleClick}
          onMouseUp={handleClick}
        >
          <Player
            src={logolottie}
            className="w-full h-full object-cover"
            ref={playerRef}
          >
            <Controls visible={false} />
          </Player>
        </Link>

        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link
                to="/"
                className="relative text-base lg:text-lg font-semibold text-mydark-800 hover:text-myprim-500 transition-colors group"
              >
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-myprim-500 transition-all group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative text-base lg:text-lg font-semibold text-mydark-800 hover:text-myprim-500 transition-colors group"
              >
                Sobre mí
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-myprim-500 transition-all group-hover:w-full" />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="w-12 lg:w-16" />
      </div>
    </header>
  );
}

export default Header;
