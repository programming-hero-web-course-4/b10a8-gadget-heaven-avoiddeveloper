import { useLoaderData, useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { ItemContext, WishContext } from "../../App";

const ProductDetails = () => {
    const param = useParams();
    const data = useLoaderData();
    const { increaseCart } = useContext(ItemContext);
    const { handleWish } = useContext(WishContext);

    let device = data.find((item) => item.product_id === param.product_id);
    const { product_title, product_image, price, description, specifications, availability, rating } = device;

    return (
        <div className="h-screen">

            <div className="bg-[#9538E2] text-white text-center space-y-4 pt-6 pb-[240px] rounded-b-2xl relative">
                <h2 className="font-bold text-[32px]">Product Details</h2>
                <p className="font-normal text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!</p>
            </div>


            <div className="w-[70%] mx-auto rounded-2xl p-4 bg-slate-200 border-2 border-white
            absolute top-60 left-[50%] translate-x-[-50%]">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="w-[420px] h-[500px] object-cover rounded-2xl" />
                        <div className="space-y-3">
                            <div>
                                <h1 className="font-semibold text-[28px] text-[#09080F]">{product_title}</h1>
                                <p className="font-semibold text-[20px] text-[#09080FCC]">Price: ${price}</p>
                            </div>

                            <p>{availability ? <span className="btn bg-green-100 border-green-400 text-green-400 rounded-full font-bold text-base">In Stock</span> : <span className="btn bg-green-100 border-green-400 text-green-400 rounded-full font-bold text-base">Stock Out</span>}</p>

                            <p className="font-normal text-base text-[#09080F99]">{description}</p>

                            <div>
                                <p className="font-bold text-[18px] text-[#09080F]">Specification</p>
                                <div className="font-normal text-[18px] text-[#09080F99]">
                                    {specifications.map((item, idx) => <li key={idx}>{item}</li>)}
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-[18px] text-[#09080F]">Rating</p>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-[18px] bg-slate-400 rounded-full p-2">{rating}</p>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    </div>


                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button onClick={() => increaseCart(product_title)} className="btn rounded-full bg-violet-500 text-white font-bold text-[18px]">Add To Cart<TiShoppingCart /></button>
                                <button onClick={() => handleWish(product_title)} className="btn btn-circle bg-violet-500"><CiHeart className="text-3xl text-white"></CiHeart></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;