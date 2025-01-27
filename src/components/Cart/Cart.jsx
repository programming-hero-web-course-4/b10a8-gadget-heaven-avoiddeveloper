import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../App";


const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const { cart } = useContext(ItemContext);

    const selectedItem = items.filter(item =>
        cart.includes(item.product_title)
    );



    return (
        <div>
            <div className="py-4 grid grid-cols-12 justify-between items-center">
                <div className="col-span-8">
                    <p className="font-bold text-[24px] text-[#0B0B0B]">Cart</p>
                </div>
                <div className="col-span-4 flex justify-end items-center">
                    <div className="flex gap-5">
                        <button className="btn">Sort By Price</button>
                        <button className="btn">Purchase</button>
                    </div>
                </div>
            </div>

            <div>
                {
                    selectedItem.map((i, index) => (
                        <div className="flex justify-evenly items-center space-y-3" key={index}>
                            <img src={i.product_image} alt={i.product_title}  className="w-[280px]"/>
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