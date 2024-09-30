import ProjectCard from "../../components/Cards/ProjectCard";
import { useProject } from "@/hooks/useProject";
import Skillls from "@/components/Skillls";
import desings from "@/mockup/Desings.json";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselPresentacion from "./Carousel/CarouselPresentacion";
import CarouselSecondary from "./Carousel/CarouselSecondary";
import CarouselSkills from "./Carousel/CarouselSkills";
import DesignCard from "./DesingSection/DesignCard";

function Home() {
  const { data } = useProject();
  return (
    <div className="flex flex-col items-center w-full h-full gap-24 font-poppins ">
      <Carousel
        className="flex w-full justify-center lg:min-h-[500px]"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="max-w-[2440px]">
          <CarouselItem>
            <CarouselPresentacion />
          </CarouselItem>
          <CarouselItem>
            <CarouselSkills />
          </CarouselItem>
          <CarouselItem>
            <CarouselSecondary />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-poppins font-semibold text-gray-800 text-3xl">
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
      <div className="flex flex-col w-full items-center gap-4 lg:gap-0 lg:space-y-16">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-poppins font-semibold text-mydark-800 text-3xl">
            Diseño y Animación
          </h2>
          <p className="text-center font-poppins font-normal text-mydark-800 text-base">
            Trabajos de animación y motion graphics
          </p>
        </div>

        {desings.map((desing) => (
          <DesignCard
            key={desing.id}
            title={desing.title}
            description={desing.description}
            videoUrl={desing.videoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
