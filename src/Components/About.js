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
      email: "amandeep.singh36@dcmail.ca",
      first_name: "Amandeep",
      last_name: "Singh",
      sid: 100949940,
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Angad",
      last_name: "Singh",
      sid: 100949940,
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Jatin",
      last_name: "Sharma",
      sid: 100949940,
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Kunwarpal",
      last_name: "Singh",
      sid: 100949940,
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Vaibhav",
      last_name: "Sharma",
      sid: 100949940,
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
              Movies have a unique ability to transport us to new worlds, evoke powerful emotions, and spark meaningful conversations. We're on a mission to harness the incredible potential of cinema to enrich lives and inspire imaginations
              </p>

              <p className="uppercase">
              A SINGLE PLATFORM FOR FINDING BEST FAVORITE MOVIES
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          ABOUT CINESENSE
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
              Cinesense is an innovative movie recommendation platform that adapts to your
              specific cinematic preferences. It uses cutting-edge algorithms to provide personalized
              movie recommendations based on your interests, ensuring that each viewing
              experience is tailored to your liking. <br /><br />Whether you're a casual movie enthusiast or a
              devoted cinephile, our recommendation engine aims to improve your movie-watching
              experience by delivering handpicked picks that align with your preferences. With each
              encounter, Cinematic Insights learns from your choices and refines its
              recommendations to give an ever-improving service. Our recommendations won't be
              limited to one platform; they'll cover the entire movie universe, including Hollywood,
              Bollywood, and other OTT services
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
            Our main goal is to revolutionize the movie industry by implementing AI uses cases such as to provide personalized movie recommendations based on your interests, ensuring that each viewing experience is tailored to your liking. We intend to offer diverse range of movie experiences be it based on language, culture, history, genres, and different ways of storytelling. Our AI system will keep on improving and enhancing as we will continue to feed the data back to it and monitor for any bias. also, we will combine the content which spread over different platforms to offer a wide range of choices at one location. Our platform features will not be limited to just recommendation and binge watching. We will be a creating dynamic space where users can provide reviews and participate in social events like Virtual movie carnivals, movie debates etc.
            <br /><br />
            Our objective is to create an AI-powered application that will identify trends and
            pattern of user viewing habits to provide personalized movie recommendations
            tailored to everyone’s tastes. This platform will be the one stop shop for every type of
            content be it movies, web series, daily soaps, sports, and other categories from all
            OTT platform this will not only benefits the AI, but customers will have pay for just
            one membership for a wide variety of content minus the hassle of managing multiple
            platforms. People who don't want to waste their time watching movies only to find out
            that the content isn't for them will be among our consumers. Our solution provides
            recommendations tailored to their liking, Movie Insights, movie review and will have
            interactive features like Movies fest, sentimental analysis of review, movie debates.
            We will promote our product by properly working on the content of the website to use
            the full potential of Search engine optimization and grow organically in early stages,
            then we can use start investing in digital marketing tools google ads, facebook ads
            manager and use the power of influencers to increase the visibility of the product
            online. Features like movie fest and debates will help in promoting product in social
            media platforms. Our product will easily be accessible to the users as we will create
            website and apps for both android and apple devices and the uniqueness of our
            platform will depend on the gamification of the user experience, data collection and
            virtual social gathering events.
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
