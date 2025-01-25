import { useEffect, useState } from "react";
import Item from "../Items/Item";

const AllProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="col-span-10 grid grid-cols-3 gap-4">
            {
                items.map(item => <Item key={item.product_id} item={item}></Item>)
            }
        </div>
    );
};

export default AllProducts;