import styles from "./NewsArticle.module.css"

const NewsArticle = ({ img, title, preview }) => {
    return (
        <article className={styles.article}>
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{preview}</p>
            <a>Saiba mais!</a>
        </article>
    )
}

export default NewsArticle