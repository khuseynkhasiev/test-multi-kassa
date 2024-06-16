import React from "react";
import styles from "./Header.module.scss";
import LogoIcon from "@/src/images/multikassa-logo.svg";

interface HeaderProps {
    title: string;
    name: string;
    ImageHeader: React.ComponentType;
}

const Header: React.FC<HeaderProps> = ({ title, name, ImageHeader }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__info}>
                    <LogoIcon className={styles.header__logo} />
                    <h1 className={styles.header__title}>
                        {Boolean(name) && (
                            <span
                                className={`${styles.header__title} ${styles.header__title_orange}`}
                            >
                                {name},{" "}
                            </span>
                        )}

                        {title}
                    </h1>
                </div>
                <div className={styles.header__image}>
                    <ImageHeader />
                </div>{" "}
            </div>
        </header>
    );
};

export default Header;
