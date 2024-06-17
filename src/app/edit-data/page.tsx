import styles from "./page.module.scss";
import EditDataIcon from "@/src/images/successful-icon.svg";
import Header from "@/src/components/Organisms/Header/Header";
import ImportantText from "@/src/components/Atoms/ImportantText/ImportantText";

const EditData = () => {
    return (
        <div className={styles.editData}>
            <Header
                name="Владислав"
                title="добрый день!"
                ImageHeader={EditDataIcon}
            />
            <section className={styles.editData__container}>
                <div className={styles.editData__wrap}>
                    <h2 className={styles.editData__title}>
                        В личном кабинет были <br /> изменены следующие данные:
                    </h2>
                    <ul className={styles.editData__items}>
                        <li className={styles.editData__item}>
                            <div className={styles.editData__key}>
                                <svg
                                    className={styles.editData__keyIcon}
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="user 1"
                                        clip-path="url(#clip0_1_929)"
                                    >
                                        <path
                                            id="Vector"
                                            d="M4.92874 5.31705C5.59052 5.31705 6.16356 5.0797 6.63177 4.6114C7.09999 4.14319 7.33734 3.5703 7.33734 2.90845C7.33734 2.24683 7.09999 1.67386 6.6317 1.20549C6.16341 0.73735 5.59044 0.5 4.92874 0.5C4.26689 0.5 3.694 0.73735 3.22578 1.20557C2.75757 1.67378 2.52014 2.24675 2.52014 2.90845C2.52014 3.5703 2.75757 4.14326 3.22586 4.61148C3.69415 5.07962 4.26712 5.31705 4.92874 5.31705Z"
                                            fill="#D7B27B"
                                        />
                                        <path
                                            id="Vector_2"
                                            d="M9.14314 8.18956C9.12964 7.99471 9.10233 7.78215 9.06212 7.55769C9.02153 7.33156 8.96927 7.11778 8.90671 6.92239C8.84209 6.72044 8.7542 6.52101 8.64555 6.3299C8.53279 6.13153 8.40034 5.9588 8.25172 5.81667C8.09631 5.66797 7.90604 5.54842 7.686 5.46121C7.46674 5.37447 7.22374 5.33052 6.96381 5.33052C6.86172 5.33052 6.763 5.37241 6.57234 5.49654C6.455 5.57306 6.31775 5.66156 6.16455 5.75945C6.03355 5.84291 5.85609 5.92111 5.6369 5.99191C5.42305 6.06111 5.20592 6.09621 4.99161 6.09621C4.7773 6.09621 4.56024 6.06111 4.34616 5.99191C4.1272 5.92119 3.94974 5.84299 3.81889 5.75952C3.66714 5.66255 3.52982 5.57405 3.41072 5.49646C3.22029 5.37233 3.12149 5.33044 3.01941 5.33044C2.7594 5.33044 2.51648 5.37447 2.29729 5.46129C2.07741 5.54834 1.88705 5.66789 1.73149 5.81674C1.58295 5.95895 1.45042 6.13161 1.33781 6.3299C1.22925 6.52101 1.14136 6.72037 1.07666 6.92247C1.01418 7.11786 0.961914 7.33156 0.921326 7.55769C0.881119 7.78185 0.853806 7.99448 0.840302 8.18979C0.827026 8.38113 0.820312 8.57973 0.820312 8.7803C0.820312 9.30231 0.986252 9.7249 1.31348 10.0366C1.63666 10.3441 2.06429 10.5001 2.5843 10.5001H7.39937C7.91939 10.5001 8.34686 10.3442 8.67012 10.0366C8.99742 9.72513 9.16336 9.30246 9.16336 8.78023C9.16328 8.57874 9.15649 8.37999 9.14314 8.18956Z"
                                            fill="#D7B27B"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_929">
                                            <rect
                                                width="10"
                                                height="10"
                                                fill="white"
                                                transform="translate(0 0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={styles.editData__keyText}>
                                    Имя пользователя:
                                </p>
                            </div>
                            <div className={styles.editData__dataWrap}>
                                <div className={styles.editData__dataBg}>
                                    <p className={styles.editData__valueText}>
                                        Old name
                                    </p>
                                </div>
                                <svg
                                    className={styles.editData__changeIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="37"
                                    height="36"
                                    viewBox="0 0 37 36"
                                    fill="none"
                                >
                                    <circle
                                        cx="18.5"
                                        cy="18"
                                        r="15.5"
                                        fill="#D7B27B"
                                        stroke="white"
                                        stroke-width="5"
                                    />
                                    <path
                                        d="M27.7639 17.6758C28.1544 18.0664 28.1544 18.6995 27.7639 19.09L21.3999 25.454C21.0094 25.8445 20.3762 25.8445 19.9857 25.454C19.5952 25.0635 19.5952 24.4303 19.9857 24.0398L25.6425 18.3829L19.9857 12.7261C19.5952 12.3356 19.5952 11.7024 19.9857 11.3119C20.3762 10.9213 21.0094 10.9213 21.3999 11.3119L27.7639 17.6758ZM10.5322 17.3829L27.0568 17.3829V19.3829L10.5322 19.3829V17.3829Z"
                                        fill="white"
                                    />
                                </svg>
                                <div className={styles.editData__dataBg}>
                                    <p className={styles.editData__valueText}>
                                        New name
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.editData__item}>
                            <div className={styles.editData__key}>
                                <svg
                                    className={styles.editData__keyIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1_943)">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.81715 9.29608C9.75074 9.36227 9.67066 9.44692 9.58576 9.53645C9.37389 9.76131 9.1092 10.0408 8.9433 10.1542C8.07045 10.7506 6.90271 10.4653 6.07672 10.1211C4.98709 9.66709 3.80078 8.83026 2.7356 7.76495C1.66943 6.69956 0.832675 5.51288 0.378671 4.42387C0.0349208 3.5977 -0.251075 2.42973 0.345468 1.55668C0.458749 1.39067 0.738925 1.12639 0.963495 0.914106C1.05334 0.829458 1.13732 0.749477 1.20373 0.683286C1.32162 0.565977 1.48117 0.500122 1.64749 0.500122C1.8138 0.500122 1.97335 0.565977 2.09125 0.683286L3.69726 2.28883C3.81451 2.40672 3.88032 2.56623 3.88032 2.7325C3.88032 2.89876 3.81451 3.05827 3.69726 3.17616L3.25976 3.61278C3.11366 3.75782 3.01828 3.94616 2.98785 4.14978C2.95741 4.35339 2.99353 4.56139 3.09084 4.74282C3.69259 5.87857 4.62159 6.80741 5.75744 7.40897C5.93883 7.50624 6.14679 7.54232 6.35034 7.51183C6.5539 7.48134 6.74216 7.38592 6.88709 7.23977L7.32351 6.80313C7.44141 6.68582 7.60096 6.61997 7.76727 6.61997C7.93359 6.61997 8.09314 6.68582 8.21103 6.80313L9.81715 8.40895C9.93439 8.5268 10.0002 8.68628 10.0002 8.85252C10.0002 9.01875 9.93439 9.17823 9.81715 9.29608Z"
                                            fill="#D7B27B"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_943">
                                            <rect
                                                width="10"
                                                height="10"
                                                fill="white"
                                                transform="translate(0 0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={styles.editData__keyText}>
                                    Телефон:
                                </p>
                            </div>
                            <div className={styles.editData__dataWrap}>
                                <div className={styles.editData__dataBg}>
                                    <p className={styles.editData__valueText}>
                                        Old phone
                                    </p>
                                </div>
                                <svg
                                    className={styles.editData__changeIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="37"
                                    height="36"
                                    viewBox="0 0 37 36"
                                    fill="none"
                                >
                                    <circle
                                        cx="18.5"
                                        cy="18"
                                        r="15.5"
                                        fill="#D7B27B"
                                        stroke="white"
                                        stroke-width="5"
                                    />
                                    <path
                                        d="M27.7639 17.6758C28.1544 18.0664 28.1544 18.6995 27.7639 19.09L21.3999 25.454C21.0094 25.8445 20.3762 25.8445 19.9857 25.454C19.5952 25.0635 19.5952 24.4303 19.9857 24.0398L25.6425 18.3829L19.9857 12.7261C19.5952 12.3356 19.5952 11.7024 19.9857 11.3119C20.3762 10.9213 21.0094 10.9213 21.3999 11.3119L27.7639 17.6758ZM10.5322 17.3829L27.0568 17.3829V19.3829L10.5322 19.3829V17.3829Z"
                                        fill="white"
                                    />
                                </svg>
                                <div className={styles.editData__dataBg}>
                                    <p className={styles.editData__valueText}>
                                        New name
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.editData__item}>
                            <div className={styles.editData__key}>
                                <svg
                                    className={styles.editData__keyIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1_956)">
                                        <path
                                            d="M3.92376 6.82563L3.75835 9.15229C3.99501 9.15229 4.09751 9.05063 4.22043 8.92854L5.33001 7.86813L7.62918 9.55188C8.05085 9.78688 8.34793 9.66313 8.46168 9.16396L9.97085 2.09229L9.97126 2.09188C10.105 1.46854 9.74585 1.22479 9.33501 1.37771L0.46418 4.77396C-0.141237 5.00896 -0.13207 5.34646 0.361263 5.49938L2.62918 6.20479L7.8971 2.90854C8.14501 2.74438 8.37043 2.83521 8.18501 2.99938L3.92376 6.82563Z"
                                            fill="#D7B27B"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_956">
                                            <rect
                                                width="10"
                                                height="10"
                                                fill="white"
                                                transform="translate(0 0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={styles.editData__keyText}>
                                    Telegram:
                                </p>
                            </div>
                            <div className={styles.editData__dataWrap}>
                                <div className={styles.editData__dataBg}>
                                    <p className={styles.editData__valueText}>
                                        Old telegram
                                    </p>
                                </div>
                                <svg
                                    className={styles.editData__changeIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="37"
                                    height="36"
                                    viewBox="0 0 37 36"
                                    fill="none"
                                >
                                    <circle
                                        cx="18.5"
                                        cy="18"
                                        r="15.5"
                                        fill="#D7B27B"
                                        stroke="white"
                                        stroke-width="5"
                                    />
                                    <path
                                        d="M27.7639 17.6758C28.1544 18.0664 28.1544 18.6995 27.7639 19.09L21.3999 25.454C21.0094 25.8445 20.3762 25.8445 19.9857 25.454C19.5952 25.0635 19.5952 24.4303 19.9857 24.0398L25.6425 18.3829L19.9857 12.7261C19.5952 12.3356 19.5952 11.7024 19.9857 11.3119C20.3762 10.9213 21.0094 10.9213 21.3999 11.3119L27.7639 17.6758ZM10.5322 17.3829L27.0568 17.3829V19.3829L10.5322 19.3829V17.3829Z"
                                        fill="white"
                                    />
                                </svg>
                                <div className={styles.editData__dataBg}>
                                    <p className={styles.editData__valueText}>
                                        New telegram
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.editData__item}>
                            <div className={styles.editData__key}>
                                <svg
                                    className={styles.editData__keyIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="11"
                                    viewBox="0 0 10 11"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1_969)">
                                        <path
                                            d="M4.78123 1.3969C4.00311 2.17502 3.70623 3.32815 4.00311 4.38127L0.109353 8.27503C0.049978 8.3344 0.012478 8.41876 0.012478 8.50627L-1.57484e-05 10.1625C-0.00314387 10.3438 0.156234 10.5032 0.33749 10.4969L1.99061 10.4844C2.17499 10.4844 2.32186 10.3344 2.32186 10.15V9.38753H3.08748C3.17497 9.38753 3.26561 9.3469 3.32812 9.2844C3.3906 9.22189 3.42499 9.13753 3.42499 9.04689V8.27816L4.1906 8.28126C4.37186 8.28439 4.52811 8.12814 4.52498 7.94689V7.17815H5.29686C5.38435 7.17815 5.46873 7.14065 5.53124 7.08128L6.11561 6.4969C9.12812 7.32189 11.3031 3.62816 9.10311 1.3969C7.91249 0.203149 5.97186 0.203149 4.78123 1.3969ZM7.25312 2.29377C7.88748 1.68127 8.81872 2.6094 8.20311 3.2469C7.56873 3.8594 6.63748 2.93127 7.25312 2.29377Z"
                                            fill="#D7B27B"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_969">
                                            <rect
                                                width="10"
                                                height="10"
                                                fill="white"
                                                transform="translate(0 0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className={styles.editData__keyText}>
                                    Имя пользователя:
                                </p>
                            </div>
                            <div className={styles.editData__dataBg}>
                                <p className={styles.editData__valueText}>
                                    *************
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <ImportantText
                    text="Если это действие было инициировано не Вами, 
срочно свяжитесь с нами!"
                />
            </section>
        </div>
    );
};

export default EditData;
