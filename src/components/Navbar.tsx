import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src="/hi-bro.png"
                    alt="logo"
                    width={148}
                    height={58}
                />
            </Link>

            <ul className={`hidden h-full gap-12 lg:flex`}>
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <button
                className="cursor-pointer lg:hidden"
                onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu();
                }}
            >
                <Image
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer lg:hidden"
                />
            </button>

            <div
                className={`absolute top-20 left-0 w-full bg-white flex flex-col gap-8 py-8 px-12 transition-opacity duration-300 ${
                    isOpen
                        ? `opacity-100 lg:opacity-0 }`
                        : "opacity-0"
                }`}
            >
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} passHref>
                        <div className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:!font-bold">
                            {link.label}
                        </div>
                    </Link>
                ))}

                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
        </nav>
    );
};

export default Navbar;
