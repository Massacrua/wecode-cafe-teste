import styles from "./Banner.module.css"
import { Swiper } from 'antd-mobile'

const Banner = () => {
    return (
        <div>
            <Swiper 
                style={{position: "relative"}}
                autoplay 
                autoplayInterval={5000}
                indicatorProps={{style:{
                    "--active-dot-color": "#FFF",
                    "--dot-color": "#8A8A8A",
                    "--active-dot-size": "6px",
                    "--dot-size": "6px",
                    "--dot-border-radius": "6px",
                    "--dot-spacing": "4px",
                    position: "absolute",
                    right: "calc(45vw - 2rem)",
                    bottom: "2rem"
                }}}
            >
                <Swiper.Item>
                    <img 
                        src={require("assets/banner1.png")} 
                        className={styles.bannerImg} 
                        alt="Banner com uma foto de café."
                    />
                    <div className={styles.bannerContent}>
                        <h1>.[Café Dev]; 500ml</h1>
                        <p>com <strong>10% OFF</strong></p>
                    </div>
                    <button className={styles.button}>Veja mais</button>
                </Swiper.Item>
                <Swiper.Item>
                    <img 
                        src={require("assets/banner2.png")} 
                        className={styles.bannerImg} 
                        alt="Banner com uma foto de café."
                    />
                    <div className={`
                        ${styles.bannerContent} 
                        ${styles.bannerContent2}
                    `}>
                        <p>Lançamento!</p>
                        <h1>Cafe Designer <br/>- 500ml</h1>
                    </div>
                    <button className={styles.button}>Veja mais</button>
                </Swiper.Item>
            </Swiper>
        </div>
    )
}

export default Banner

