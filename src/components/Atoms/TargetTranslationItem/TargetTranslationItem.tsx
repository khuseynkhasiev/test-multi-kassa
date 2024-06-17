import styles from "./TargetTranslationItem.module.scss";

interface TargetTranslationItemProps {
    name: string;
    shortName: string;
    Icon: React.ComponentType;
}

const TargetTranslationItem = ({
    name,
    shortName,
    Icon,
}: TargetTranslationItemProps) => {
    return (
        <div className={styles.TargetTranslationItem}>
            <div className={styles.TargetTranslationItem__leftFrom}>
                <div className={styles.TargetTranslationItem__icon}>
                    <Icon />
                </div>
                <p className={styles.TargetTranslationItem__leftFromText}>
                    {name}
                </p>
            </div>

            <div className={styles.TargetTranslationItem__rightFrom}>
                <p className={styles.TargetTranslationItem__rightFromText}>
                    {shortName}
                </p>
            </div>
        </div>
    );
};

export default TargetTranslationItem;
