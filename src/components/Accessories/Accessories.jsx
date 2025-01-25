import { useContext } from 'react';
import Item from '../Items/Item';
import { DataContext } from '../ToggleContent/ToggleContent';

const Accessories = () => {
    const data = useContext(DataContext);

    const accessories = data.filter((i) => i.category === "Accessories");

    return (
        <div className="col-span-10 grid grid-cols-3 gap-4">
            {
                accessories.map(item => <Item key={item.product_id} item={item}></Item>)
            }
        </div>
    );
};

export default Accessories;