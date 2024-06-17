import TargetTranslationItem from "../../Atoms/TargetTranslationItem/TargetTranslationItem";
import styles from "./TargetTranslation.module.scss";
import SberIcon from "@/src/images/sber-icon.svg";
import EthIcon from "@/src/images/ethereum-icon.svg";

const TargetTranslation = () => {
    return (
        <div className={styles.TargetTranslation}>
            <TargetTranslationItem
                name="Сбербанк RUB"
                shortName="SBERRUB"
                Icon={SberIcon}
            />
            <button className={styles.TargetTranslation__btn} aria-label="okey">
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="none"
                >
                    <circle cx="18" cy="18.0654" r="18" fill="#D7B27B" />
                    <path
                        d="M27.2639 17.7413C27.6544 18.1318 27.6544 18.765 27.2639 19.1555L20.8999 25.5195C20.5094 25.91 19.8762 25.91 19.4857 25.5195C19.0952 25.129 19.0952 24.4958 19.4857 24.1053L25.1425 18.4484L19.4857 12.7916C19.0952 12.401 19.0952 11.7679 19.4857 11.3774C19.8762 10.9868 20.5094 10.9868 20.8999 11.3774L27.2639 17.7413ZM10.0322 17.4484L26.5568 17.4484V19.4484L10.0322 19.4484V17.4484Z"
                        fill="#F5F5F5"
                    />
                </svg>
            </button>

            <TargetTranslationItem
                name="Ethereum"
                shortName="ETH"
                Icon={EthIcon}
            />
        </div>
    );
};

export default TargetTranslation;
