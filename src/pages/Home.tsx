import { Player, Controls } from "@lottiefiles/react-lottie-player";
import lottie from "../assets/herolottie.json";
import ProjectCard from "../components/Cards/ProjectCard";
import { useProject } from "@/hooks/useProject";
import Skillls from "@/components/Skillls";

function Home() {
  const { data } = useProject();
  return (
    <div className="flex flex-col items-center w-full h-full gap-24 ">
      <section className=" flex w-full justify-center lg:min-h-[500px]">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-5xl font-poppins font-semibold text-mydark-900">
            Programador Full Stack Diseñador Grafico UX/UI
          </h3>
          <h5 className="text-xl font-poppins font-regular text-mydark-200">
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
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-poppins font-semibold text-mydark-800 text-3xl">
            Trabajos
          </h2>
          <p className="text-center font-poppins font-normal text-mydark-800 text-base">
            Mis proyectos mas destacados en los que he trabajado{" "}
          </p>
        </div>
        <section className="flex flex-wrap justify-center gap-12">
          {data?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-poppins font-semibold text-mydark-800 text-3xl">
            Conocimientos
          </h2>
          <p className="text-center font-poppins font-normal text-mydark-800 text-base">
            Mis habilidades{" "}
          </p>
        </div>
        <div className="flex justify-center w-full">
          <Skillls />
        </div>
      </div>
    </div>
  );
}

export default Home;
