import styles from "./Product.module.css"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { ReactComponent as AddToCart } from "assets/add-to-cart.svg"

const Product = ({ product, favoriteItem, addToCart }) => {
    
    const setFavorite = () => {
        favoriteItem(product.id)
    }

    const addItemToCart = () => {
        addToCart(product)
    }

    const starProps = {
        size: 25,
        color: "#FFF",
        onClick: setFavorite
    }
    
    return (
        <div className={styles.product}>
            <div className={styles.imgContainer}>
                <img src={product.img} alt={product.name}/>
                <div className={styles.favorite}>
                    {product.favorite
                        ? <AiFillStar {...starProps}/>
                        : <AiOutlineStar {...starProps}/>
                    }
                </div>
                <button className={styles.addToCart} onClick={addItemToCart}>
                    <AddToCart/>
                </button>
            </div>
            <h3>
                {product.name}
            </h3>
            <p>
                {product.description}
            </p>
            <span>
                {`R$${product.price.toFixed(2)}`}
            </span>
        </div>
    )
}

export default Product