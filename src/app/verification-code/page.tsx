import Header from "@/src/components/Organisms/Header/Header";
import VerificationIcon from "@/src/images/verification-code-icon.svg";
import ButtonAction from "@/src/components/Atoms/ButtonAction/ButtonAction";
import styles from "./page.module.scss";
import VerificationInput from "@/src/components/Atoms/VerificationInput/VerificationInput";
import LinkText from "@/src/components/Atoms/LinkText/LinkText";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";

const VerificationCode = () => {
    return (
        <div className={styles.verificationCode}>
            <Header
                title="забыли пароль?"
                name="Владислав"
                ImageHeader={VerificationIcon}
            />
            <section className={styles.verificationCode__container}>
                <div className={styles.verificationCode__wrapTop}>
                    <h2 className={styles.verificationCode__title}>
                        Мы получили Ваш запрос на восстановление пароля!
                    </h2>
                    <p className={styles.verificationCode__subtitle}>
                        Для восстановление пароля введите код ниже в форме
                        восстановления или перейдите по ссылке.
                    </p>
                    <form action="" className={styles.verificationCode__form}>
                        <div className={styles.verificationCode__inputs}>
                            <VerificationInput
                                value="1"
                                cls="verificationInput_small"
                            />
                            <VerificationInput
                                value="2"
                                cls="verificationInput_small"
                            />
                            <VerificationInput
                                value="3"
                                cls="verificationInput_small"
                            />
                            <VerificationInput
                                value="4"
                                cls="verificationInput_small"
                            />
                            <VerificationInput
                                value="5"
                                cls="verificationInput_small"
                            />
                            <VerificationInput
                                value="6"
                                cls="verificationInput_small"
                            />
                        </div>
                        <ButtonAction
                            text="СБРОСИТЬ ПАРОЛЬ"
                            cls="buttonAction_small"
                        />
                        <LinkText link="https://multikassa.com/reset/c71405e63ec9c3b3fd14bfd2481e42f5" />
                    </form>
                </div>
                <ImportantText
                    text="Если это действие было инициировано не Вами, свяжитесь
с нами или проигнорируйте данное письмо."
                />
            </section>
        </div>
    );
};

export default VerificationCode;
