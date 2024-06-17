import styles from "./ApplicationForm.module.scss";
import TargetTranslation from "@/src/components/Molecules/TargetTranslation/TargetTranslation";
import { IApplicationFormData } from "@/src/interfaces/data";
import LineArrow from "../../Atoms/LineArrow/LineArrow";
import LineArrowTopIcon from "@/src/images/line-arrow-top-icon.svg";
import LineArrowBottomIcon from "@/src/images/line-arrow-bottom-icon.svg";

const ApplicationForm = ({ data }: { data: IApplicationFormData }) => {
    const { status, date, well, fromPrice, fromAccount, getPrice, getAccount } =
        data;
    return (
        <form action="" className={styles.ApplicationForm}>
            <TargetTranslation />
            <ul className={styles.ApplicationForm__statusInfo}>
                <li className={styles.ApplicationForm__item}>
                    <p className={styles.ApplicationForm__key}>
                        Статус заявки:
                    </p>
                    <p className={styles.ApplicationForm__value}>{status}</p>
                </li>
                <li className={styles.ApplicationForm__item}>
                    <p className={styles.ApplicationForm__key}>Дата и время:</p>
                    <p className={styles.ApplicationForm__value}>{date}</p>
                </li>
                <li className={styles.ApplicationForm__item}>
                    <p className={styles.ApplicationForm__key}>Курс обмена:</p>
                    <p className={styles.ApplicationForm__value}>{well}₽</p>
                </li>
            </ul>
            <ul className={styles.ApplicationForm__statusInfo}>
                <LineArrow color="#D7B27B" Icon={LineArrowTopIcon} />
                <li className={styles.ApplicationForm__item}>
                    <p className={styles.ApplicationForm__key}>Отдаёте:</p>
                    <p className={styles.ApplicationForm__value}>
                        {fromPrice}₽
                    </p>
                </li>
                <li className={styles.ApplicationForm__item}>
                    <p className={styles.ApplicationForm__key}>Со счёта:</p>
                    <p className={styles.ApplicationForm__value}>
                        {fromAccount}
                    </p>
                </li>
            </ul>
            <ul className={styles.ApplicationForm__statusInfo}>
                <LineArrow color="#D7B27B" Icon={LineArrowBottomIcon} />
                <li className={styles.ApplicationForm__item}>
                    <p className={styles.ApplicationForm__key}>Получаете:</p>
                    <p className={styles.ApplicationForm__value}>
                        {getPrice} ETH
                    </p>
                </li>
                <li className={styles.ApplicationForm__item}>
                    <p className={styles.ApplicationForm__key}>На счет:</p>
                    <p className={styles.ApplicationForm__value}>
                        {getAccount}
                    </p>
                </li>
            </ul>
        </form>
    );
};

export default ApplicationForm;
