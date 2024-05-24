import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Providers from "@/redux/Providers";
export const metadata: Metadata = {
  title: "LostLocator",
  description:
    "The Lost & Found website is a community-driven platform designed to help individuals report and reclaim lost items. By facilitating the reporting of both lost and found items, the website aims to create a seamless process for reuniting people with their belongings. The platform includes user-friendly features for reporting items, verifying ownership, and managing user profiles, with additional administrative tools for overseeing site activity and user management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <>{children}</>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
