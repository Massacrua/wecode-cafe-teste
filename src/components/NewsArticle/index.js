import styles from "./NewsArticle.module.css"

const NewsArticle = ({ article }) => {
    return (
        <article className={styles.article}>
            <img src={article.img}/>
            <h3>{article.title}</h3>
            <p>{article.preview}</p>
            <a href="#"> Saiba mais!</a>
        </article>
    )
}

export default NewsArticle