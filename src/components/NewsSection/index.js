import SectionTitle from "components/SectionTitle"
import styles from "./NewsSection.module.css"
import SectionSubtitle from "components/SectionSubtitle"

const NewsSection = () => {
    const news = [
        {
            id: 0,
            title: "Café corta o efeito da creatina? Entenda como tomar!",
            preview: 'Uma dúvida recorrenta das peesoas que treinam e/ou fazem musculação é: "Será que o café corta o efeito da...',
            img: require("assets/cafe-dentro-de-casa.png")
        },
        {
            id: 1,
            title: "Cardápio de cafeteria: Saiba como montar e o que oferecer!",
            preview: 'Abrir uma cafeteria é uma ótima oportunidade para aproveitar o alto potencial de lucratividade desse...',
            img: require("assets/casal-pedindo-comida.png")
        },
        {
            id: 2,
            title: "Como fazer pudim de café com ou sem forno: Aprenda aqui!",
            preview: 'Além de ser o queridinho do brasileiro no dia a dia, o café é um ingrediente muito versátil para diversas receitas doces...',
            img: require("assets/prato-pudim.png")
        },
        {
            id: 3,
            title: "Café Arábica: saiba o que é e quais as diferenças do grão",
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
            img: require("assets/cafe-placa-arabica.png")
        }
    ]

    return (
        <section className={styles.section}>
            <div className={styles.titles}>
                <SectionTitle>Conheça mais</SectionTitle>
                <SectionSubtitle>Fique por dentro de tudo que acontece no universo cafeeiro</SectionSubtitle>
            </div>
            <div className={styles.newsContainer}>
                <div className={styles.newsList}></div>
            </div>
        </section>
    )
}

export default NewsSection