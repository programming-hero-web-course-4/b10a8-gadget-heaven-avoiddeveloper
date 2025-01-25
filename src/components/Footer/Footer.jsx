const Footer = () => {
    return (
        <footer className="py-9">
            <div className="text-center space-y-4">
                <p className="font-bold text-4xl text-[#09080F]">Gadget Heaven</p>
                <p className="font-medium text-[#09080F99] text-base">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider max-w-[80%] mx-auto"></div>
            <div className="flex justify-evenly">
                <nav className="flex flex-col justify-center items-center font-normal text-base text-[#09080F99] space-y-2">
                    <h6 className="font-bold text-[18px] text-[#09080F]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col justify-center items-center font-normal text-base text-[#09080F99] space-y-2">
                    <h6 className="font-bold text-[18px] text-[#09080F]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col justify-center items-center font-normal text-base text-[#09080F99] space-y-2">
                    <h6 className="font-bold text-[18px] text-[#09080F]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;