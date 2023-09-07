import styles from "./Header.module.css"
import { ReactComponent as Logo } from "assets/logo.svg"
import { ReactComponent as MenuButton } from "assets/menu.svg"
import { ReactComponent as CartButton } from "assets/cart.svg"
import { ReactComponent as SearchButton } from "assets/search.svg"
import { ReactComponent as UserButton } from "assets/user.svg"

const Header = () => (
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


export default Header