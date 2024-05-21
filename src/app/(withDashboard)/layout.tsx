"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
//import Spinner from "@/components/shared/Spinner/Spinner";
import { isLoggedIn } from "@/utils/auth/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // Redirect if user is not logged in
  if (!isLoggedIn()) {
    router.push("/login");
    // Or render a loading spinner
  }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
