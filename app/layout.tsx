import type {Metadata} from "next";
import './globals.css';

export const metadata: Metadata = {
    title: "Dimitris Sparagis",
    description: "It's all about creating exceptional digital experiences",
};
// @ts-ignore
export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/app/favicon.ico" sizes="any"/>
                <title></title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}