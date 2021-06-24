

const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <div>
            <h4>{product.name}</h4>

            </div>
            <img src={product.image} alt=".." />
            <div>
            </div>
            <div>
                <p>{product.short}</p>
                <p className="product-sale">{product.price} SEK</p>
            </div>
        </div>
    )
}

export default ProductCard
