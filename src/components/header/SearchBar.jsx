import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ className, onSubmitForm, search, setSearch }) => {
  return (
    <section className={className}>
      <form className="relative mb-1" onSubmit={(e) => onSubmitForm(e)}>
        <input
          className="w-full rounded-full outline-none p-1 bg-slate-500 text-xl"
          type="text"
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute top-2.5 right-3" />
      </form>
    </section>
  );
};

export default SearchBar;
