import { useContext } from "react";
import Item from "../Items/Item";
import { DataContext } from "../ToggleContent/ToggleContent";

const Laptops = () => {
    const data = useContext(DataContext)

    const laptops = data.filter((i) => i.category === "Laptops");

    return (
        <div className="col-span-10 grid grid-cols-3 gap-4">
            {
                laptops.map(item => <Item key={item.product_id} item={item}></Item>)
            }
        </div>
    );
};

export default Laptops;