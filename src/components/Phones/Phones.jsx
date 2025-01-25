import { useEffect, useState } from "react";
import Item from "../Items/Item";

const Phones = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    const phones = item.filter((item) => item.category === 'Phones');

    return (
        <div className="col-span-10 grid grid-cols-3 gap-4">
            {
                phones.map(item => <Item key={item.product_id} item={item}></Item>)
            }
        </div>
    );
};

export default Phones;