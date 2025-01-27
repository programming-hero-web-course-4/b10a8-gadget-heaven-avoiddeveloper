import { useState } from "react";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const Dashboard = () => {
    const [func, setFunc] = useState(true);

    const handleFunc = () => {
        setFunc(!func);
    }

    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center space-y-4 py-10">
                <h2 className="font-bold text-[32px]">Dashboard</h2>
                <p className="font-normal text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    <br /> the coolest accessories, we have it all!</p>
                <div className="space-x-2">
                    <button onClick={handleFunc} className={func ? 'bg-white text-purple-400 btn rounded-full font-extrabold text-[18px]' : 'btn rounded-full font-extrabold text-[18px] bg-transparent border-white text-white'}>Cart</button>
                    <button onClick={handleFunc} className={func ? 'btn rounded-full font-extrabold text-[18px] bg-transparent border-white text-white' : 'bg-white text-purple-400 btn rounded-full font-extrabold text-[18px]'}>Wish List</button>
                </div>
            </div>

            <div>
                {
                    func ? <Cart></Cart> : <WishList></WishList>
                }
            </div>
        </div>
    );
};

export default Dashboard;