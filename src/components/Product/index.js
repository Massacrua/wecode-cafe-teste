import styles from "./Product.module.css"

const Product = ({ product }) => {
    return (
        <div className={styles.product}>
            <img src={product.img}>
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