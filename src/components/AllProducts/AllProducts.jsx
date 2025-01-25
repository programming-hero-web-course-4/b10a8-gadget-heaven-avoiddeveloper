import { useContext } from "react";
import Item from "../Items/Item";
import { DataContext } from "../ToggleContent/ToggleContent";

const AllProducts = () => {
    const data = useContext(DataContext)
    return (
        <div className="col-span-10 grid grid-cols-3 gap-4">
            {
                data.map(item => <Item key={item.product_id} item={item}></Item>)
            }
        </div>
    );
};

export default AllProducts;