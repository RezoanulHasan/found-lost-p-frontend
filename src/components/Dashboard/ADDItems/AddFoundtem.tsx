/* eslint-disable react/no-children-prop */
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { AddFoundItemInfo } from "./acton";

import useTitle from "@/components/Hooks/useTitle";
import { imageUpload } from "@/components/Hooks/imageUpoold";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "@/components/shared/Container/Container";

export type TItemFData = {
  email: string;
  image: FileList;
  phoneNumber: string;
  foundItemName: string;
  description: string;
  location: string;
  date: string;
  category: string;
  status?: string;
};

const AddFoundItem: React.FC = () => {
  useTitle("Add Found Item");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TItemFData>();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: TItemFData) => {
    try {
      const userImage = data.image[0]; // Select the first image from FileList
      const imageData = await imageUpload(userImage);

      if (imageData && imageData.data && imageData.data.url) {
        const formData = { ...data, image: imageData.data.url };
        const res = await AddFoundItemInfo(formData);

        if (res.success) {
          Swal.fire({
            title: `Report Add Successful, ${data?.foundItemName}!`,
            text: res.message,
            icon: "success",
          }).then(() => {
            router.push("/allFoundReport");
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
    <>
      {" "}
      <Container>
        <SectionTitle subHeading="ADD YOur Found Item " heading="Add Report" />
        <div className="mt-2 flex justify-center">
          <div className="card w-full lg:w-1/2 md:w-[70%] shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-2xl front-bold text-teal-600   text-center mb-1">
                Contact Info
              </h2>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  {...register("phoneNumber", { required: true })}
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
                {errors.phoneNumber && (
                  <span className="text-red-600">Phone Number is required</span>
                )}
              </div>

              <h2 className="text-center mb-2 text-teal-600  text-2xl front-bold  mt-1 ">
                Item Info{" "}
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  {...register("foundItemName", { required: true })}
                  placeholder="Item Name"
                  className="input input-bordered"
                />
                {errors.foundItemName && (
                  <span className="text-red-600">Item Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Description"
                  className="textarea textarea-bordered"
                ></textarea>
                {errors.description && (
                  <span className="text-red-600">Description is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  {...register("location", { required: true })}
                  placeholder="Location"
                  className="input input-bordered"
                />
                {errors.location && (
                  <span className="text-red-600">Location is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="input input-bordered"
                />
                {errors.date && (
                  <span className="text-red-600">Date is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  {...register("category", { required: true })}
                  placeholder="Category"
                  className="input input-bordered"
                />
                {errors.category && (
                  <span className="text-red-600">Category is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="input input-bordered"
                  accept="image/*"
                />
                {errors.image && (
                  <span className="text-red-600">Image is required</span>
                )}
              </div>

              {error && <p className="text-red-600 mt-2">{error}</p>}

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>{" "}
      </Container>
    </>
  );
};

export default AddFoundItem;
