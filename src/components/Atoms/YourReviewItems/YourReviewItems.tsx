import styles from "./YourReviewItems.module.scss";
import Link from "next/link";

interface YourReviewItemsProps {
    link: string;
    Icon: React.ComponentType;
}

const YourReviewItems = ({ link, Icon }: YourReviewItemsProps) => {
    return (
        <li className={styles.YourReview}>
            <Link href={link} className={styles.YourReview__link}>
                <Icon />
            </Link>
        </li>
    );
};

export default YourReviewItems;
