import NavItemLink from "../../Atoms/NavItemLink/NavItemLink";
import styles from "./NavItemsLink.module.scss";

import EmailIcon from "@/src/images/footer-icons/mail.svg";
import TgIcon from "@/src/images/footer-icons/tg.svg";
import InstaIcon from "@/src/images/footer-icons/insta.svg";
import YoutubeIcon from "@/src/images/footer-icons/youtube.svg";
import TtIcon from "@/src/images/footer-icons/tt.svg";
import WhatsIcon from "@/src/images/footer-icons/whatsapp.svg";
import VkIcon from "@/src/images/footer-icons/vk.svg";

const itemsIconData = [
    {
        id: 1,
        icon: EmailIcon,
    },
    {
        id: 2,
        icon: TgIcon,
    },
    {
        id: 3,
        icon: InstaIcon,
    },
    {
        id: 4,
        icon: YoutubeIcon,
    },
    {
        id: 5,
        icon: TtIcon,
    },
    {
        id: 6,
        icon: WhatsIcon,
    },
    {
        id: 7,
        icon: VkIcon,
    },
];

const NavItemsLink = () => {
    return (
        <ul className={styles.navItemLink}>
            {itemsIconData.map((item) => (
                <NavItemLink IconLink={item.icon} key={item.id} link={"#"} />
            ))}
        </ul>
    );
};

export default NavItemsLink;
