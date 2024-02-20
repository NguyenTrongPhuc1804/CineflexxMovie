import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
function CardBanner(props) {
  const navigate = useNavigate();

  const [contents, setContent] = useState("");
  const { film } = props;
  function isDOM(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    const el = doc.body.firstChild;
    return el instanceof HTMLElement;
  }

  useEffect(() => {
    if (film?.content) {
      if (isDOM(film?.content)) {
        let arrItem = ReactHtmlParser(film?.content);
        setContent(arrItem);
      } else {
        setContent(film?.content);
      }
    }
  }, []);
  return (
    <>
      <div
        onClick={() => {
          navigate(`/phim/${film.slug}`);
        }}
        className="wrapper  relative cursor-pointer  transition-all sm:h-[80vh] h-[51vh] group overflow-hidden h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 "></div>
        <button className="text-5xl  z-10 group-hover:block hidden transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <i className="fa-solid fa-play  bg-black bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-50 transition-colors  py-5 px-7 rounded-full text-white"></i>
        </button>
        <img
          loading="lazy"
          className="w-full object-cover  transition sm:h-[80vh] h-[55vh]"
          src={film?.poster_url}
          // src={imgBanner}
          // srcSet="https://img.ophim1.com/uploads/movies/2359-thumb.jpg"
          alt=""
        />
        <motion.div className="  absolute px-10 py-10 z-10 sm:w-[40%] top-1/2 transform  -translate-y-1/2  p-[3%]  text-white    w-full ">
          <motion.h1
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="sm:text-3xl truncate  text-2xl mb-5 font-bold"
          >
            {film?.name}
          </motion.h1>

          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="flex justify-start font-medium mb-3 sm:mb-9"
          >
            <div className="flex items-center mr-3 text-xs">
              <i className="fa-solid fa-star mr-2 text-red-500"></i>
              <p>9.5</p>
            </div>
            <div className="flex items-center mr-3 text-xs">
              <i className="fa-solid fa-clock mr-2 text-red-500"></i>
              <p>{film?.time}</p>
            </div>
            <div className="flex items-center mr-3 text-xs">
              <p className=" mr-2">{film?.quality}</p>
              <p>16+</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 2 }}
            className=" justify-start font-medium "
          >
            {contents.length > 150 ? (
              <div className="mb-5 line-clamp-3   text-xs sm:text-base">
                {contents}
              </div>
            ) : (
              <div className="mb-5 line-clamp-3   text-xs sm:text-base">
                {contents}
              </div>
            )}
            <div
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/phim/xem/${film.slug}`);
              }}
              className=""
            >
              <Button color="after:bg-red-700" text="xem ngay" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default CardBanner;
