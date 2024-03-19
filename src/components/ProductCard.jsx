export default function ProductCard({ image, name, category, price }) {
    return (
        <div className="product-card">
            <div className="left">
                <img src={image} alt="" width={150} height={88} />
            </div>

            <div className="middle">
                <div className="name">{name}</div>
                <div className="category">{category}</div>
            </div>

            <div className="right">
                <div className="price">Php {price}</div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}
