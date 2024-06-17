import DealInfoItem from "../../Atoms/DealInfoItem/DealInfoItem";
import styles from "./DealInfo.module.scss";

const DealInfo = () => {
    return (
        <ul className={styles.DealInfo}>
            <DealInfoItem
                text="За данную сделку Вам начислен кешбэк в размере:"
                sum={1.73}
                bgColor="#FFF"
            />
            <DealInfoItem
                text="Ваш баланс кешбэка составляет:"
                sum={122.73}
                bgColor="#EDE8DA"
            />
        </ul>
    );
};

export default DealInfo;
