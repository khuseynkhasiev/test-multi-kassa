import styles from "./VerificationInput.module.scss";
interface InterfaceVerificationInputProps {
    value: string;
    cls: string;
}
const VerificationInput = ({ value, cls }: InterfaceVerificationInputProps) => {
    const inputClassName = `${styles.verificationInput} ${styles[cls]}`;
    return <input type="text" className={inputClassName} placeholder={value} />;
};

export default VerificationInput;
