import PropTypes from 'prop-types';

const Item = ({ item }) => {
    const { product_title, product_image, price } = item;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl h-[180px] object-contain" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-2xl text-[#09080F]">{product_title}</h2>
                <p className="font-medium text-[20px] text-[#09080F99]">Price: {price}$</p>
                <div className="card-actions">
                    <button className="btn font-semibold rounded-full border-2 bg-transparent border-violet-600 text-[#9538E2]">View Details</button>
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object,
}

export default Item;