import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../store/actions/cartActions'
const ProductCard = ({product}) => {
    const dispatch = useDispatch();
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
            <div className="btn-flex">
                <button className="btn btn-ADD" onClick={() => {
                    dispatch(addToCard(product))
                }}>Add to Cart</button>
                <Link className=" btn btn-MORE" to={`/products/${product._id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default ProductCard
