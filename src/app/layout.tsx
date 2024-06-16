import "../vendor/reset.css";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Organisms/Footer/Footer";

export const metadata: Metadata = {
    title: "MultiKassa",
    description: "SPA MultiKassa",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={"root"}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
