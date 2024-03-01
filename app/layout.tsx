import type { Metadata } from "next";
import { Inter } from "next/font/google";
import logo from "@/assets/brainwave-symbol.svg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Modern Design Web Application",
	description: "Just learning from the Javascript Mastery",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
