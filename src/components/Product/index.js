import styles from "./Product.module.css"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { ReactComponent as AddToCart } from "assets/add-to-cart.svg"
import { Snackbar } from "@mui/material"
import { useState } from "react"

const Product = ({ product, favoriteItem, addToCart }) => {
    
    const setFavorite = () => {
        favoriteItem(product.id)
    }
    
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const addItemToCart = () => {
        addToCart(product)
        setSnackbarOpen(true)
    }


    const starProps = {
        size: 25,
        color: "#FFF",
        onClick: setFavorite
    }
    
    return (
        <>
            <div className={styles.product}>
                <div className={styles.imgContainer}>
                    <img src={product.img} alt={product.name}/>
                    <div className={styles.favorite}>
                        {product.favorite
                            ? <AiFillStar {...starProps}/>
                            : <AiOutlineStar {...starProps}/>
                        }
                    </div>
                    <button 
                        className={styles.addToCart} 
                        onClick={addItemToCart}
                    >
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

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={() => setSnackbarOpen(false)}
            >
                <span className={styles.snackbar}>Adicionado ao carrinho</span>
            </Snackbar>
        </>
    )
}

export default Product