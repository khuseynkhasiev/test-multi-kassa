import YourReviewItems from "../../Atoms/YourReviewItems/YourReviewItems";
import styles from "./YourReview.module.scss";
import BestChangeIcon from "@/src/images/bestchange.svg";
import GisIcon from "@/src/images/2gis.svg";
import YandexIcon from "@/src/images/yandex.svg";

const YourReview = () => {
    return (
        <section className={styles.YourReview}>
            <h3 className={styles.YourReview__title}>
                Будем рады Вашему отзыву 👇
            </h3>
            <ul className={styles.YourReview__resources}>
                <YourReviewItems link="#" Icon={BestChangeIcon} />
                <YourReviewItems link="#" Icon={GisIcon} />
                <YourReviewItems link="#" Icon={YandexIcon} />
            </ul>
        </section>
    );
};

export default YourReview;
