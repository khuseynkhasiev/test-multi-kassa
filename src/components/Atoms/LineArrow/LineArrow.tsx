import styles from "./LineArrow.module.scss";

interface LineArrowProps {
    color: string;
    Icon: React.ComponentType;
}

const LineArrow = ({ color, Icon }: LineArrowProps) => {
    return (
        <div className={styles.LineArrow}>
            <div
                className={styles.LineArrow__line}
                style={{ backgroundColor: color }}
            />
            <Icon />
        </div>
    );
};

export default LineArrow;
