/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useTitle from "@/components/Hooks/useTitle";
import Container from "@/components/shared/Container/Container";
import { loginUser } from "@/utils/actions/loginUser";
import setAccessToken from "@/utils/auth/setAccessToken";

import { storeUserInfo } from "@/utils/auth/auth.services";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Swal from "sweetalert2"; // Import SweetAlert2

import React from "react";
export type FormValues = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      const res = await loginUser(values);
      if (res?.data?.token) {
        Swal.fire({
          title: `Login Successful!`,
          text: "Welcome back!",
          icon: "success",
        }).then(() => {
          storeUserInfo({ accessToken: res?.data?.token });
          setAccessToken(res?.data?.token);
          router.push("/dashboard");
        });
      } else {
        setError(res.message || "An error occurred.");
      }
    } catch (err: any) {
      console.error(err.message);
      setError("An error occurred.");
    }
  };

  return (
    <Container>
      <div className="min-h-screen mt-5">
        <h1 className="text-center text-4xl mb-5">
          Login <span className="text-accent">Here</span>
        </h1>
        <div className="flex flex-col-reverse mt-5 lg:flex-row  md:flex-row w-full gap-5 justify-center items-center">
          <div className="w-full md:w-1/3">
            <Image
              src="https://i.ibb.co/DwZ5zsS/tablet-login-concept-illustration-114360-7893.jpg"
              width={500}
              height={100}
              alt="login page"
              //className="w-full h-auto md:w-auto md:h-[85%]"
            />
          </div>

          <div className="card  w-full lg:w-1/2  h-auto md:h-[80%] shadow-xl bg-base-100 md:flex md:flex-col md:justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* set error massage */}
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Login
                </button>
              </div>
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <Link className="text-accent" href="/register">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
