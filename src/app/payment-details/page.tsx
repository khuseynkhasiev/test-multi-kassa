import styles from "./page.module.scss";
import PaymentDetailsIcon from "@/src/images/payment-details-icon.svg";
import Header from "@/src/components/Organisms/Header/Header";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";
import ButtonAction from "@/src/components/Atoms/ButtonAction/ButtonAction";
import LinkText from "@/src/components/Atoms/LinkText/LinkText";
import ApplicationForm from "@/src/components/Molecules/ApplicationForm/ApplicationForm";
import { IApplicationFormData } from "@/src/interfaces/data";

const dataApplicationForm: IApplicationFormData = {
    status: "ожидает оплаты",
    date: "03.06.2024 в 10:23 МСК",
    well: 360_104.3,
    fromPrice: 100_000,
    fromAccount: 2202_2068_0899_3120,
    getPrice: 0.27747725,
    getAccount: "0x892eb0DBEB31F54ef32CaE8d13B3Ace450f80de4",
};
const PaymentDetails = () => {
    return (
        <div className={styles.PaymentDetails}>
            <Header
                name=""
                title="Реквизиты для оплаты"
                ImageHeader={PaymentDetailsIcon}
            />
            <section className={styles.PaymentDetails__section}>
                <div className={styles.PaymentDetails__containerWrap}>
                    <div className={styles.PaymentDetails__container}>
                        <div className={styles.PaymentDetails__textWrap}>
                            <h2 className={styles.PaymentDetails__title}>
                                Реквизиты для оплаты заявки
                            </h2>
                            <p className={styles.PaymentDetails__code}>
                                #HW-56195!
                            </p>
                        </div>
                        <div className={styles.PaymentDetails__cardContainer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                            >
                                <circle
                                    cx="20"
                                    cy="20.0654"
                                    r="20"
                                    fill="white"
                                />
                                <path
                                    d="M9.99951 11.5477H29.9999V21.6103C29.9999 24.1906 28.6281 26.5696 26.3931 27.8646L20.0045 31.5577L13.6159 27.8646C11.3808 26.5792 10.0091 24.1906 10.0091 21.6103V11.5477H9.99951Z"
                                    fill="#FFDD2D"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.4867 16.8434V19.9705C15.9184 19.4909 16.6953 19.1648 17.5779 19.1648H18.5467V22.8003C18.5467 23.7692 18.2877 24.6133 17.8944 25.0833H22.0959C21.7026 24.6133 21.4436 23.7692 21.4436 22.8003V19.1648H22.4125C23.3046 19.1648 24.0816 19.4909 24.5036 19.9705V16.8434H15.4867Z"
                                    fill="#333333"
                                />
                            </svg>
                            <div className={styles.PaymentDetails__cardInfo}>
                                <p
                                    className={
                                        styles.PaymentDetails__cardNumber
                                    }
                                >
                                    2202 2068 0899 3120
                                </p>
                                <p className={styles.PaymentDetails__cardName}>
                                    Симонов Николай Андреевич
                                </p>
                            </div>
                        </div>
                        <ul className={styles.PaymentDetails__getCartInfo}>
                            <li className={styles.PaymentDetails__getCartItem}>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemKey
                                    }
                                >
                                    Тип:
                                </p>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemValue
                                    }
                                >
                                    Банковская карта
                                </p>
                            </li>
                            <li className={styles.PaymentDetails__getCartItem}>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemKey
                                    }
                                >
                                    Номер карты
                                </p>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemValue
                                    }
                                >
                                    2202 2068 0899 3120
                                    <button
                                        className={
                                            styles.PaymentDetails__getCartItemBtn
                                        }
                                        aria-label="copy number card"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="14"
                                            viewBox="0 0 13 14"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_1_2678)">
                                                <path
                                                    d="M8.125 1.94043H2.4375C1.7644 1.94043 1.21875 2.44411 1.21875 3.06543V10.5654C1.21875 11.1868 1.7644 11.6904 2.4375 11.6904H8.125C8.7981 11.6904 9.34375 11.1868 9.34375 10.5654V3.06543C9.34375 2.44411 8.7981 1.94043 8.125 1.94043Z"
                                                    fill="#D7B27B"
                                                />
                                                <path
                                                    d="M11.7804 1.56543V9.06543C11.7794 9.36352 11.6507 9.64916 11.4224 9.85994C11.194 10.0707 10.8846 10.1895 10.5616 10.1904H10.1554V3.06543C10.1554 2.56815 9.94138 2.09124 9.56045 1.7396C9.17952 1.38797 8.66286 1.19043 8.12414 1.19043H3.72852C3.81233 0.971599 3.96742 0.782054 4.17252 0.647782C4.37762 0.513509 4.62269 0.441082 4.87414 0.44043H10.5616C10.8846 0.44132 11.194 0.560132 11.4224 0.770918C11.6507 0.981704 11.7794 1.26733 11.7804 1.56543Z"
                                                    fill="#D7B27B"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_2678">
                                                    <rect
                                                        width="13"
                                                        height="13"
                                                        fill="white"
                                                        transform="translate(0 0.0654297)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </p>
                            </li>
                            <li className={styles.PaymentDetails__getCartItem}>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemKey
                                    }
                                >
                                    Получатель:
                                </p>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemValue
                                    }
                                >
                                    Симонов Николай Андреевич
                                </p>
                            </li>
                            <li className={styles.PaymentDetails__getCartItem}>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemKey
                                    }
                                >
                                    Комментарий
                                </p>
                                <p
                                    className={
                                        styles.PaymentDetails__getCartItemValue
                                    }
                                >
                                    1234
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.PaymentDetails__container}>
                        <ApplicationForm data={dataApplicationForm} />
                        <div className={styles.PaymentDetails__actionWrap}>
                            <ButtonAction
                                text="ПЕРЕЙТИ К СДЕЛКЕ"
                                cls="buttonAction_big"
                            />
                            <LinkText link="https://multikassa.com/deals/9c32522e-ae8a-4e11-a76e-902b735fd17f" />
                        </div>
                    </div>
                </div>

                <ImportantText
                    text="Если это действие было инициировано не Вами, свяжитесь
с нами или проигнорируйте данное письмо."
                />
            </section>
        </div>
    );
};

export default PaymentDetails;
