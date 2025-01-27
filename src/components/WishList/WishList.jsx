import { useContext, useEffect, useState } from "react";
import { WishContext } from "../../App";

const WishList = () => {

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const [items, setItems] = useState([]);
    const { wish } = useContext(WishContext);

    const selectedItem = items.filter(item =>
        wish.includes(item.product_title)
    );

    return (
        <div>
            <div className="py-4">
                <p className="font-bold text-[24px] text-[#0B0B0B]">Wish List</p>
            </div>

            <div>
                {
                    selectedItem.map((i, index) => (
                        <div className="flex justify-evenly items-center space-y-3" key={index}>
                            <img src={i.product_image} alt={i.product_title} className="w-[280px]" />
                            <div>
                                <h2 className="font-semibold text-[24px] text-[#09080F]">{i.product_title}</h2>
                                <p className="font-normal text-[18px] text-[#09080F99]">
                                    {i.description}
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

export default WishList;