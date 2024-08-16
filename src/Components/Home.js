import React from "react";
import aboutIllustration from "../Assets/illustrations/aboutIllustartion.svg";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Home | Upload2Sketch"

  const services = [
    {
      name: "Enhanced Sketch Customization",
      desc: "Adjust the intensity, stroke size, and style of your pencil sketches"
    },
    {
      name: "Advanced Image Editing",
      desc: "Add colors, filters, and effects to personalize your sketches post-conversion",
    },
    {
      name: "Voice Command Integration",
      desc: "Use advanced voice commands for intuitive control over your sketches",
    },
    {
      name: "Interactive Tutorial",
      desc: "Enjoy animated, voice-guided tutorials designed especially for kids",
    },
    {
      name: "AI Enhancements",
      desc: "Get AI suggestions for color palettes and automatic object highlighting",
    },
    {
      name: "Gamification",
      desc: "Earn rewards and achievements as you create and share your sketches",
    },
    {
      name: "Accessibility Features",
      desc: "Access voice-over options and intuitive gestures for users with special needs",
    },
    {
      name: "Community Features",
      desc: "Share your artwork with a moderated community and control sharing settings with profiles for parents and kids",
    },
  ];

  return (
    <div className="py-14">
      <div className="w-screen h-fit bg-headerBG bg-auto laptop:bg-cover bg-no-repeat">
        <div className="header w-full h-full space-y-4 bg-black/50 laptop:bg-black/10">
          <div className="py-20">
            <div className="welcome drop-shadow-xl text-white px-4 laptop:px-48 text-6xl font-bold font-inter">
              <p>Welcome to Upload2Sketch</p>
            </div>
            <div className="desc text-white text-justify px-4 laptop:px-48 text-2xl w-full laptop:w-[70%] font-inter">
              <p>
              Unleash your creativity with Upload2Sketch! Transform photos into stunning pencil sketches with just a click. With our friendly design, vibrant colors, and fun effects, anyone can easily create and customize their own masterpieces. Interactive voice commands and playful tutorials make the experience magical. Discover the joy of art with Upload2Sketch, where every picture becomes a work of art!
              </p>
            </div>

            <div className="px-4 laptop:px-48 mt-16">
              <Link
                to="/Main"
                className="bg-gradient-to-r from-logoColor to-headingColor text-xl text-white hover:text-white focus:text-white hover:outline hover:outline-offset-2 rounded-lg px-6 py-4"
              >
                Start the Magic
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          WHO ARE WE?
        </p>
        <div className="space-y-1">
          <div className="h-1 w-40 bg-logoColor"></div>
          <div className="h-1 w-32 bg-logoColor"></div>
        </div>
        <div className="py-10 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="w-full tablet:w-[70%]">
            <p className="font-inter text-xl text-subHeadingColor mt-6 text-justify">
            At Upload2Sketch, we are passionate about sparking creativity and imagination in children through the magic of art and technology. Our team of dedicated artists, developers, and educators have come together to create an engaging and user-friendly app that transforms everyday photos into beautiful pencil sketches. With a focus on fun, learning, and accessibility, we strive to provide a safe and inspiring platform where kids can explore, create, and share their artistic visions. Join us on this creative journey and watch your child's imagination come to life with Upload2Sketch!
            </p>
            <div className="mt-6 laptop:mt-16 flex">
              <Link
                to="/About"
                className="bg-headingColor px-4 py-3 text-white hover:text-white focus:text-white rounded-md text-xl"
              >
                Know more
              </Link>
            </div>
          </div>
          <div className="w-full tablet:w-[30%] flex my-auto">
            <img src={aboutIllustration} alt="about" />
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          APP FEATURES
        </p>
        <div className="space-y-1">
          <div className="h-1 w-44 bg-logoColor"></div>
          <div className="h-1 w-36 bg-logoColor"></div>
        </div>
        <div className="py-10 px-4 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="flex w-full">
            <div className="grid grid-cols-autofit w-full justify-center items-center gap-10 px-4 laptop:px-10 mt-10">
              {services.map((service) => {
                return (
                  <div className="grid grid-cols-autofit gap-10" key={service.name}>
                    <div className="bg-white my-4 p-10 rounded-3xl shadow-lg">
                      <p className="text-2xl text-headingColor font-bold mt-6 mb-3">
                        {service.name}
                      </p>
                      <p className="text-xl text-subHeadingColor">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
