import React, { useEffect, useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import Tilt from 'react-parallax-tilt';
import logo from "../assets/images/logo.png";

export function NavbarComponent() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 md:flex-row lg:flex-row md:items-center lg:items-center lg:gap-6 md:gap-4">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Feature
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Skin Cancer Type
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    How to Work
                </a>
            </Typography>
        </ul>
    );

    return (
        <div>
            <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none py-2 lg:px-0 lg:py-3">
                <div className="xl:w-3/4 lg:md:w-4/5 flex items-center justify-between text-blue-gray-900 mx-auto">
                    <Tilt
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.02}
                        trackOnWindow={true}
                    >
                        <img src={logo} alt="logo" width={80} />
                    </Tilt>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:inline-block">{navList}</div>
                        <Button
                            size="sm"
                            className="hidden md:inline-block bg-primary-500"
                        >
                            <span>Classify</span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button fullWidth size="sm" className="bg-primary-500">
                        <span>Classify</span>
                    </Button>
                </MobileNav>
            </Navbar>
        </div>
    );
}
