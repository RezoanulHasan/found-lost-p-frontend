"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { registerUser } from "@/utils/actions/registerUser";
import useTitle from "@/components/Hooks/useTitle";
import { imageUpload } from "@/components/Hooks/imageUpoold";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
export type UserBio = {
  bio: string;
  age: any;
};

export type UserData = {
  name: string;
  email: string;
  userImage: FileList; // Use FileList instead of File for image selection
  password: string;
  profile: UserBio;
  phoneNumber: string;
};

const RegisterPage: React.FC = () => {
  useTitle("Register");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: UserData) => {
    try {
      const userImage = data.userImage[0]; // Select the first image from FileList
      const imageData = await imageUpload(userImage);

      if (imageData && imageData.data && imageData.data.url) {
        data.userImage = imageData.data.url;
        const res = await registerUser(data);

        if (res.success) {
          Swal.fire({
            title: `Registration Successful, ${data?.name}!`,
            text: res.message,
            icon: "success",
          }).then(() => {
            router.push("/login");
          });
        } else {
          setError(res.message || "An error occurred.");
        }
      } else {
        setError("Image upload failed.");
      }
    } catch (err: any) {
      console.error(err.message);
      setError("An error occurred.");
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center min-h-screen ">
        <h1 className="text-center text-4xl mb-5">
          Register <span className="text-accent">Now</span>
        </h1>
        <div className="flex flex-col-reverse lg:flex-row  md:flex-row w-full gap-4 justify-center items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="https://i.ibb.co/HKSCmG7/secure-login-concept-illustration-114360-4320.jpg"
              width={500}
              height={200}
              alt="login page"
              className="w-full h-[85%] object-cover"
            />
          </div>
          <div className="card  w-full lg:w-1/2 md:w-[70%] h-auto md:h-[80%] shadow-xl bg-base-100 md:flex md:flex-col md:justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
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
                  <span className="label-text">PhoneNumber</span>
                </label>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  placeholder="PhoneNumber"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Input for user image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  type="file"
                  {...register("userImage")}
                  className="input input-bordered"
                  accept="image/*"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <input
                  type="text"
                  {...register("profile.bio")}
                  placeholder="Bio"
                  className="input input-bordered"
                  required
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number" // Change input type to number
                  {...register("profile.age")}
                  placeholder="Age"
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
              {error && <p className="text-red-600 text-xl mt-2">{error}</p>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Register
                </button>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="text-accent" href="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
