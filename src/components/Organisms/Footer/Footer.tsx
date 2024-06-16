import NavItemsLink from "../../Molecules/NavIconLinks/NavItemsLink";
import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <p className={styles.footer__copyright}>2022 © MultiKassa</p>
                <p className={styles.footer__description}>
                    Cryptocurrency exchange
                </p>
                <NavItemsLink />
            </div>
        </footer>
    );
};

export default Footer;
