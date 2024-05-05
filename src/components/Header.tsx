import type React from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import DisclaimerBanner from './DisclaimerBanner';

type HeaderProps = {
    showDisclaimer?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showDisclaimer = true }) => {
    return (
        <>
            {showDisclaimer && <DisclaimerBanner show={showDisclaimer} />}
            <header className="bg-decrypt-800/50 text-white py-4 fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-white/15">
                <div className="flex justify-between items-center max-w-screen-2xl px-4 xl:px-8 mx-auto">
                    <h1 className="text-lg">
                        <Link to="/" className="hover:underline">
                            <img
                                src={logo}
                                alt="Decrypt Logo"
                                className="w-48 transition duration-300 ease-in-out transform hover:-rotate-3 active:scale-90"
                            />
                        </Link>
                    </h1>
                    <a
                        href="https://github.com/Decryptu/decrypt-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubLogoIcon className="text-white/50 hover:text-white/75 transition duration-200 w-6 h-6" />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
