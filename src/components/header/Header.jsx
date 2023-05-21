import SearchBar from "./SearchBar";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const moblieMenu = useRef();
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const closeMenu = () => {
    const nav = moblieMenu.current;
    nav.classList.remove("block");
    nav.classList.add("hidden");
    setMobile(false);
  };
  // Function to open mobile menu
  const openMobileMenu = () => {
    const nav = moblieMenu.current;
    if (!mobile) {
      nav.classList.remove("hidden");
      nav.classList.add("block");
    } else {
      closeMenu();
    }
    setMobile(!mobile);
  };

  const onSearch = (e) => {
    e.preventDefault();
    closeMenu();
    setSearch("");
    navigate(`/search/${search}`);
  };
  return (
    <header className="bg-stone-950 text-white drop-shadow-2xl sticky  top-0 left-0 z-50">
      <section className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link to={"/"}>
          <h1 className="text-3xl">
            cinephile<span className="text-emerald-400">Hub</span> 🎬
          </h1>
        </Link>
        <SearchBar
          className={"w-1/3 relative hidden sm:block"}
          onSubmitForm={onSearch}
          search={search}
          setSearch={setSearch}
        />
        <div>
          <button
            onClick={() => openMobileMenu()}
            className="text-3xl sm:hidden text-white focus:outline-none"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <Link to="/movies" className="text-white">
              Movies
            </Link>
            <Link to="/tv" className="text-white">
              TV Shows
            </Link>
          </nav>
          <nav
            ref={moblieMenu}
            className="px-4 hidden opacity-100 absolute w-full top-16 left-0 z-30 bg-black"
            aria-label="secandary"
          >
            <div className="flex flex-col opacity-100">
              <Link
                onClick={closeMenu}
                to="/movies"
                className="text-white my-3"
              >
                Movies
              </Link>
              <Link onClick={closeMenu} to="/tv" className="text-white my-3">
                TV Shows
              </Link>
              <SearchBar
                onSubmitForm={onSearch}
                className={"my-1 text-white"}
                search={search}
                setSearch={setSearch}
              />
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
