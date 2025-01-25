import { useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import Phones from "../Phones/Phones";
import Laptops from "../Laptops/Laptops";
import Accessories from "../Accessories/Accessories";

const ToggleContent = () => {
    const [activeButton, setActiveButton] = useState("allProducts");

    const renderContent = () => {
        if (activeButton === "allProducts") {
            return <AllProducts></AllProducts>;
        }
        else if (activeButton === "phones") {
            return <Phones></Phones>;
        }
        else if (activeButton === "laptops") {
            return <Laptops></Laptops>;
        }
        else if (activeButton === "accessories") {
            return <Accessories></Accessories>;
        }
        else {
            return null;
        }
    };

    return (
        <div id="shop" className="grid grid-cols-12 gap-5 mt-8">
            <div className="col-span-2 flex flex-col gap-4">
                <button
                    onClick={() => setActiveButton("allProducts")}
                    className={`px-4 py-2 rounded-full ${activeButton === "allProducts" ? "bg-violet-500 text-white" : "bg-gray-200"
                        }`}
                >
                    All Product
                </button>
                <button
                    onClick={() => setActiveButton("phones")}
                    className={`px-4 py-2 rounded-full ${activeButton === "phones" ? "bg-violet-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Phones
                </button>
                <button
                    onClick={() => setActiveButton("laptops")}
                    className={`px-4 py-2 rounded-full ${activeButton === "laptops" ? "bg-violet-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Laptops
                </button>
                <button
                    onClick={() => setActiveButton("accessories")}
                    className={`px-4 py-2 rounded-full ${activeButton === "accessories" ? "bg-violet-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Accessories
                </button>
            </div>
            <div className="col-span-10">{renderContent()}</div>
        </div>
    );
};

export default ToggleContent;