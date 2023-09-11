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
                <p>©2023 Wecode Tecnologia para e-commerce ltda. Todos os direitos reservados.</p>
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
                <a>Quem somos</a>
                <a>Fale conosco</a>
                <a>Produção Nacional de Café</a>
            </div>
            <div className={styles.linkList}>
                <h4>E-mail</h4>
                <a>ola@wecode.digital</a>
            </div>
            <div className={styles.linkList}>
                <h4>Telefone</h4>
                <a>+55 (54) 3028-9452</a>
            </div>
            <div className={styles.linkList}>
                <h4>Endereço</h4>
                <a>Rua Independência, 2432 - sala 418 <br/>
                    Caxias do Sul, RS - 95.082-380</a>
            </div>
            <div className={styles.linkList}>
                <h4>Políticas</h4>
                <a>Política de Privacidade</a>
                <a>Termos de uso</a>
                <a>Política de Entrega</a>
                <a>Política de Cupom e Descontos</a>
            </div>
        </footer>
    )
}

export default Footer