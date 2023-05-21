import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr className=" bg-emerald-400 w-2/3 h-1 rounded-md mt-8 mx-auto" />
      <footer className="mx-auto text-white max-w-5/6 text-center text-xl my-4 flex items-center justify-center flex-col">
        <p>
          &copy; cinephile<span className="text-emerald-400">Hub</span>.com
        </p>
        <div className="mt-2 flex flex-row gap-4">
          <FaInstagram className="hover:cursor-pointer" size={40} />
          <FaFacebook className="hover:cursor-pointer" size={40} />
          <FaTwitter className="hover:cursor-pointer" size={40} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
