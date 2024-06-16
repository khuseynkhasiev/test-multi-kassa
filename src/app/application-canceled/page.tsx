import styles from "./page.module.scss";
import ApplicationCanceledIcon from "@/src/images/verification-code-icon.svg";
import Header from "@/src/components/Organisms/Header/Header";
import VerificationInput from "@/src/components/Atoms/VerificationInput/VerificationInput";
import ButtonAction from "@/src/components/Atoms/ButtonAction/ButtonAction";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";
import LinkText from "@/src/components/Atoms/LinkText/LinkText";

const ApplicationCanceled = () => {
    return (
        <div className={styles.applicationCanceled}>
            <Header
                name=""
                title="Ваша заявка отменена"
                ImageHeader={ApplicationCanceledIcon}
            />
            <section className={styles.applicationCanceled__container}>
                <div className={styles.applicationCanceled__textWrap}>
                    <h2 className={styles.applicationCanceled__title}>
                        Уважаемый клиент, ваша заявка <br />{" "}
                        <span
                            className={`${styles.applicationCanceled__title} ${styles.applicationCanceled__title_orange}`}
                        >
                            #HW-56195 отменена!
                        </span>
                    </h2>
                    <p className={styles.applicationCanceled__text}>
                        Будем рады видеть вас вновь 🙏
                    </p>
                </div>
                <ImportantText
                    text="Если это действие было инициировано не Вами, свяжитесь
с нами или проигнорируйте данное письмо."
                />
            </section>
        </div>
    );
};

export default ApplicationCanceled;
