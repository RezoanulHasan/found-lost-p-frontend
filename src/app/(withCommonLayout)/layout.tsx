import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Metadata } from "next";
// session use for  git/google login

export const metadata: Metadata = {
  title: "LostLocator",
  description:
    "The Lost & Found website is a community-driven platform designed to help individuals report and reclaim lost items. By facilitating the reporting of both lost and found items, the website aims to create a seamless process for reuniting people with their belongings. The platform includes user-friendly features for reporting items, verifying ownership, and managing user profiles, with additional administrative tools for overseeing site activity and user management.",
};

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
