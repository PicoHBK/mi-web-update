import { Controls, Player } from "@lottiefiles/react-lottie-player";

const CarouselSkills = () => {
  return (
    <section className=" flex w-full justify-between lg:min-h-[500px] lg:max-h-[500px]">
      <div className="flex flex-col justify-center gap-2">
        <h3 className="text-5xl text-center font-poppins font-bold text-gray-700">
          Habilidades
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=p57acgidi9bj&format=png&color=000000 " alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">React</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=LPmcJ9e0FU7K&format=png&color=000000" alt="app" className="w-full h-full object-contain p-4" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">Django</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000 " alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">TypeScript</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000 " alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">Python</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=108781&format=png&color=000000 " alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">After Effects</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000 " alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">Premiere Pro</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=13631&format=png&color=000000 " alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">Illustrator</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=13677&format=png&color=000000" alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">Pothoshop</h3>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md">
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="app" className="w-full h-full object-contain rounded-full p-2" />
              </div>
              <h3 className="flex text-gray-500 font-semibold">Figma</h3>
          </div>
        </div>
      </div>
      <div className="hidden justify-center w-full max-h-90 max-w-[600px] lg:flex">
        <Player
          autoplay
          loop
          src={
            "https://lottie.host/d52bce8c-4ee1-44fc-890c-ecb0c3ad0ffd/EECwUo0fvK.json"
          }
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

export default CarouselSkills;
