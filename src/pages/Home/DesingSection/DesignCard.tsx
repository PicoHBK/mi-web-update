import React from 'react';
import ReactPlayer from 'react-player';

interface DesignCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

const DesignCard: React.FC<DesignCardProps> = ({ title, description, videoUrl }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-[2444px] font-poppins shadow-md">
      <div className="flex flex-col justify-center space-y-5 max-w-[1000px] bg-mylight-400 lg:px-5 py-5 lg:py-0">
        <h3 className="font-bold text-2xl lg:text-5xl text-gray-700 text-center">
          {title}
        </h3>
        <p className="font-medium text-sm lg:text-base text-gray-500 text-center">
          {description}
        </p>
      </div>
      <div className="flex justify-start lg:max-h-96 lg:max-w-[700px]">
        <ReactPlayer
          url={videoUrl} // URL del video
          playing // Reproducción automática
          loop // Repetir el video
          muted // Silenciar
          controls={false} // Ocultar controles
          width="auto" // Ancho responsivo
          height="100%" // Altura automática para mantener proporciones
          style={{ borderRadius: '0.5rem', pointerEvents: 'none' }} // Redondear esquinas y desactivar interacción
        />
      </div>
    </div>
  );
};

export default DesignCard;
