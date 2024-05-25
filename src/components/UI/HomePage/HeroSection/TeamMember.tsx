"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { FaEnvelope, FaBriefcase, FaUser } from "react-icons/fa";
const TeamMember = () => {
  const items = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww",
      name: "John Doe",
      email: "john.doe@example.com",
      profession: "Concert Attendee",
    },

    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D",
      name: "Zara Ali",
      email: "zara.doe@example.com",
      profession: "Hr Admin",
    },
    {
      id: "3",
      image: "https://i.ibb.co/Vpv5qQf/host.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      profession: "IT Officer",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      profession: "Dog Rescuer",
    },
    {
      id: "5",
      image: "https://i.ibb.co/K0y7s31/rezoanulhasan.jpg",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      profession: "Park Visitor",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1520423465871-0866049020b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      name: "Emily Clark",
      email: "emily.clark@example.com",
      profession: "Bracelet Owner",
    },
    {
      id: "7",
      image: "https://i.ibb.co/gMpFwNT/cricket-chores.jpg",
      name: "David Wilson",
      email: "david.wilson@example.com",
      profession: "Software Engineer ",
    },
    {
      id: "8",
      image: "https://i.ibb.co/2WKwxv8/photo-1613323593608-abc90fec84ff-1.jpg",
      name: "Olivia Johnson",
      email: "olivia.johnson@example.com",
      profession: "Digital Finder",
    },
    {
      id: "9",
      image: "https://i.ibb.co/MDL2Nx5/Admin-n.jpg",
      name: "Zark Doe",
      email: "zark.doe@example.com",
      profession: "Global Officer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "60px",
  };

  return (
    <>
      <div className="mb-10">
        <Fade direction="down">
          <div className=" py-5">
            <div className="text-left border-l-4 border-teal-600 pl-3">
              <h2 className="font-bold text-2xl sm:text-4xl">Team Member</h2>
              <p className="font-medium text-lg mt-2 text-teal-600">Exparte</p>
            </div>
          </div>
        </Fade>

        <Slider {...settings}>
          {items?.map((item) => (
            <div className="flex flex-col gap-4 w-full p-4" key={item.id}>
              <div
                className="
              aspect-square 
              relative 
              overflow-hidden 
              rounded-xl
            "
              >
                <motion.img
                  className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
                  src={item.image}
                  alt="Item"
                />
              </div>

              <div className="font-semibold card-title text-lg">
                {" "}
                <FaEnvelope className="text-lg text-teal-600" />
                {item.email}
              </div>
              <div className="flex flex-row items-center justify-between gap-1">
                <div className="font-semibold  card-title">
                  {" "}
                  <FaBriefcase className="text-lg  text-teal-600" />
                  {item.profession}
                </div>
                <div className="font-semibold text-lg  card-title">
                  {" "}
                  <FaUser className="text-lg  text-teal-600  " />
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TeamMember;
