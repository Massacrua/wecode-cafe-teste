import styles from "./Category.module.css"

const Category = ({ category }) => {
    return (
        <div className={styles.card}>
            <img 
                src={category.img}
                alt={category.name}
            />
            <h2>
                {category.name}
            </h2>
        </div> 
    )
}

export default Category