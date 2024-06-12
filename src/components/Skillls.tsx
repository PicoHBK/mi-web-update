import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSkill } from "@/hooks/useSkill";

function Skillls() {
  const { data } = useSkill();
  return (
    <Tabs
      defaultValue="Frameworks"
      className="flex flex-col justify-center w-full h-full"
    >
      <TabsList className="flex flex-col font-poppins  bg-mylight-100 lg:flex-row lg:gap-4 h-full">
        {data?.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.title}
            className="text-2xl font-medium data-[state=active]:bg-myprim-100"
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {data?.map((skill) => (
        <TabsContent
          key={skill.id}
          value={skill.title}
          className="w-full flex flex-wrap justify-center gap-3"
        >
          {skill.tech.map((tech) => (
            <div className="flex max-w-[450px] max-h-[200px] items-center">
              <div className="w-[260px] h-[180px] p-3">
                {
                    generarImagen(tech)
                }
              </div>
              <div className="flex flex-col w-full justify-start font-poppins">
                <h4 className="font-semibold text-lg">{tech}</h4>
                {generarDescripcion(tech)}
              </div>
            </div>
          ))}
        </TabsContent>
      ))}
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default Skillls;

function generarImagen(nombre: string): JSX.Element | null {
    const iconUrls: { [key: string]: string } = {
      React: 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000',
      Django: 'https://img.icons8.com/?size=100&id=baihjTL3IBX9&format=png&color=000000',
      TypeScript: 'https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000',
      'Spring Boot': 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000',
      Tailwind: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000',
      Java:'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
      Python: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
      JavaScript: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
      'After Effects': 'https://imgs.search.brave.com/UqLVuRVOtCVwEUq9wlXgA6Foep35WujVM9suXE-VE98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0Fkb2JlX0Fm/dGVyX0VmZmVjdHNf/Q0NfaWNvbi5zdmc.svg',
      'Premiere Pro': 'https://imgs.search.brave.com/dypcuQ69MonwiwtXqvyVSgMkJvWfwqYki2jloEN1R8s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQwL0Fkb2JlX1By/ZW1pZXJlX1Byb19D/Q19pY29uLnN2Zw.svg',
      Figma: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000',
      HTML: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
      'CSS': 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
      SQL: 'https://imgs.search.brave.com/2u8VKlc3a4Pk0QO_WxA8k9IisGkOJ5a9gHU6wkbH1lk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMzE3NjAv/c3FsLWRhdGFiYXNl/LWdlbmVyaWMuc3Zn.svg',
      Office:'https://imgs.search.brave.com/1ztI0cdZhvI60iJbrX8o9SiH6lMD7M4XZwAcwsLroBI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y2FybG9zamovbWlj/cm9zb2Z0LW9mZmlj/ZS0yMDEzLzEyOC9P/ZmZpY2UtaWNvbi5w/bmc',
      'Programación Web': 'https://img.icons8.com/?size=100&id=sm8CzMKNcuhi&format=png&color=000000',
      // Añade más nombres y URLs de iconos según necesites
    };
  
    const iconUrl = iconUrls[nombre];
    if (!iconUrl) {
        <img
        src="https://img.icons8.com/?size=100&id=20544&format=png&color=000000"
        alt="Not Found"
        className="w-full h-full object-cover"
      />;
    }
  
    return (
      <img
        src={iconUrl}
        alt={nombre}
        className="w-full h-full object-contain"
      />
    );
  }

  function generarDescripcion(nombre: string): JSX.Element {
    const descriptions: { [key: string]: string } = {
      React: 'React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables.',
      Django: 'Django es un framework de alto nivel para el desarrollo rápido de aplicaciones web en Python.',
      TypeScript: 'TypeScript es un superconjunto tipado de JavaScript que mejora el desarrollo de aplicaciones a gran escala.',
      'Spring Boot': 'Spring Boot simplifica el desarrollo de aplicaciones basadas en Spring mediante convenciones sobre configuración.',
      Tailwind: 'Tailwind CSS es un framework de utilidades CSS que permite un diseño rápido y eficiente.',
      Java: 'Java es un lenguaje de programación de propósito general, orientado a objetos y concurrente.',
      Python: 'Python es un lenguaje de programación de alto nivel, interpretado y de propósito general.',
      JavaScript: 'JavaScript es un lenguaje de programación utilizado principalmente para crear contenido web interactivo.',
      'After Effects': 'After Effects es una aplicación de gráficos en movimiento y efectos visuales desarrollada por Adobe.',
      'Premiere Pro': 'Premiere Pro es un software de edición de vídeo profesional desarrollado por Adobe.',
      Figma: 'Figma es una herramienta de diseño de interfaces colaborativa basada en la nube.',
      HTML: 'HTML es el lenguaje estándar para crear y estructurar páginas web.',
      CSS: 'CSS es un lenguaje de estilo utilizado para describir la presentación de documentos HTML.',
      SQL: 'SQL es un lenguaje estándar para gestionar y manipular bases de datos relacionales.',
      Office: 'Microsoft Office es una suite de aplicaciones de productividad para la gestión de documentos y datos.',
      'Programación Web': 'La programación web abarca el desarrollo y mantenimiento de sitios y aplicaciones web.',
      // Añade más nombres y descripciones según necesites
    };
  
    const description = descriptions[nombre] || 'Descripción no disponible para esta tecnología.';
  
    return (
      <p className="text-normal font-normal">
        {description}
      </p>
    );
}