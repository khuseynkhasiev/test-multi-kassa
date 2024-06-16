import styles from "./ButtonAction.module.scss";

interface ButtonActionProps {
    text: string;
    cls: string;
}

const ButtonAction = ({ text, cls }: ButtonActionProps) => {
    const buttonClassName = `${styles.buttonAction} ${styles[cls]}`;

    return <button className={buttonClassName}>{text}</button>;
};

export default ButtonAction;
