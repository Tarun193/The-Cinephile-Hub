import { useEffect, useState } from "react";
import { API, API_KEY } from "../../utils/API";
import ReactPaginate from "react-paginate";
import ExploreGallery from "../../components/ExploreGallery/ExploreGallery";

const TV = () => {
  const [TVShows, setTVShows] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const response = await API.get(
        `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${currentPage}`
      );
      setPages(response.data.total_pages);
      const result = response.data.results.map((result) => {
        result.type = "tv";
        return result;
      });
      setTVShows(result);
    };
    fetchData();
  }, [setTVShows, pages, currentPage]);

  const handlePaginaton = (p) => {
    setCurrentPage(p.selected + 1);
  };
  return (
    <main className="sw-5/6 md:w-2/3 mx-auto my-4">
      <h2 className="text-white text-3xl mb-4">Explore TV Shows</h2>
      <hr className="w-full h-[0.1rem] bg-white" />
      <ExploreGallery Content={TVShows} />
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
    </main>
  );
};

export default TV;
