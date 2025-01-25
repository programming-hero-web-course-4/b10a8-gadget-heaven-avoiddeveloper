import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='h-screen'>
            <div className="bg-[#9538E2] text-white text-center space-y-4 pt-6 pb-[320px] rounded-b-2xl relative">
                <h1 className="text-[56px] font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="font-normal text-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    <br />the coolest accessories, we have it all!</p>
                <button className="btn bg-white rounded-full text-[#9538E2] font-bold text-[20px]"><a href="#shop">Shop Now</a></button>
            </div>
            <div className="w-[60%] h-[610px] mx-auto rounded-2xl p-4 bg-[#ffffff6e] border-2 border-white absolute top-108 left-[50%] translate-x-[-50%]">
                <img src={bannerImg} alt="Banner" className='w-full h-full object-cover rounded-2xl' />
            </div>
        </div>
    );
};

export default Banner;