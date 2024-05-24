/* eslint-disable react/no-children-prop */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import useTitle from "@/components/Hooks/useTitle";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "@/components/shared/Container/Container";
import { AddClaimsItemInfo } from "./acton";
import { useGetSingleByUserClamQuery } from "@/redux/features/MyLostFoundClamApi ";

export type TClaimsData = {
  foundItemId: string;
  distinguishingFeatures: string;
  lostDate: string;
};

const AddClaimsItem: React.FC = () => {
  useTitle("Add Found Item");

  const { refetch } = useGetSingleByUserClamQuery({
    sortBy: "createdAt",
    sortOrder: "asc",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClaimsData>();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: TClaimsData) => {
    try {
      const res = await AddClaimsItemInfo(data);
      if (res.success) {
        Swal.fire({
          title: "Report Added Successfully",
          text: res.message,
          icon: "success",
        }).then(() => {
          router.push("/allClaimsReport");
        });
        await refetch();
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
      <SectionTitle subHeading="ADD Claim Report" heading="Add Report" />
      <div className="mt-2 flex justify-center">
        <div className="card w-full lg:w-1/2 md:w-[70%] shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-2xl font-bold text-teal-600 text-center mb-1">
              Go to MyFoundItem page and use foundItemId to create claim
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">foundItemId</span>
              </label>
              <input
                type="text"
                {...register("foundItemId", { required: true })}
                placeholder="foundItemId"
                className="input input-bordered"
              />
              {errors.foundItemId && (
                <span className="text-red-600">foundItemId is required</span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-teal-600 text-center mb-1">
              Here add detailed descriptions of clam items
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <textarea
                {...register("distinguishingFeatures", { required: true })}
                placeholder="distinguishingFeatures"
                className="textarea textarea-bordered"
              ></textarea>
              {errors.distinguishingFeatures && (
                <span className="text-red-600"> Features is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                {...register("lostDate", { required: true })}
                className="input input-bordered"
                placeholder="lostDate"
              />
              {errors.lostDate && (
                <span className="text-red-600">Date is required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent btn-outline">
                Add Item
              </button>
            </div>
          </form>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
      </div>
    </Container>
  );
};

export default AddClaimsItem;
