import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "animate.css";
import gamification from "../Assets/gamification.json";

import { fadeIn, textVariant } from "./utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";
import loginContext from "../Context/loginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrefrencesCard = ({ index, title, list, jsonList }) => {
  const context = useContext(loginContext);
  const {
    gamificationList,
    setGamificationList,
    setDirectorPreference,
    setGenrePreference,
    setActorPreference,
  } = context;

  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((selectedItem) => selectedItem !== item)
        : [...prevItems, item]
    );

    if (list === gamificationList.DirectorList) {
      setDirectorPreference((prevSelectedItems) => {
        if (prevSelectedItems.includes(item)) {
          return prevSelectedItems.filter(
            (DirectorPreference) => DirectorPreference !== item
          );
        } else {
          return [...prevSelectedItems, item];
        }
      });
    } else if (list === gamificationList.GenreList) {
      setGenrePreference((prevSelectedItems) => {
        if (prevSelectedItems.includes(item)) {
          return prevSelectedItems.filter(
            (GenrePreference) => GenrePreference !== item
          );
        } else {
          return [...prevSelectedItems, item];
        }
      });
    } else if (list === gamificationList.ActorList) {
      setActorPreference((prevSelectedItems) => {
        if (prevSelectedItems.includes(item)) {
          return prevSelectedItems.filter(
            (ActorPreference) => ActorPreference !== item
          );
        } else {
          return [...prevSelectedItems, item];
        }
      });
    }
  };

  const isSelected = (item) => {
    return selectedItems.includes(item);
  };

  return (
    <div className="xs:w-[250px] laptop:w-96">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-xl shadow-xl bg-white"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary space-y-4 rounded-xl py-10 px-12 min-h-[280px] flex items-center flex-col"
        >
          <div className="text-2xl font-bold text-center">{title}</div>
          <div className="flex justify-center w-full px-4">
            <div className="space-y-2 overflow-hidden w-full items-center">
              {list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`text-lg border border-gray-200 w-full px-4 py-2 rounded-lg cursor-pointer hover:border-logoColor ${
                      isSelected(item) ? "bg-logoColor" : "bg-white"
                    }`}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end w-full px-5 cursor-pointer">
            <button
              type="button"
              onClick={() => {
                const shuffledList = gamification[jsonList].sort(
                  () => 0.5 - Math.random()
                );
                const selectedItems = shuffledList.slice(0, 10);

                const modifiedSelectedItems = selectedItems.map(item => {
                    let modifiedItem = '';
                    for (let i = 0; i < item.length; i++) {
                      if (item[i] === item[i].toUpperCase()) {
                        modifiedItem += ' ';
                      }
                      modifiedItem += item[i];
                    }
                    return modifiedItem;
                  });

                if (list === gamificationList.DirectorList) {
                  setGamificationList((prevState) => ({
                    ...prevState,
                    DirectorList: modifiedSelectedItems,
                  }));
                } else if (list === gamificationList.GenreList) {
                  setGamificationList((prevState) => ({
                    ...prevState,
                    GenreList: modifiedSelectedItems,
                  }));
                } else if (list === gamificationList.ActorList) {
                  setGamificationList((prevState) => ({
                    ...prevState,
                    ActorList: modifiedSelectedItems,
                  }));
                }
              }}
              className="border border-gray-200 px-4 py-2 rounded-lg hover:border-logoColor"
            >
              more ...
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const GPreferences = () => {
  const [entry, setentry] = useState(false);
  const navigate = useNavigate()

  const context = useContext(loginContext);
  const {
    setProgress,
    gamificationList,
    DirectorPreference,
    GenrePreference,
    ActorPreference,
    loggedInEmail,
    setMovieHub
  } = context;

  const tenItemCard = [
    {
      title: "Director",
      list: gamificationList.DirectorList,
      jsonList: "Director",
    },
    {
      title: "Genre",
      list: gamificationList.GenreList,
      jsonList: "Genres",
    },
    {
      title: "Actor",
      list: gamificationList.ActorList,
      jsonList: "Actors",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setentry(true);
    }, 2000);
  }, []);

  const handleSkip = async () => {
    setProgress(25);

    try{
        const res = await axios.get(`https://cinesense-hgch.onrender.com/call_homepage_by_mail/${loggedInEmail}`)
        setProgress(100);
        setMovieHub(res.data)
        navigate("/MovieHub")
    } catch (e) {
        console.log(e)
    }
  }

  const handleNext = async () => {
    setProgress(10);

    const modifiedActorPreference = ActorPreference.map(item => item.replace(/\s/g, ''));
    const modifiedDirectorPreference = DirectorPreference.map(item => item.replace(/\s/g, ''));
    const modifiedGenrePreference = GenrePreference.map(item => item.replace(/\s/g, ''));

    const cast = modifiedActorPreference.join(", ");
    const crew = modifiedDirectorPreference.join(", ");
    const genres = modifiedGenrePreference.join(", ");

    try {
      setProgress(25);
      const res = await axios.get(
        "https://cinesense-hgch.onrender.com/call_homepage",
        {
          params: {
            email: loggedInEmail,
            cast: cast,
            crew: crew,
            genres: genres,
            check: 1,
          },
        }
      );
      setProgress(100);
      setMovieHub(res.data)
      navigate("/MovieHub")
    } catch (e) {
      setProgress(100);
      console.log(e);
    }
  };

  return (
    <>
      <div
        className="h-screen w-full px-10 laptop:px-36 py-10 pt-20 flex flex-col justify-center items-center"
        id="aboutComponent"
      >
        <div className="flex gap-10">
          <div className="flex flex-col">
            <motion.div variants={textVariant()}>
              <p className="text-xl tracking-wider mb-2 font-bold">
                LET'S KNOW ABOUT YOU
              </p>
              <h2 className="text-5xl font-black">PREFERENCES</h2>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
              {tenItemCard.map((role, index) => (
                <PrefrencesCard key={role.title} index={index} {...role} />
              ))}
            </div>
          </div>
          <div className="flex items-end gap-5">
            <div
              className={`text-lg cursor-pointer border border-gray-400 px-4 py-2 rounded-lg hover:border-logoColor ${
                entry ? "flex animate__animated animate__fadeInLeft" : "hidden"
              } hover:text-current`}
              onClick={handleNext}
            >
              Next
            </div>
            <div onClick={handleSkip}
              className={`text-lg border border-gray-400 px-4 py-2 rounded-lg hover:border-logoColor ${
                entry ? "flex animate__animated animate__fadeInLeft" : "hidden"
              } hover:text-current`}
            >
              Skip
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(GPreferences, "about");
