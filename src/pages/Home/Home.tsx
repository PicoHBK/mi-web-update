import React from 'react';
import { useProject } from '@/hooks/useProject';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Skillls from '@/components/Skillls';
import DesignCard from './DesingSection/DesignCard';
import CarouselPresentacion from './Carousel/CarouselPresentacion';
import CarouselSecondary from './Carousel/CarouselSecondary';
import CarouselSkills from './Carousel/CarouselSkills';
import desings from '@/mockup/Desings.json';
import { motion } from 'framer-motion';

// Constantes para configuración
const CAROUSEL_CONFIG = {
  autoplay: {
    delay: 5000,
    stopOnInteraction: true,
  },
  carousel: {
    align: 'start' as const,
    loop: true,
  },
};

// Estilos para las cards de proyectos
const PROJECT_CARD_STYLES = {
  container: 'w-full max-w-[350px] h-[450px] flex flex-col bg-white/80 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300',
  imageContainer: 'h-[250px] overflow-hidden rounded-t-lg',
  image: 'w-full h-full object-cover transition-transform duration-500 hover:scale-105',
  content: 'flex-1 p-4 bg-white rounded-b-lg flex flex-col',
  title: 'text-xl font-bold text-blue-900 mb-2',
  description: 'text-gray-700 flex-grow',
  tags: 'flex flex-wrap gap-2 mt-3',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const { data: projects } = useProject();

  const renderSectionHeader = (title: string, description: string) => (
    <motion.div
      className="flex flex-col items-center mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={fadeInUp}
    >
      <h2 className="text-center font-poppins font-semibold text-blue-800 text-3xl">
        {title}
      </h2>
      <p className="text-center font-poppins text-gray-600 text-base">
        {description}
      </p>
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center w-full h-full gap-24 font-poppins">
      {/* Carousel Principal */}
      <Carousel
        className="flex w-full justify-center lg:min-h-[500px]"
        plugins={[Autoplay(CAROUSEL_CONFIG.autoplay)]}
        opts={CAROUSEL_CONFIG.carousel}
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

      {/* Sección de Proyectos */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  {renderSectionHeader('Trabajos', 'Mis proyectos más destacados en los que he trabajado')}
  
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.1 }}
  >
    {projects?.map((project) => (
      <motion.div
        key={project.id}
        className={`${PROJECT_CARD_STYLES.container} w-full`}
        variants={fadeInUp}
      >
        <div className="aspect-video overflow-hidden rounded-lg">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:opacity-90 transition duration-300"
              loading="lazy"
            />
          </a>
        </div>
        <div className={PROJECT_CARD_STYLES.content}>
          <h3 className={PROJECT_CARD_STYLES.title}>{project.title}</h3>
          <p className={PROJECT_CARD_STYLES.description}>{project.description}</p>
          <div className={PROJECT_CARD_STYLES.tags}>
            {project.tools?.map(tag => (
              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* Sección de Habilidades */}
      <section className="w-full px-4 max-w-7xl mx-auto">
        {renderSectionHeader('Conocimientos', 'Mis habilidades')}
        <motion.div
          className="flex justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <Skillls />
        </motion.div>
      </section>

      {/* Sección de Diseño */}
      <section className="w-full px-4 max-w-7xl mx-auto">
        {renderSectionHeader(
          'Diseño y Animación',
          'Trabajos de animación y motion graphics'
        )}
        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {desings.map((design) => (
            <motion.div key={design.id} variants={fadeInUp}>
              <DesignCard
                title={design.title}
                description={design.description}
                videoUrl={design.videoUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
