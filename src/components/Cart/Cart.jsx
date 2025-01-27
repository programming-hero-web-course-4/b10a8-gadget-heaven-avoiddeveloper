import { useContext, useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { ItemContext } from "../../App";

const Cart = () => {
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setSelectedItem(data.filter(item => cart.includes(item.product_title))));
    }, []);

    const { cart } = useContext(ItemContext);

    const handleSort = () => {
        const sortedItems = [...selectedItem].sort((a, b) => b.price - a.price);
        setSelectedItem(sortedItems);
    };

    return (
        <div>
            <div className="py-4 grid grid-cols-12 justify-between items-center">
                <div className="col-span-8">
                    <p className="font-bold text-[24px] text-[#0B0B0B]">Cart</p>
                </div>
                <div className="col-span-4 flex justify-end items-center">
                    <div className="flex gap-5">
                        <button className="btn" onClick={handleSort}>Sort By Price <FaSort /></button>
                        <button className="btn">Purchase</button>
                    </div>
                </div>
            </div>

            <div>
                {
                    selectedItem.map((i, index) => (
                        <div className="flex justify-evenly items-center space-y-3" key={index}>
                            <img src={i.product_image} alt={i.product_title} className="w-[280px]" />
                            <div>
                                <h2 className="font-semibold text-[24px] text-[#09080F]">{i.product_title}</h2>
                                <p className="font-normal text-[18px] text-[#09080F99]">
                                    Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
                                </p>
                                <p className="font-semibold text-[20px] text-[#09080FCC]">Price: ${i.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;