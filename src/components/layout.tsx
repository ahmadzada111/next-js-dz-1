import React from 'react';
import { Inter, Roboto } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
    };

    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '24px',
    };

    const navStyle: React.CSSProperties = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
    };

    const navItemStyle: React.CSSProperties = {
        display: 'inline-block',
        margin: '0 10px',
    };

    const footerStyle: React.CSSProperties = {
        marginTop: 'auto', 
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: '#333',
        color: '#fff',
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle} className={roboto.className}>
                <h1><Link href="/">Microsoft</Link></h1>
                <nav style={navStyle} className={roboto.className}>
                    <ul>
                        <li style={navItemStyle}><Link href="/">Home</Link></li>
                        <li style={navItemStyle}><Link href="/blogs">Blog</Link></li>
                        <li style={navItemStyle}><Link href="/about">About</Link></li>
                        <li style={navItemStyle}><Link href="/contacts">Contacts</Link></li>
                        <li style={navItemStyle}><Link href="/account">Account</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer style={footerStyle} className={roboto.className}>
                &copy; {new Date().getFullYear()} Microsoft Inc. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
