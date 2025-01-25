import { useEffect, useState } from "react";
import Item from "../Items/Item";

const Laptops = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    const laptops = item.filter((i) => i.category === "Laptops");

    return (
        <div className="col-span-10 grid grid-cols-3 gap-4">
            {
                laptops.map(item => <Item key={item.product_id} item={item}></Item>)
            }
        </div>
    );
};

export default Laptops;