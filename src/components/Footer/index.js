import styles from "./Footer.module.css"
import { ReactComponent as BiggerLogo } from "assets/logo-bigger.svg"
import { ReactComponent as Instagram } from "assets/instagram.svg"
import { ReactComponent as Facebook } from "assets/facebook.svg"
import { ReactComponent as Pinterest } from "assets/pinterest.svg"
import { ReactComponent as Twitter } from "assets/twitter.svg"
import { ReactComponent as Tiktok } from "assets/tiktok.svg"


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <BiggerLogo/>
                <p>©2023 Wecode Tecnologia para e-commerce ltda. <br/> Todos os direitos reservados.</p>
            </div>
            <div className={styles.linkList}>
                <h4>Conecte-se conosco</h4>
                <div className={styles.socialMedia}>
                    <Instagram/>
                    <Facebook/>
                    <Pinterest/>
                    <Twitter/>
                    <Tiktok/>
                </div>
            </div>
            <div className={styles.linkList}>
                <h4>Sobre a empresa</h4>
                <button className={styles.linkButton}>Quem somos</button>
                <button className={styles.linkButton}>Fale conosco</button>
                <button className={styles.linkButton}>Produção Nacional de Café</button>
            </div>
            <div className={styles.linkList}>
                <h4>E-mail</h4>
                <button className={styles.linkButton}>ola@wecode.digital</button>
            </div>
            <div className={styles.linkList}>
                <h4>Telefone</h4>
                <button className={styles.linkButton}>+55 (54) 3028-9452</button>
            </div>
            <div className={styles.linkList}>
                <h4>Endereço</h4>
                <button className={styles.linkButton}>Rua Independência, 2432 - sala 418 <br/>
                    Caxias do Sul, RS - 95.082-380</button>
            </div>
            <div className={styles.linkList}>
                <h4>Políticas</h4>
                <button className={styles.linkButton}>Política de Privacidade</button>
                <button className={styles.linkButton}>Termos de uso</button>
                <button className={styles.linkButton}>Política de Entrega</button>
                <button className={styles.linkButton}>Política de Cupom e Descontos</button>
            </div>
        </footer>
    )
}

export default Footer