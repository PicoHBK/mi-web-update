import { Controls, Player } from '@lottiefiles/react-lottie-player';
import lottie from "../../../assets/herolottie.json";

const CarouselPresentacion = () => {
    return (
        <section className=" flex flex-col lg:flex-row w-full justify-center lg:min-h-[500px]">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-800">
            Programador - Diseñador Grafico UX/UI
          </h3>
          <h5 className="text-lg lg:text-xl font-poppins font-regular text-gray-500 font-medium">
            Saludos a todos, soy{" "}
            <strong className="text-myprim-500">Gustavo Paredez.</strong>{" "}
            Exploro la conjunción entre Programación Full Stack y Diseño Gráfico
            UX/UI para plasmar ideas en la web. ¡Bienvenidos!
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
}

export default CarouselPresentacion;
