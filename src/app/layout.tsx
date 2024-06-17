import "../vendor/reset.css";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "../components/Organisms/Footer/Footer";

export const metadata: Metadata = {
    title: "MultiKassa",
    description: "SPA MultiKassa",
};

const TTFirsNeue = localFont({
    src: [
        {
            path: "../vendor/fonts/TTFirsNeue-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../vendor/fonts/TTFirsNeue-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={TTFirsNeue.className}>
                <div className="root">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
