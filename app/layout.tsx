import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import "./globals.css";
import "@/assets/fonts.css";

export const metadata: Metadata = {
	title: "Decrypt UI - Custom React UI Components",
	description:
		"Explore Decrypt UI, a library of highly customizable React UI components designed for developers and designers alike.",
	metadataBase: new URL("https://ui.decrypt.im/"),
	openGraph: {
		type: "website",
		url: "https://ui.decrypt.im/",
		title: "Decrypt UI - Custom React UI Components",
		description:
			"Explore Decrypt UI, a library of highly customizable React UI components designed for developers and designers alike.",
		images: [
			{
				url: "/og-image.png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Decrypt UI - Custom React UI Components",
		description:
			"Explore Decrypt UI, a library of highly customizable React UI components designed for developers and designers alike.",
		images: ["/og-image.png"],
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/logo192.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
