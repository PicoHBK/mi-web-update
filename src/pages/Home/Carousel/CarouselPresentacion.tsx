import { Controls, Player } from "@lottiefiles/react-lottie-player";
import lottie from "../../../assets/herolottie.json";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CarouselPresentacion = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-full justify-center items-center lg:min-h-[600px] px-6 py-12 gap-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col justify-center gap-6 text-center lg:text-left max-w-2xl"
      >
        <motion.h3
          className="text-4xl lg:text-5xl font-poppins font-bold text-gray-800"
          variants={textVariants}
          custom={0}
        >
          Programador - Diseñador Gráfico UX/UI
        </motion.h3>
        <motion.h5
          className="text-lg lg:text-xl font-poppins font-medium text-gray-500"
          variants={textVariants}
          custom={1}
        >
          Saludos a todos, soy{" "}
          <span className="text-myprim-500 font-semibold">
            Gustavo Paredez.
          </span>{" "}
          Exploro la conjunción entre Programación Full Stack y Diseño Gráfico
          UX/UI para plasmar ideas en la web. ¡Bienvenidos!
        </motion.h5>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center w-full max-w-[700px]"
      >
        <Player
          autoplay
          loop
          src={lottie}
          className="w-full h-full object-cover"
        >
          <Controls visible={false} />
        </Player>
      </motion.div>
    </section>
  );
};

export default CarouselPresentacion;
