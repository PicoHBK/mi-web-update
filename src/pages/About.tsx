import { Controls, Player } from "@lottiefiles/react-lottie-player";
import lottie from "../assets/aboutmelottie.json"
import AboutMe from "@/components/AboutMe";
import ItemMe from "@/components/ItemMe";
import { useAbout } from "@/hooks/useAbout";

function About() {
    const {data:aboutList} = useAbout()
  return (
    <div className="flex flex-col w-full h-full gap-24 max-w-[1920px]">
      <section className=" flex w-full justify-center lg:min-h-[500px]">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-5xl font-poppins font-semibold text-mydark-500">
            Gustavo Paredez
          </h3>
          <h5 className="text-xl font-poppins font-regular text-mydark-200">
          Apasionado por la programación y el diseño UX/UI, estoy avanzando constantemente en esta emocionante travesía. Mi objetivo es seguir aprendiendo y creciendo, fusionando tecnología y creatividad para desarrollar soluciones digitales inspiradoras y funcionales.
          </h5>
        </div>
        <div className="hidden justify-center w-full max-h-90 max-w-[700px] lg:flex">
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
      <AboutMe className="flex flex-col gap-4 tracking-wide font-poppins">
        {aboutList.map(item => (
            <ItemMe item={item} key={item.id}/>
        ))}
      </AboutMe>
    </div>
  );
}

export default About;
