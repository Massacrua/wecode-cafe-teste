import styles from "./Product.module.css"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Product = ({ product, favoriteItem }) => {
    
    const setFavorite = () => {
        favoriteItem(product.id)
    }

    const starProps = {
        size: 25,
        color: "#FFF",
        onClick: setFavorite
    }
    
    return (
        <div className={styles.product}>
            <div className={styles.favorite}>
                {product.favorite
                    ? <AiFillStar {...starProps}/>
                    : <AiOutlineStar {...starProps}/>
                }
            </div>
            <img src={product.img} alt={product.name}>
            </img>
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