import Header from "@/src/components/Organisms/Header/Header";
import SuccessfulIcon from "@/src/images/successful-icon.svg";
import styles from "./page.module.scss";
import LinkText from "@/src/components/Atoms/LinkText/LinkText";
import ButtonAction from "@/src/components/Atoms/ButtonAction/ButtonAction";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";

function SuccessfulRegistration() {
    return (
        <div className={styles.successfulRegistration}>
            <Header
                title={"добро пожаловать!"}
                name={"Владислав"}
                ImageHeader={SuccessfulIcon}
            />
            <section className={styles.successfulRegistration__container}>
                <article className={styles.successfulRegistration__thanksInfo}>
                    <div className={styles.successfulRegistration__infoText}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_1_227)">
                                <path
                                    d="M25.3951 4.57956C23.9929 3.05869 22.0688 2.22107 19.9769 2.22107C18.4133 2.22107 16.9813 2.71542 15.7206 3.69027C15.0845 4.18235 14.5081 4.78437 13.9999 5.48704C13.4919 4.78458 12.9153 4.18235 12.279 3.69027C11.0185 2.71542 9.58648 2.22107 8.02283 2.22107C5.93094 2.22107 4.00666 3.05869 2.60441 4.57956C1.21891 6.08266 0.455688 8.13611 0.455688 10.3619C0.455688 12.6528 1.30943 14.7499 3.14237 16.9617C4.78207 18.9401 7.13871 20.9485 9.86776 23.2741C10.7996 24.0683 11.8559 24.9686 12.9527 25.9275C13.2424 26.1813 13.6142 26.321 13.9999 26.321C14.3853 26.321 14.7573 26.1813 15.0466 25.9279C16.1434 24.9688 17.2003 24.0681 18.1326 23.2735C20.8612 20.9483 23.2179 18.9401 24.8576 16.9614C26.6905 14.7499 27.5441 12.6528 27.5441 10.3617C27.5441 8.13611 26.7808 6.08266 25.3951 4.57956Z"
                                    fill="#D7B27B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_227">
                                    <rect
                                        width="27.0884"
                                        height="27.0884"
                                        fill="white"
                                        transform="translate(0.455688 0.739746)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className={styles.successfulRegistration__title}>
                            Благодарим Вас за регистрацию на сайте!
                        </h2>
                        <p className={styles.successfulRegistration__text}>
                            Для подтверждения Вашей почты, пожалуйста, нажмите
                            на кнопку ниже или перейдите по ссылке.
                        </p>
                    </div>
                    <div className={styles.successfulRegistration__actions}>
                        <ButtonAction
                            text="ПОДТВЕРДИТЬ СДЕЛКУ"
                            cls="buttonAction_big"
                        />
                        <LinkText
                            link={
                                "https://multikassa.com/confirm/c71405e63ec9c3b3fd14bfd2481e42f5"
                            }
                        />
                    </div>
                </article>
                <ImportantText
                    text="Если это действие было инициировано не Вами, свяжитесь
с нами или проигнорируйте данное письмо."
                />
            </section>
        </div>
    );
}

export default SuccessfulRegistration;
