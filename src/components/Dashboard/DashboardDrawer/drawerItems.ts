import { DrawerItem, UserRole } from "@/types";
import EditIcon from "@mui/icons-material/Edit";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ReviewsIcon from "@mui/icons-material/Reviews";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { USER_ROLE } from "@/contants/role";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ReportIcon from "@mui/icons-material/Report";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];
  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "ProfileUpdate",
      path: `${role}/profileUpdate`,
      icon: EditIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },

    {
      title: "AddFoundItems",
      path: `addFoundItems`,
      icon: AddBoxIcon,
    },

    {
      title: "AddLostItems",
      path: `addLostItems`,
      icon: ReportIcon,
    },

    {
      title: "AddClaimItems",
      path: `addClaimItems`,
      icon: VerifiedUserIcon,
    },
  ];
  switch (role) {
    case USER_ROLE.SuperAdmin:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manageUsers`,
          icon: GroupIcon,
        },

        {
          title: "Activity Monitoring",
          path: `${role}/motion`,
          icon: ReviewsIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },

        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },

        {
          title: "MyLosTItem",
          path: `${role}/lostItems`,
          icon: SearchIcon,
        },
        {
          title: "MyFoundItems",
          path: `${role}/foundItems`,
          icon: CheckCircleIcon,
        },
        {
          title: "MyClamItems",
          path: `${role}/clamItems`,
          icon: AssignmentTurnedInIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
