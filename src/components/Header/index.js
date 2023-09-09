import styles from "./Header.module.css"
import { ReactComponent as Logo } from "assets/logo.svg"
import { ReactComponent as MenuButton } from "assets/menu.svg"
import { ReactComponent as CartButton } from "assets/cart.svg"
import { ReactComponent as SearchButton } from "assets/search.svg"
import { ReactComponent as UserButton } from "assets/user.svg"
import { ReactComponent as Logo2 } from "assets/logo2.svg"
import { ReactComponent as MenuButton2 } from "assets/menu2.svg"
import { ReactComponent as CartButton2 } from "assets/cart2.svg"
import { ReactComponent as SearchButton2 } from "assets/search2.svg"
import { ReactComponent as UserButton2 } from "assets/user2.svg"
import { useEffect, useState } from "react"

const Header = () => {

    const [scrolledDown, setScrolledDown] = useState()

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY ?
                setScrolledDown(true) :
                setScrolledDown(false)
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    
    if (!scrolledDown) {
        return (
            <header className={styles.header}>
                <div className={styles.headerIcons}>
                    <MenuButton/>
                    <SearchButton/>
                </div>
                <Logo className={styles.logo}/>
                <div className={styles.headerIcons}>
                    <UserButton/>
                    <CartButton/>
                </div>
            </header>
        ) 
    }
    return (
        <header className={`
            ${styles.header} 
            ${styles.scrolledHeader}
        `}>
            <div className={styles.headerIcons}>
                <MenuButton2/>
                <SearchButton2/>
            </div>
            <Logo2 className={styles.logo}/>
            <div className={styles.headerIcons}>
                <UserButton2/>
                <CartButton2/>
            </div>
        </header>
    )
}


export default Header