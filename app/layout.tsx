import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import { Topbar } from "@/component/topbar";
import { Image } from "@nextui-org/react";
import { DiscordIcon, PixivIcon } from "@/component/icons";
import { TwitterIcon } from "@/component/icons";

export const metadata: Metadata = {
  metadataBase: new URL("https://sakurashigure.com"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["時雨櫻", "SakuraShigure", "Sakura Shigure"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${fontSans.className}`} suppressHydrationWarning>
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "custom" }}>
          <div className="relative flex flex-col md:min-h-screen min-h-full">
          <Topbar />
            <main className="container mx-auto max-w-3xl pt-7 px-6 flex-grow">
              {children}
            </main>
            <footer className="bg-footer text-default-600/50 w-full flex items-center mt-5">
              <div className="grid grid-cols-2 justify-items-center w-full mx-auto px-8 py-6 container">
                <div>
                  <Image
                    alt=""
                    className="self-center"
                    width="150px"
                    src="logo.png"
                  />
                </div>
                <div className="place-self-center">
                  <p>
                    白 Shiro
                    <br />
                    <Link
                      isExternal
                      href="https://twitter.com/BT871213"
                      className="text-inherit hover:underline"
                    >
                      <TwitterIcon />
                    </Link>{" "}
                    <Link
                      isExternal
                      href="https://twitter.com/BT871213"
                      className="text-inherit hover:underline"
                    >
                      <PixivIcon />
                    </Link>
                    <br />
                    <br />
                    <span className="text-default-600/30 text-xs">
                      Made by Sakura Shigure
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
