import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCard, addToCart, removeFromCart } from '../../store/actions/cartActions'

const CartProduct = ({product}) => {

        const dispatch = useDispatch()
         

        const add = e => {
            e.stopPropagation()
            dispatch(addToCard(product))
        } 
        const sub = e => {
            e.stopPropagation()
            dispatch(removeFromCart(product._id))
        } 


    return (
        <div>
            <div className="shopping-cart">
                <div className="cart-img">
                    <img src={product.image} alt="product" className="img-width"/>
                    <div>
                        <div>
                            <strong>{product.name}</strong>

                        </div>
                        <div>
                            <small>{product.quantity} x {product.price} SEK</small>
                        </div>
                    </div>
                </div>
                <div>
                <div className="button-reducer btn-pl">
                    <button className="btn-increase btn-add" onClick={add}>+</button>
                    <button className="btn-reduce btn-remove" onClick={sub}>-</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default CartProduct
