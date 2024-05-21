import { getUserInfo } from "@/utils/auth/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { User } from "@/redux/features/auth/userApi";
import { logoutUser } from "@/utils/auth/logoutUser";

const AuthButton = () => {
  const userInfo = getUserInfo() as User;
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };
  return (
    <>
      {userInfo?.userId ? (
        <button
          className="btn btn-error btn-outline text-white rounded-full px-5"
          onClick={handleLogOut}
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="btn btn-accent btn-outline text-white rounded-full px-5"
        >
          Login
        </Link>
      )}
    </>
  );
};

export default AuthButton;
