import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import CarouselItem from "./CarouselItem";
import { useRef } from "react";

const Carousel = ({ Content }) => {
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
  return (
    <section className="relative">
      <button className="absolute top-[42%] left-[-0.2%] w-4 md:block hidden z-20 hover:outline-none opacity-50 hover:opacity-100">
        <AiFillCaretLeft onClick={() => Navigate("left")} size={35} />
      </button>
      <section
        ref={crousleContainer}
        className="flex mt-4 py-1 ml-1 overflow-x-scroll overflow-y-hidden no-scrollbar bg-gradient-to-r from-indigo-400 scroll-my-5"
      >
        {Content.map((data) => (
          <CarouselItem data={data} key={data.id} />
        ))}
      </section>
      <button
        onClick={() => Navigate("right")}
        className="absolute top-[42%] right-[-0.2%] w-4 md:block hidden z-20 hover:outline-none opacity-50 hover:opacity-100"
      >
        <AiFillCaretRight size={35} />
      </button>
    </section>
  );
};

export default Carousel;
