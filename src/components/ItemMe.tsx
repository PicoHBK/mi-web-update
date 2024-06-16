
import { AboutType } from '@/types/apiWeb';

export interface ItemMeProps {
  index?: number;
  item: AboutType;
}

function ItemMe({ index, item }: ItemMeProps) {
    const style = index !== undefined && index % 2 === 0 ? 'flex flex-col w-full h-full bg-mylight-400 gap-2 p-2' : 'flex flex-col w-full h-full bg-mylight-800 gap-2 p-2';

    return (
        <div className={style}>
            <h2 className='text-mydark-100 font-semibold text-2xl'>{item.title}</h2>
            <p className='text-gray-600 font-medium text-md'>{item.redaction}</p>

        </div>
    );
}


export default ItemMe;
