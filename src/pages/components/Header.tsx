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
    <header className="flex  w-full justify-between items-center min-h-20 max-w-[1920px]  ">
      <div
        className="h-10 w-10 lg:h-16 lg:w-16 hover:scale-105 transition active:scale-95"
        onMouseEnter={handleClick}
        onClick={handleClick}
        onMouseUp={handleClick}
      >
        <Link to={"/"}>
          <Player
            src={logolottie}
            className="w-full h-full object-cover"
            ref={playerRef}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </Link>
      </div>
      <nav className="flex h-full items-center justify-center">
        <ul className="flex gap-3 items-center">
          <li>
            <Link
              to={"/"}
              className="text-lg font-normal text-mydark-800 font-poppins hover:bg-slate-200 p-2 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="text-lg font-normal text-mydark-800 font-poppins hover:bg-slate-200 p-2 transition"
            >
              Sobre mi
            </Link>
          </li>
        </ul>
      </nav>
      <div className="h-16 w-16"></div>
    </header>
  );
}

export default Header;
