import { useContext } from "react";
import Item from "../Items/Item";
import { DataContext } from "../ToggleContent/ToggleContent";

const Phones = () => {

    const data = useContext(DataContext)

    const phones = data.filter((item) => item.category === 'Phones');

    return (
        <div className="col-span-10 grid grid-cols-3 gap-4">
            {
                phones.map(item => <Item key={item.product_id} item={item}></Item>)
            }
        </div>
    );
};

export default Phones;