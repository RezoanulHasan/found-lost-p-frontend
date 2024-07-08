"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/utils/auth/auth.services";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirect if user is not logged in
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router]);

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
