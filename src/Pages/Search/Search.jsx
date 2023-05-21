import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { API } from "../../utils/API";
import ExploreGallery from "../../components/ExploreGallery/ExploreGallery";

const Search = () => {
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("movie");
  const [data, setData] = useState([]);
  const buttons = useRef();
  const { query } = useParams();

  const handlePaginaton = (p) => {
    console.log(p);
    setCurrentPage(p.selected + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const response = await API.get(
        `https://api.themoviedb.org/3/search/${type}?&query=${query}&page=${currentPage}`
      );
      const results = response.data.results.map((result) => {
        result.type = type;
        return result;
      });
      setData(results);
      setPages(response.data.total_pages);
      console.log("test");
    };
    fetchData();
  }, [type, currentPage, query]);

  return (
    <main className="sw-5/6 md:w-2/3 mx-auto my-4">
      <section className="text-white mb-4 flex justify-between items-center px-2">
        <h2 className="text-2xl sm:text-3xl">Search Results</h2>
        <div className="text-lg sm:text-xl" ref={buttons}>
          <button
            className={`px-2 py-1 mx-2 rounded-md ${
              type === "movie"
                ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                : ""
            }`}
            onClick={() => {
              setType("movie");
              setCurrentPage(1);
            }}
          >
            Movies
          </button>
          <button
            className={`px-2 py-1 mx-2 rounded-md ${
              type === "tv"
                ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                : ""
            } `}
            onClick={() => {
              setType("tv");
              setCurrentPage(1);
            }}
          >
            TV Shows
          </button>
        </div>
      </section>
      <hr className="w-full h-[0.1rem] bg-white" />
      {data.length ? (
        <>
          <ExploreGallery Content={data} />
          <ReactPaginate
            breakLabel=".."
            nextLabel=""
            onPageChange={handlePaginaton}
            pageRangeDisplayed={2}
            pageCount={pages < 200 ? pages : 200}
            previousLabel=""
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
            className="text-white flex text-sm sm:text-xl justify-center w-[50%] mx-auto my-4"
            pageClassName="px-2 rounded-[50%] mx-[0.15rem]"
            activeClassName="bg-emerald-400"
          />
        </>
      ) : (
        <p className="my-8 text-center text-white text-4xl">0 results 😢😢</p>
      )}
    </main>
  );
};

export default Search;
