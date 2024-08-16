import React from "react";
import aboutUS from "../Assets/illustrations/aboutUs.svg";
import ourTeam from "../Assets/illustrations/ourTeam.svg";

const Member = (props) => {
  const { first_name, last_name, sid, email } = props;

  return (
    <div>
      <div
        className={`card bg-white rounded-3xl card-side p-1 desktop:p-3 shadow-xl w-72`}
      >
        <div className="card-body mt-4">
            <div className={`card-title px-4 flex justify-center`}>
              <p className={`text-2xl px-4`}>{first_name} {last_name}</p>
            </div>
            <div className={`card-title px-4 flex justify-center`}>
              <p className={`text-lg px-4`}>{sid}</p>
            </div>
            <div className={`card-title px-4 flex justify-center`}>
              <p className={`text-lg px-4`}>{email}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  document.title = "About | CineSense"
  const team = [
    {
      id: 1,
      first_name: "Amandeep",
      last_name: "Singh",
      sid: 100949940,
    },
    {
      id: 2,
      first_name: "Angad",
      last_name: "Singh",
      sid: 100945617,
    },
    {
      id: 3,
      first_name: "Jatin",
      last_name: "Sharma",
      sid: 100949281,
    },
    {
      id: 4,
      first_name: "Kunwarpal",
      last_name: "Singh",
      sid: 100951497,
    },
    {
      id: 5,
      first_name: "Vaibhav",
      last_name: "Sharma",
      sid: 100953270,
    },
  ];

  return (
    <div className="py-14 min-h-screen ">
      <div className="w-screen h-fit bg-headerBG bg-auto laptop:bg-cover bg-no-repeat">
        <div className="header w-full h-full space-y-4 bg-black/50 laptop:bg-black/10">
          <div className="py-20">
            <div className="welcome text-white px-4 laptop:px-48 text-6xl font-bold font-inter">
              <p>About us</p>
            </div>
            <div className="desc text-justify space-y-6 text-white px-4 laptop:px-48 text-2xl w-full laptop:w-[70%] font-inter">
              <p>
              We are a passionate team of AI enthusiasts and developers dedicated to merging technology with creativity. Together, we bring diverse skills in frontend development, backend integration, and AI-driven innovation to create cutting-edge digital tools that inspire and empower users.              </p>
              <p className="uppercase">
              TRANSFORM YOUR PHOTOS INTO STUNNING PENCIL SKETCHES WITH UPLOAD2SKETCH
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          ABOUT UPLOAD2SKETCH
        </p>
        <div className="space-y-1">
          <div className="h-1 w-56 bg-logoColor"></div>
          <div className="h-1 w-48 bg-logoColor"></div>
        </div>
        <div className="py-10 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="w-full tablet:w-[30%] flex my-auto">
            <img src={aboutUS} alt="about" />
          </div>
          <div className="w-full tablet:w-[70%]">
            <p className="font-inter text-xl text-subHeadingColor mt-6 text-justify">
            The Image-to-Sketch application is a cutting-edge AI-driven tool designed to transform digital images into high-quality pencil sketches. This application offers users a seamless and intuitive interface, allowing them to upload images and instantly generate detailed sketches that mimic the intricate qualities of hand-drawn art. To enhance user experience, the tool incorporates advanced features like customizable sketch effects and voice command functionality, enabling users to interact with the application hands-free. The application is suitable for a diverse audience, from digital artists and designers looking to streamline their creative process, to social media influencers seeking unique content, and even educational institutions aiming to bridge traditional art techniques with modern technology. Deployed on Netlify and Render, the tool ensures efficient performance and scalability, making it accessible to a broad user base. The development of this application involved overcoming significant challenges, particularly in integrating reliable voice commands and refining the sketch algorithms to achieve an authentic artistic output.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          VISION & MISSION
        </p>
        <div className="space-y-1">
          <div className="h-1 w-52 bg-logoColor"></div>
          <div className="h-1 w-44 bg-logoColor"></div>
        </div>
        <div className="py-10 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="w-full tablet:w-[70%]">
            <p className="font-inter text-justify text-xl text-subHeadingColor mt-6">
            Our vision is to become the leading platform for digital artistic transformation, enabling users worldwide to effortlessly create beautiful, hand-drawn-quality sketches from their images. We aspire to inspire creativity by harnessing the power of AI, making advanced digital art tools accessible to everyone, regardless of their technical expertise. By continuously innovating and enhancing our platform, we aim to foster a global community where artistic expression is democratized, bridging the gap between traditional art and digital technology, and empowering users to explore new creative possibilities in a modern, user-friendly environment.
            <br /><br />
            Our mission is to revolutionize digital art creation by providing an accessible, AI-powered tool that empowers users of all skill levels to transform their images into stunning pencil sketches. We aim to replicate the intricate details and textures of traditional hand-drawn art, making it easy for everyone—from professional artists to casual hobbyists—to engage in creative expression. Our commitment is to deliver a seamless and user-friendly experience through an intuitive interface and innovative features like voice commands. By doing so, we aspire to inspire a broader audience to explore and enjoy the world of digital sketching, bridging the gap between traditional artistry and modern technology.
            </p>
          </div>
          <div className="w-full tablet:w-[30%] flex my-auto">
            <img src={ourTeam} alt="team" />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter px-4 laptop:px-48">
          OUR TEAM
        </p>
        <div className="space-y-1 px-4 laptop:px-48">
          <div className="h-1 w-32 bg-logoColor"></div>
          <div className="h-1 w-24 bg-logoColor"></div>
        </div>
        <div className="py-10 px-4 flex tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="flex justify-center w-full px-4 laptop:px-48">
          <div className='grid grid-cols-autofit gap-10 w-full items-center'>
            {
                team.map((member) => {
                    return(
                        <div className="box flex justify-center" key={member.id}>
                          <div className="flex items-center">
                            <Member first_name={member.first_name} last_name={member.last_name} sid= {member.sid} email={member.email} avatar={member.avatar} />
                          </div>
                        </div>
                    )
                })
            }
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter px-4 laptop:px-48">
          OUR LOCATION
        </p>
        <div className="space-y-1 px-4 laptop:px-48">
          <div className="h-1 w-44 bg-logoColor"></div>
          <div className="h-1 w-36 bg-logoColor"></div>
        </div>

        <div className="py-10 px-4 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="flex w-full px-4 laptop:px-48">
            <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45992.187244567715!2d-78.94110199697552!3d43.90737903791604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51b902fedb973%3A0xdd6091694035e8a1!2sDurham%20College!5e0!3m2!1sen!2sca!4v1712139651605!5m2!1sen!2sca"
              className="border-none w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
