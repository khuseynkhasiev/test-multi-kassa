import styles from "./page.module.scss";
import NewDealIcon from "@/src/images/new-deal-icon.svg";
import Header from "@/src/components/Organisms/Header/Header";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";
import ButtonAction from "@/src/components/Atoms/ButtonAction/ButtonAction";
import LinkText from "@/src/components/Atoms/LinkText/LinkText";
import ApplicationForm from "@/src/components/Molecules/ApplicationForm/ApplicationForm";
import { IApplicationFormData } from "@/src/interfaces/data";

const dataApplicationForm: IApplicationFormData = {
    status: "создана",
    date: "03.06.2024 в 10:23 МСК",
    well: 360_104.3,
    fromPrice: 100_000,
    fromAccount: 2202_2068_0899_3120,
    getPrice: 0.27747725,
    getAccount: "0x892eb0DBEB31F54ef32CaE8d13B3Ace450f80de4",
};
const NewDeal = () => {
    return (
        <div className={styles.newDeal}>
            <Header
                name=""
                title="Новая заявка на обмен!"
                ImageHeader={NewDealIcon}
            />
            <section className={styles.newDeal__containerWrap}>
                <div className={styles.newDeal__container}>
                    <div className={styles.newDeal__textWrap}>
                        <h2 className={styles.newDeal__title}>
                            Создана заявка на обмен
                        </h2>
                        <p className={styles.newDeal__code}>#HW-56195!</p>
                    </div>
                    <ApplicationForm data={dataApplicationForm} />
                    <div className={styles.newDeal__actionWrap}>
                        <ButtonAction
                            text="ПЕРЕЙТИ К СДЕЛКЕ"
                            cls="buttonAction_big"
                        />
                        <LinkText link="https://multikassa.com/deals/9c32522e-ae8a-4e11-a76e-902b735fd17f" />
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

export default NewDeal;
