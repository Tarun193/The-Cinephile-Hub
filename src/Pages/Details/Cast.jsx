import { useEffect, useState, useRef } from "react";
import { API, API_KEY, no_avatar_url } from "../../utils/API";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Cast = ({ id, type }) => {
  const [data, setData] = useState([]);
  const crousleContainer = useRef();

  const Navigate = (dir) => {
    const container = crousleContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const respone = await API.get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      setData(respone?.data?.cast);
    };
    fetchData();

    return () => {
      setData([]);
    };
  }, [setData, type, id]);
  return (
    <>
      {data.length ? (
        <section className="relative">
          <section
            ref={crousleContainer}
            className="flex mt-4 py-1 ml-1 overflow-x-scroll overflow-y-hidden no-scrollbar scroll-my-5"
          >
            <button className="absolute top-[42%] left-[-0.2%] w-4 md:block hidden z-20 hover:outline-none opacity-50 hover:opacity-100">
              <AiFillCaretLeft onClick={() => Navigate("left")} size={35} />
            </button>
            {data.map((cast) => (
              <article
                key={cast.id}
                className="mx-1 md:hover:scale-105 hover:z-10 p-1 hover:cursor-pointer gap-2"
              >
                <div className="w-[100px] h-[100px] sm:w-[175px] sm:h-[175px] md:w-[250px] md:h-[250px] rounded-[50%] overflow-hidden">
                  <img
                    src={
                      cast?.profile_path
                        ? `https://image.tmdb.org/t/p/original${cast?.profile_path}`
                        : no_avatar_url
                    }
                    alt=""
                    className="object-center"
                  />
                </div>
                <div>
                  <h3 className="text-center mt-1 text-sm sm:text-lg md:text-xl">
                    {cast?.name || cast?.name}
                  </h3>
                </div>
              </article>
            ))}
            <button
              onClick={() => Navigate("right")}
              className="absolute top-[42%] right-[-0.2%] w-4 md:block hidden z-30 hover:outline-none opacity-50 hover:opacity-100"
            >
              <AiFillCaretRight size={35} />
            </button>
          </section>
        </section>
      ) : (
        <p className="text-center text-4xl">No Data Found</p>
      )}
    </>
  );
};

export default Cast;
