"use client";

import React, { useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

export interface Review {
  id: string;
  name: string;
  review: string;
  star: number;
  image: string;
}

const initialReviews = [
  {
    id: "1",
    review:
      "I lost my phone at a concert and was devastated. Thankfully, someone found it and listed it on this website. The process was straightforward, and I got my phone back within a day. The site was user-friendly and made a stressful situation much easier to handle.",
    star: 5,
    name: "John Deo",
    image: "https://i.ibb.co/MDL2Nx5/Admin-n.jpg",
  },
  {
    id: "2",
    review:
      "This lost and found system is a lifesaver. I misplaced my wallet during a busy day at the mall. I was able to list it on the site, and within a few hours, someone contacted me to return it. My only suggestion is to improve the mobile interface for a better user experience on the go.",
    star: 4,
    name: "Jane Jaki ",
    image: "https://i.ibb.co/Vpv5qQf/host.jpg",
  },
  {
    id: "3",
    review:
      "Amazing service! I found a stray dog with a tag and listed it on this website. The owner reached out to me within hours, and we reunited the dog with its family. The platform is incredibly efficient and easy to use.",
    star: 5,
    name: "Sarah Skr",
    image: "https://i.ibb.co/CKtSKWt/host2.jpg",
  },
  {
    id: "4",
    review:
      "The concept is great and it does work, but I had some issues with uploading photos. The site was a bit slow, and it took a few tries to get my post up. Once posted, though, I did manage to find the owner of the lost item I found at the park.",
    star: 3,
    name: "Michael ",
    image: "https://i.ibb.co/K0y7s31/rezoanulhasan.jpg",
  },
  {
    id: "5",
    review:
      "I can't thank this website enough! I lost my bracelet that had a lot of sentimental value. Someone found it and posted it on the site. The instructions were clear, and I quickly got in touch with the person who found it. Excellent service and very efficient!",
    star: 5,
    name: "Nazim Zir",
    image: "https://i.ibb.co/Wn4r5TG/nazimjpg.jpg",
  },
];

const Review: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  return (
    <section className="my-10">
      <Fade direction="down">
        <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review?.id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <FaQuoteLeft className="text-3xl text-red-500 mb-1" />
                <Rating
                  style={{ maxWidth: 150 }}
                  value={review.star}
                  readOnly
                />
                <p className="mt-10 text-xl text-center md:w-2/3">
                  {review.review}
                </p>
                <div>
                  <div className="avatar mt-2">
                    <div className="w-20 rounded-full">
                      <motion.img src={review.image} alt={review.name} />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-teal-500 mt-2">
                    {review.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </section>
  );
};

export default Review;
