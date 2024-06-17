import styles from "./page.module.scss";
import ApplicationCompletedIcon from "@/src/images/new-deal-icon.svg";
import Header from "@/src/components/Organisms/Header/Header";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";
import ButtonAction from "@/src/components/Atoms/ButtonAction/ButtonAction";
import LinkText from "@/src/components/Atoms/LinkText/LinkText";
import ApplicationForm from "@/src/components/Molecules/ApplicationForm/ApplicationForm";
import { IApplicationFormData } from "@/src/interfaces/data";
import DealInfo from "@/src/components/Molecules/DealInfo/DealInfo";
import YourReview from "@/src/components/Molecules/YourReview/YourReview";

const dataApplicationForm: IApplicationFormData = {
    status: "выполнена",
    date: "03.06.2024 в 10:23 МСК",
    well: 360_104.3,
    fromPrice: 100_000,
    fromAccount: 2202_2068_0899_3120,
    getPrice: 0.27747725,
    getAccount: "0x892eb0DBEB31F54ef32CaE8d13B3Ace450f80de4",
};
const ApplicationCompleted = () => {
    return (
        <div className={styles.ApplicationCompleted}>
            <Header
                name="Владислав"
                title="Спасибо за сделку"
                ImageHeader={ApplicationCompletedIcon}
            />
            <section className={styles.ApplicationCompleted__section}>
                <div className={styles.ApplicationCompleted__sectionWrap}>
                    <div className={styles.ApplicationCompleted__container}>
                        <div className={styles.ApplicationCompleted__textWrap}>
                            <h2 className={styles.ApplicationCompleted__title}>
                                Уважаемый клиент, Ваша заявка
                            </h2>
                            <p className={styles.ApplicationCompleted__title}>
                                <span
                                    className={
                                        styles.ApplicationCompleted__title_code
                                    }
                                >
                                    #HW-56195!{" "}
                                </span>
                                успешно выполнена! 🤝
                            </p>
                        </div>
                        <ApplicationForm data={dataApplicationForm} />
                        <DealInfo />
                        <p className={styles.ApplicationCompleted__cashText}>
                            Перейдите в личный кабинет по кнопке ниже , чтобы
                            посмотреть ваш кешбэк
                        </p>
                        <div
                            className={styles.ApplicationCompleted__actionWrap}
                        >
                            <ButtonAction
                                text="ПЕРЕЙТИ К СДЕЛКЕ"
                                cls="buttonAction_big"
                            />
                            <LinkText link="https://multikassa.com/deals/9c32522e-ae8a-4e11-a76e-902b735fd17f" />
                        </div>
                    </div>
                    <YourReview />
                </div>

                <ImportantText
                    text="Если это действие было инициировано не Вами, свяжитесь
с нами или проигнорируйте данное письмо."
                />
            </section>
        </div>
    );
};

export default ApplicationCompleted;
