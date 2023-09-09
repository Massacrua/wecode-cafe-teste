import Category from "components/Category"
import styles from "./CategorySection.module.css"

const CategorySection = () => {
    const categories = [
        {
            id: 0,
            img: require("assets/xicaras-de-cafe.png"),
            name: "Especiais"
        },
        {
            id: 1,
            img: require("assets/graos-de-cafe-e-xicara.png"),
            name: "Tradicionais"
        },
        {
            id: 2,
            img: require("assets/ferramentas-de-fazer-cafe.png"),
            name: "Kits"
        }
    ]
    return (
        <section className={styles.section}>
            {categories.map(category => 
                <Category 
                    category={category} 
                    key={category.id}
                />
            )}
        </section>
    )
}

export default CategorySection