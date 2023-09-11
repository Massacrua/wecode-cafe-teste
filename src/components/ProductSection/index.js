import Product from "components/Product"
import styles from "./ProductSection.module.css"
import SectionTitle from "components/SectionTitle"
import SectionSubtitle from "components/SectionSubtitle"
import { useState } from "react"

const ProductSection = () => {
    
    const [products, setProducts] = useState([
        {
            id: 0,
            img: require("assets/cafe-dev.png"),
            name: "Café Dev - 500ml",
            description: "Rapadura, Floral, papaia, cítrico",
            price: 15.90,
            favorite: false
        },
        {
            id: 1,
            img: require("assets/cafe-designer.png"),
            name: "Café Designer - 500ml",
            description: "Doce de leite, chocolate e nozes",
            price: 15.90,
            favorite: false
        }
    ])

    const toggleFavorite = id => {
        setProducts(products.map(product => {
            if (product.id === id) {
                product.favorite = !product.favorite
            }
            return product
        }))
    }

    return (
        <section className={styles.section}>
            <div className={styles.titles}>
                <SectionTitle>Os favoritos da casa</SectionTitle>
                <SectionSubtitle>Conheça os cafés queridinhos da galera!</SectionSubtitle>
            </div>
            <div className={styles.productList}>
                {products.map(product => 
                    <Product 
                        product={product} 
                        key={product.id}
                        favoriteItem={toggleFavorite}
                    />
                )}
            </div>
        </section>
    )
}

export default ProductSection