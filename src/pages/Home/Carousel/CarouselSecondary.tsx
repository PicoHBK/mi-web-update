import { Controls, Player } from "@lottiefiles/react-lottie-player";
import lottie from "../../../assets/aboutmelottie.json";

const CarouselSecondary = () => {
  return (
    <section className=" flex w-full justify-center lg:min-h-[500px]">
      <div className="flex flex-col justify-center gap-2">
        <h3 className="text-5xl font-poppins font-bold text-gray-800">
          Gustavo Paredez
        </h3>
        <h5 className="text-xl font-poppins font-regular text-gray-500">
          Apasionado por la programación y el diseño UX/UI, estoy avanzando
          constantemente en esta emocionante travesía. Mi objetivo es seguir
          aprendiendo y creciendo, fusionando tecnología y creatividad para
          desarrollar soluciones digitales inspiradoras y funcionales.
        </h5>
      </div>
      <div className="flex justify-center w-full max-h-90 max-w-[700px]">
        <Player
          autoplay
          loop
          src={lottie}
          className="w-full h-full object-cover"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </section>
  );
};

export default CarouselSecondary;
