import styles from "./SectionSubtitle.module.css"

const SectionSubtitle = ({children}) => {
    return (
        <h2 
            className={styles.sectionSubtitle}
        >
            {children}
        </h2>
    )
}

export default SectionSubtitle