import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ProjectType } from "@/types/apiWeb";

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col w-full h-full max-w-[400px] gap-3 p-3 bg-mylight-400 shadow-xl">
      <div className="w-full h-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg object-top "
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-mydark-700 font-poppins text-base font-semibold">
          {project.title}
        </h3>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger>
              <div className="h-6 w-6 bg-mylight-900 rounded-md p-[2px] hover:scale-105 hover:bg-myprim-100 transition">
                <img
                  src="https://img.icons8.com/?size=100&id=84114&format=png&color=141119"
                  alt="web"
                  className="w-full h-full object-cover"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className=" flex flex-wrap max-w-40 justify-center items-center w-full gap-3 bg-mylight-200">
              {getTechIcons(project.tools)}
            </PopoverContent>
          </Popover>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a href={"https://github.com/PicoHBK"} target="_blank">
                  <div className="h-6 w-6 bg-mylight-900 rounded-md p-[2px] hover:scale-105 hover:bg-myprim-100 transition">
                    <img
                      src="https://img.icons8.com/?size=100&id=106562&format=png&color=141119"
                      alt="web"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-norma font-poppins text-mydark-600">
                  Ir al repositorio
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a href={project.url} target="_blank">
                  <div className="h-6 w-6 bg-mylight-900 rounded-md p-[2px] hover:scale-105 hover:bg-myprim-100 transition">
                    <img
                      src="https://img.icons8.com/?size=100&id=84275&format=png&color=141119"
                      alt="web"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-norma font-poppins text-mydark-600">
                  Ir al SitoWeb
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="h-full">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm font-poppins font-normal text-mydark-200 text-start">
              {imprimirPrimeras10Palabras(project.description).primeras10}
            </AccordionTrigger>
            <AccordionContent className="text-sm font-poppins font-normal text-mydark-200">
              {imprimirPrimeras10Palabras(project.description).resto}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default ProjectCard;

function imprimirPrimeras10Palabras(texto: string) {
  // Dividir el string en un array de palabras
  const palabras = texto.split(" ");

  // Seleccionar las primeras palabras, hasta un máximo de 10
  const primerasPalabras = palabras.slice(0, 10);

  // Unir las palabras en un nuevo string
  const primeras10String = primerasPalabras.join(" ");

  // Crear el segundo string con el resto de palabras, si existen
  const restoString = palabras.slice(10).join(" ");

  // Retornar un objeto con los dos strings
  return {
    primeras10: primeras10String,
    resto: restoString,
  };
}

const getTechIcons = (techList: string[]): JSX.Element[] => {
  const icons: { [key: string]: string } = {
    React: "https://img.icons8.com/?size=100&id=p57acgidi9bj&format=png&color=000000",
    Django: "https://img.icons8.com/?size=100&id=LPmcJ9e0FU7K&format=png&color=000000",
    Js: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    TypeScript: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    Flask: "https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000",
    PostgresSQL: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
  };

  return techList.map((tech, index) => (
    <div key={index} className="w-6 h-6">
      <img
        src={icons[tech]}
        alt={tech.toLowerCase()}
        className="w-full h-full object-cover"
      />
    </div>
  ));
};


