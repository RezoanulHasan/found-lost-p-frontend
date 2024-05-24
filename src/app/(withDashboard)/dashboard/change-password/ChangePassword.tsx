/* eslint-disable react/no-children-prop */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import useTitle from "@/components/Hooks/useTitle";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "@/components/shared/Container/Container";

import { ChangePasswordData } from "./action";
import { z } from "zod";

import { logoutUser } from "@/utils/auth/logoutUser";

export type TPassword = {
  oldPassword: string;
  newPassword: string;
};

const ChangePassword: React.FC = () => {
  useTitle("Password Change");

  const router = useRouter();
  const [error, setError] = useState<string>("");

  const passwordSchema = z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Password must contain at least one uppercase letter and one lowercase letter."
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPassword>();

  const onSubmit = async (data: TPassword) => {
    try {
      // Validate new password using Zod schema
      const newPasswordResult = passwordSchema.safeParse(data.newPassword);

      if (!newPasswordResult.success) {
        // If validation fails, set appropriate error message
        setError(newPasswordResult.error.errors[0].message);
        return;
      }

      // If validation passes, proceed with password change logic
      const res = await ChangePasswordData(data);

      if (res.success) {
        Swal.fire({
          title: "Password changed Successfully",
          text: res.message,
          icon: "success",
        });
        logoutUser(router);
      } else {
        setError(res.message || "An error occurred.");
      }
    } catch (err: any) {
      console.error(err.message);
      setError("An error occurred.");
    }
  };

  return (
    <>
      {" "}
      <Container>
        <SectionTitle
          subHeading="Change Password Here"
          heading="Password change"
        />
        <div className="mt-2 flex justify-center">
          <div className="card w-full lg:w-1/2 md:w-[70%] shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Old Password</span>
                </label>
                <input
                  type="password"
                  {...register("oldPassword", { required: true })}
                  placeholder="Old Password"
                  className="input input-bordered"
                  required
                />

                {/* set error massage */}
                {error && (
                  <p className="text-red-600 text-xl mt-2">
                    {error} Password no dot match
                  </p>
                )}
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="password"
                  {...register("newPassword", { required: true })}
                  placeholder="New Password"
                  className="input input-bordered"
                />
                {errors.newPassword && (
                  <span className="text-red-600">New Password is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>{" "}
      </Container>
    </>
  );
};
export default ChangePassword;
