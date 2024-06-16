import Link from "next/link";
import styles from "./LinkText.module.scss";
interface LinkTextProps {
    link: string;
}

const LinkText = ({ link }: LinkTextProps) => {
    return (
        <Link className={styles.link} href={link}>
            {link}
        </Link>
    );
};

export default LinkText;
