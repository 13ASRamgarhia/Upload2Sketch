import React, { useContext } from "react";
import loginContext from "../Context/loginContext";

import Rating from "@mui/material/Rating";
import { Chip } from "@mui/material";

const MovieDetail = () => {
  document.title = "Movie Hub | CineSense";

  const { movieDetail } = useContext(loginContext);

  const genreList = movieDetail.genres.split(",");
  const castList = movieDetail.cast.split(",");
  const crewList = movieDetail.crew.split(",");

  const modifiedCastList = castList.map((item) => {
    let modifiedItem = "";
    for (let i = 0; i < item.length; i++) {
      if (item[i] === item[i].toUpperCase()) {
        modifiedItem += " ";
      }
      modifiedItem += item[i];
    }
    return modifiedItem;
  });

  const modifiedCrewList = crewList.map((item) => {
    let modifiedItem = "";
    for (let i = 0; i < item.length; i++) {
      if (item[i] === item[i].toUpperCase()) {
        modifiedItem += " ";
      }
      modifiedItem += item[i];
    }
    return modifiedItem;
  });

//   useEffect(() => {
//     const rendering = async () => {
//         await setMovieDetail(movieDetail)
//     }
//     rendering();
//     // eslint-disable-next-line
//   }, [])

  return (
    <div className="py-14 min-h-screen ">
      <div className="w-screen h-fit mt-10 px-10">
        <div className="flex gap-10">
          <div className="flex laptop:w-[15%]">
            <img src={movieDetail.poster} alt="poster" className="w-full" />
          </div>
          <div className="flex flex-col laptop:w-[85%] space-y-6">
            <div className="flex flex-col space-y-2">
              <div className="flex text-5xl font-bold">{movieDetail.title_x}</div>
              <div className="flex text-lg">
                {movieDetail.release_date.substring(0, 4)} •{" "}
                {movieDetail.original_language.toUpperCase()}
              </div>
            </div>

            <div className="flex w-full">
              <div className="flex h-fit w-1/2">
                <div className="flex gap-2">
                  {genreList.map((genre) => {
                    return <div className="ui label">{genre}</div>;
                  })}
                </div>
              </div>
              <div className="flex w-1/2 justify-end">
                <div className="flex gap-14">
                  <div className="flex flex-col w-fit">
                    <p className="font-bold">CineSense Rating</p>
                    <div className="flex">
                      <i class="yellow star icon" />
                      {movieDetail.popularity.toFixed(2)}/100
                    </div>
                  </div>
                  <div className="flex flex-col w-fit">
                    <p className="font-bold">IMDb Rating</p>
                    <Rating
                      name="read-only"
                      value={Math.round(movieDetail.vote_average) / 2}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-xl text-justify">{movieDetail.overview}</div>
            <div className="flex flex-col space-y-3 text-lg">
              <div className="flex gap-6">
                <Chip label="Cast" />
                <div className="flex gap-3">
                  {modifiedCastList.map((cast) => {
                    return <Chip label={cast} variant="outlined" />;
                  })}
                </div>
              </div>
              <div className="flex gap-6">
                <Chip label="Crew" />
                <div className="flex gap-3">
                  {modifiedCrewList.map((crew) => {
                    return <Chip label={crew} variant="outlined" />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-fit mt-14 px-10">
        <div className="text-3xl font-bold spacing tracking-wide">
          More movies like {movieDetail.title_x} ...
        </div>
        <div className="w-screen h-fit mt-10">
            
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
