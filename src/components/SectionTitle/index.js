import styles from "./SectionTitle.module.css"

const SectionTitle = ({children}) => {
    return (
        <h1 
            className={styles.sectionTitle}
        >
            {children}
        </h1>
    )
}

export default SectionTitle