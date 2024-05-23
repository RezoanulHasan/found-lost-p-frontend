import { USER_ROLE } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorDetails: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  field?: string | number;
  path?: string | number;
  message: string;
};

interface User {
  id: any;
  name: string;
  email: string;
  role: string; // You might want to define an enum for roles
  createdAt: string;
  updatedAt: string;
}

export interface IItem {
  id: any;
  userId?: string;
  category: string;
  lostItemName?: string;
  foundItemName?: string;
  description: string;
  location: string;
  date: string; // You might want to use Date type or define a custom date format
  image?: string;
  phoneNumber?: string;
  email?: string;
  status: string; // You might want to define an enum for statuses
  createdAt?: string;
  updatedAt?: string;
  user: User;
  meta?: IMeta;
  item?: any;
  name?: string;
  lostDate?: string;
  foundItemId?: string;
  distinguishingFeatures?: string;
  foundItem?: IFoundItem;
}
export interface IFoundItem {
  image?: string;
  phoneNumber?: string;
  email?: string;
  description?: string;
  location?: string;
  category: string;
  id?: any;
  userId?: string;
  lostItemName?: string;
  foundItemName?: string;
}
