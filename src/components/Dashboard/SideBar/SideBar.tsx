/* eslint-disable react-hooks/exhaustive-deps */
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Link from "next/link";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";

import { useEffect, useState } from "react";
import { getUserInfo } from "@/utils/auth/auth.services";
import { drawerItems } from "../DashboardDrawer/drawerItems";
import { User } from "@/redux/features/auth/userApi";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as User;
    setUserRole(role || (userRole as UserRole));
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbK3ODNpVWims22stgrOVbC0V6XJlCvH3HWMfE9bRiWA2TUXvIDEEDdA4i7JHB5onGkQ&usqp=CAU"
          width={40}
          height={40}
          alt="logo"
        />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          web site
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
