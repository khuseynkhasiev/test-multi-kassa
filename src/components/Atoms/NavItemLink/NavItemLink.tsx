import styles from "./NavItemLink.module.scss";
import Link from "next/link";

interface NavItemLink {
    IconLink: React.ComponentType;
    link: string;
}

const NavItemLink = ({ IconLink, link }: NavItemLink) => {
    return (
        <li>
            <Link href={link}>
                <IconLink />
            </Link>
        </li>
    );
};

export default NavItemLink;
