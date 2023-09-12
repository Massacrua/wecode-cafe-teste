import styles from "./Header.module.css"
import { ReactComponent as Logo } from "assets/logo.svg"
import { ReactComponent as MenuButton } from "assets/menu.svg"
import { ReactComponent as CartButton } from "assets/cart.svg"
import { ReactComponent as SearchButton } from "assets/search.svg"
import { ReactComponent as UserButton } from "assets/user.svg"
import { ReactComponent as BlackLogo } from "assets/logo2.svg"
import { ReactComponent as BlackMenuButton } from "assets/menu2.svg"
import { ReactComponent as BlackCartButton } from "assets/cart2.svg"
import { ReactComponent as BlackSearchButton } from "assets/search2.svg"
import { ReactComponent as BlackUserButton } from "assets/user2.svg"

const Header = ({ scrolledDown, cartItems, openMenu }) => {

    if (!scrolledDown) {
        return (
            <header className={styles.header}>
                <div className={styles.headerIcons}>
                    <MenuButton onClick={() => openMenu()}/>
                    <SearchButton/>
                </div>
                <Logo className={styles.logo}/>
                <div className={styles.headerIcons}>
                    <UserButton/>
                    <CartButton/>
                    <span className={styles.cartItems}>{cartItems}</span>
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
                <BlackMenuButton onClick={() => openMenu()}/>
                <BlackSearchButton/>
            </div>
            <BlackLogo className={styles.logo}/>
            <div className={styles.headerIcons}>
                <BlackUserButton/>
                <BlackCartButton/>
                <span className={styles.cartItems}>{cartItems}</span>
            </div>
        </header>
    )
}


export default Header