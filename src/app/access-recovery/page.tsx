import styles from "./page.module.scss";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";
import AccessRecoveryIcon from "@/src/images/successful-icon.svg";
import Header from "@/src/components/Organisms/Header/Header";

const AccessRecovery = () => {
    return (
        <div className={styles.accessRecovery}>
            <Header
                name={"Владислав"}
                title={"с возвращением!"}
                ImageHeader={AccessRecoveryIcon}
            />
            <section className={styles.accessRecovery__container}>
                <h2 className={styles.accessRecovery__title}>
                    Доступ к Вашему аккаунту был <br />
                    <span
                        className={`${styles.accessRecovery__title} ${styles.accessRecovery__title_orange}`}
                    >
                        успешно восстановлен!
                    </span>
                </h2>

                <ImportantText
                    text="Если это действие было инициировано не Вами, свяжитесь
с нами или проигнорируйте данное письмо."
                />
            </section>
        </div>
    );
};

export default AccessRecovery;
