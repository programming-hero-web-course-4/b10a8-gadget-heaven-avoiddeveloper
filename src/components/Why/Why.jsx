const Why = () => {
    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center space-y-4 py-10">
                <h2 className="font-bold text-[32px]">Why Us</h2>
                <p className="font-normal text-base">GadgetHeaven is your go-to hub for the latest tech gadgets, reviews,
                    <br />and buying guides, keeping you updated on all things tech.</p>
            </div>
            <div className="py-6 space-y-3">
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">Why choose GadgetHeaven for your tech needs?</div>
                    <div className="collapse-content text-sm">Choose GadgetHeaven for unmatched access to the latest gadgets, expert reviews, and reliable buying guides. We offer a curated selection of top tech products,
                        ensuring you stay updated with cutting-edge innovations, all while providing exceptional customer support.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">What makes GadgetHeaven stand out from other tech platforms?</div>
                    <div className="collapse-content text-sm">GadgetHeaven stands out with its in-depth reviews, expert advice, and exclusive insights into the latest tech trends. We focus on delivering curated,
                        high-quality content, offering a seamless experience for tech enthusiasts to discover and purchase the best gadgets.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Why trust us for the latest and best in gadgets and electronics?</div>
                    <div className="collapse-content text-sm">Trust GadgetHeaven for the latest and best gadgets because we prioritize quality, accuracy, and thorough research. Our expert team ensures
                        that every product is reviewed and tested, providing you with reliable recommendations and up-to-date tech insights.</div>
                </div>
            </div>
        </div>
    );
};

export default Why;