import React from 'react';
import ItemMe, { ItemMeProps } from './ItemMe'; // Asumiendo que el componente ItemMe y su tipo están en el archivo correspondiente

interface AboutMeProps {
  children: React.ReactNode;
  className: string;
}

function AboutMe({ children, className }: AboutMeProps){
  const mapElements = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      // Verificar si es un elemento de tipo ItemMe
      if (child.type === ItemMe) {
        // Clonar el elemento ItemMe y pasar el índice como prop
        return React.cloneElement(child, { index } as Partial<ItemMeProps>);
      }
      // Si no es ItemMe, retornar el elemento hijo sin modificar
      return child;
    }
    return child;
  });

  return (
    <div className={className}>
      {mapElements}
    </div>
  );
}

export default AboutMe;
