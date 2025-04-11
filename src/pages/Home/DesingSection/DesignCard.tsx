import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

interface DesignCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

const DesignCard: React.FC<DesignCardProps> = ({ title, description, videoUrl }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-[2444px] font-poppins shadow-lg rounded-2xl overflow-hidden bg-mylight-100">
      <div className="flex flex-col justify-center space-y-6 max-w-[900px] px-8 py-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-extrabold text-myprim-500 text-3xl lg:text-4xl"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-medium text-myneutral-600 text-base lg:text-lg"
        >
          {description}
        </motion.p>
      </div>

      <div className="flex items-center justify-center w-full max-w-[700px] h-[400px] bg-mylight-300 rounded-lg">
        <ReactPlayer
          url={videoUrl}
          playing
          loop
          muted
          controls={false}
          width="700px"
          height="400px"
          style={{ borderRadius: '0.75rem', pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
};

export default DesignCard;
