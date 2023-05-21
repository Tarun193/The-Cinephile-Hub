import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { no_poster_url } from "../../utils/API";
const CarouselItem = ({ data }) => {
  return (
    <article
      key={data.id}
      className="mx-1 md:hover:scale-105 hover:z-10 p-1 min-w-[40%] sm:min-w-[30%] md:min-w-[20%] hover:cursor-pointer"
    >
      <Link to={`/details/${data.type}/${data.id}`}>
        <div className="flex justify-center w-[100%]">
          <img
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w300/${data.poster_path}`
                : no_poster_url
            }
            alt=""
            className="w-[90%] overflow-auto"
          />
        </div>
        <section>
          <h3 className="text-center mt-1">{data?.title || data?.name}</h3>
          <div className="flex justify-between sm:text-sm text-[0.65rem] mt-1 px-3 sm:px-4">
            <div>
              {data.media_type ? null : (
                <span className="relative bottom-[11%] right-[0.1rem]">
                  <BsFillStarFill className="inline mr-[0.1rem]" />
                </span>
              )}
              {data.media_type || data.vote_average}
            </div>
            <div>{data.release_date || data.first_air_date}</div>
          </div>
        </section>
      </Link>
    </article>
  );
};

export default CarouselItem;
