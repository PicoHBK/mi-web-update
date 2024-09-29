
import AboutMe from "@/components/AboutMe";
import ItemMe from "@/components/ItemMe";
import { useAbout } from "@/hooks/useAbout";

function About() {
    const {data:aboutList} = useAbout()
  return (
    <div className="flex flex-col w-full h-full gap-24 max-w-[1920px]">
      <AboutMe className="flex flex-col gap-4 tracking-wide font-poppins">
        {aboutList.map(item => (
            <ItemMe item={item} key={item.id}/>
        ))}
      </AboutMe>
    </div>
  );
}

export default About;
