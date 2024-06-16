import styles from "./page.module.scss";
import CodeIcon from "@/src/images/code-icon.svg";
import Header from "@/src/components/Organisms/Header/Header";
import VerificationInput from "@/src/components/Atoms/VerificationInput/VerificationInput";
import ButtonAction from "@/src/components/Atoms/ButtonAction/ButtonAction";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";
import LinkText from "@/src/components/Atoms/LinkText/LinkText";

const Code = () => {
    return (
        <div className={styles.code}>
            <Header
                name=""
                title="Ваш код подтверждения"
                ImageHeader={CodeIcon}
            />
            <section className={styles.code__container}>
                <form action="" className={styles.code__form}>
                    <div className={styles.code__textWrap}>
                        <h2 className={styles.code__title}>
                            Код для подтверждения сделки
                        </h2>
                        <p className={styles.code__code}>#HW-56195!</p>
                    </div>
                    <div className={styles.code__inputs}>
                        <VerificationInput
                            value="1"
                            cls="verificationInput_big"
                        />
                        <VerificationInput
                            value="3"
                            cls="verificationInput_big"
                        />
                        <VerificationInput
                            value="2"
                            cls="verificationInput_big"
                        />
                        <VerificationInput
                            value="4"
                            cls="verificationInput_big"
                        />
                    </div>
                    <div className={styles.code__actionWrap}>
                        <ButtonAction
                            text="ПОДТВЕРДИТЬ СДЕЛКУ"
                            cls="buttonAction_small"
                        />
                        <LinkText link="https://multikassa.com/reset/c71405e63ec9c3b3fd14bfd2481e42f5" />
                    </div>
                </form>
                <ImportantText
                    text="Если это действие было инициировано не Вами, свяжитесь
с нами или проигнорируйте данное письмо."
                />
            </section>
        </div>
    );
};

export default Code;
