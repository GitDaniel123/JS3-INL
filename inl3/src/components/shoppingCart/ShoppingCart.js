
import { useSelector } from "react-redux"
import CartProduct from "./CartProduct"

const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);

    const empty = (
        <div className="shopping-cart2">
            YOUR CART IS EMPTY
        </div>
    )

    return (
        <div>
            {
                shoppingCart.map(product => (
                    <CartProduct  product={product} key={product._id}/>
                ))
            }

            {
              !shoppingCart.length && empty  
            }

            <div>
                <div className="shopping-cart">
                    <div>
                        <strong>total: {totalCartAmount}</strong>
                    </div>
                    <small>inkl.tax</small>

                </div>
                <button className="btn">Checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCart
