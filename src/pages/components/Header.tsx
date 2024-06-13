import { useRef } from "react";
import logolottie from "../../assets/logo/logolottiev1.json";
import {
  Player,
  Controls,
} from "@lottiefiles/react-lottie-player";

function Header() {
    const playerRef = useRef<Player>(null);

    const handleClick = () => {
        playerRef.current?.play();
        
    }


  return (
    <header className="flex  w-full justify-between items-center min-h-20 max-w-[1920px]">
      <div className="h-10 w-10 lg:h-16 lg:w-16 hover:scale-105 transition active:scale-95" onMouseEnter={handleClick} onClick={handleClick} onMouseUp={handleClick}>
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
      </div>
      <nav className="flex h-full items-center justify-center">
        <ul className="flex gap-3 items-center">
          <li>
            <a
              href="/"
              className="text-lg font-normal text-mydark-800 font-poppins"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-lg font-regular text-mydark-800 font-poppins"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-lg font-regular text-mydark-800 font-poppins"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="h-16 w-16"></div>
    </header>
  );
}

export default Header;
