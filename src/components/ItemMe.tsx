import { AboutType } from "@/types/apiWeb";
import { motion } from "framer-motion";

export interface ItemMeProps {
  index?: number;
  item: AboutType;
}

function ItemMe({ index, item }: ItemMeProps) {
  const isEven = index !== undefined && index % 2 === 0;
  const bgColor = isEven ? "bg-mylight-400" : "bg-mylight-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex flex-col w-full gap-3 rounded-xl p-5 shadow-sm ${bgColor}`}
    >
      <h2 className="text-mydark-100 font-semibold text-2xl">{item.title}</h2>
      <p className="text-gray-700 font-medium text-[15px] leading-relaxed">{item.redaction}</p>
    </motion.div>
  );
}

export default ItemMe;
