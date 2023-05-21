import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, API_KEY, no_poster_url } from "../../utils/API";
import { BsFillStarFill } from "react-icons/bs";
import Recommendations from "./Recommendations";
import Cast from "./Cast";
import TrendingSection from "../../components/Trending/TrendingSection";

const Details = () => {
  const { id, type } = useParams();
  const [data, setData] = useState([]);
  const [hasRecommendation, setHasRecommendation] = useState(true);
  const [videoKey, setVideoKey] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      window.scrollTo(0, 0);
      if (id) {
        const response_data = await API.get(
          `/${type}/${id}?api_key=${API_KEY}`
        );
        setData(response_data.data);
        const video_key = await API.get(
          `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`
        );
        setVideoKey(video_key.data.results);
      }
    };
    featchData();
  }, [id, setData]);
  console.log(hasRecommendation);
  return (
    <main>
      <section
        style={{
          background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path}')  no-repeat center`,
        }}
        className="w-5/6 mx-auto my-4"
      >
        <section className="bg-[#000000ad] text-white flex sm:flex-row flex-col my-2 justify-center gap-2 sm:gap-6 md:gap-12">
          <div className="p-2 flex flex-col sm:items-start items-center w-full lg:w-1/3">
            <img
              src={
                data?.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${data?.poster_path}`
                  : no_poster_url
              }
              alt="poster"
            />
          </div>
          <div className=" text-sm md:text-xl text-justify px-4 sm:text-left mt-2 mx-auto w-full">
            <div>{data?.overview}</div>
            <div className="my-2">
              <p className="inline-block text-left w-full my-1">Genres: </p>
              <ul className="flex flex-row gap-3 flex-wrap">
                {data?.genres?.map((genre) => (
                  <li
                    key={genre.id}
                    className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
            <div id="info" className="mt-4 w-[70%] sm:full">
              <p className="relative ml-[1.5rem]">
                <span className="absolute bottom-[8%] left-[-1.5rem]">
                  <BsFillStarFill className="inline mr-[0.1rem]" />
                </span>
                {Math.round(data?.vote_average)}
              </p>
              <p>Adult:{data?.adult ? " Yes" : " No"} </p>
            </div>
            <button className="my-4 inline-block bg-green-500 px-2 py-1 rounded-xl">
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${videoKey[0]?.key}`}
              >
                Watch Trailer
              </a>
            </button>
          </div>
        </section>
      </section>
      <section className="w-5/6 text-white mx-auto my-4">
        <h2 className="text-xl md:text-3xl sm:text-2xl">Cast</h2>
        <Cast id={id} type={type} />
      </section>
      <section>
        <Recommendations
          type={type}
          id={id}
          setHasRecommendation={setHasRecommendation}
        />
        {!hasRecommendation ? (
          <TrendingSection text={"Recommendations"} />
        ) : null}
      </section>
    </main>
  );
};

export default Details;
