import Product from "components/Product"
import styles from "./ProductSection.module.css"

const ProductSection = () => {
    const products = [
        {
            id: 0,
            img: require("assets/cafe-dev.png"),
            name: "Café Dev - 500ml",
            description: "Rapadura, Floral, papaia, cítrico",
            price: 15.90
        },
        {
            id: 1,
            img: require("assets/cafe-designer.png"),
            name: "Café Designer - 500ml",
            description: "Doce de leite, chocolate e nozes",
            price: 15.90
        }
    ]

    return (
        <section className={styles.section}>
            <h1>Os favoritos da casa</h1>
            <h2>Conheça os cafés queridinhos da galera!</h2>
            <div className={styles.productList}>
                {products.map(product => 
                    <Product 
                        product={product} 
                        key={product.id}
                    />
                )}
            </div>
        </section>
    )
}

export default ProductSection