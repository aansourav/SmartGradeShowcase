import React from 'react';
import logo from '../../public/school-logo.svg';

const Navbar = () => {
    return (
        <nav className="py-6 mr-10 ml-10" >
            <div
                className="container mx-auto flex items-center justify-between gap-x-6"
            >
                <a href="/">
                    <img
                        className="h-[50px]"
                        src={logo}
                        alt="Lws"
                    />
                </a>
                <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="/"
                >Get Admission</a
                >
            </div>
        </nav>
    );
};

export default Navbar;