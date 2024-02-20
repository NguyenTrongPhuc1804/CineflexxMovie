// import img from "../../assets/images/series/wanda.png";

import { NavLink, useNavigate } from "react-router-dom";
import { APP_DOMAIN_CDN_IMAGE } from "../../../util/setting";

// import imgBanner from "../../assets/images/black-banner.png";
function Card(props) {
  const { film } = props;
  const navigation = useNavigate();
  const random = Math.floor(Math.random() * film?.category?.length);
  const randomCategory = film.category[random].slug;
  return (
    <>
      <div
        onClick={() => {
          navigation(`/phim/${film?.slug}`);
          localStorage.setItem("randomCategory", randomCategory);
          console.log(film?.slug);
        }}
        className="wrapper  z-50 relative cursor-pointer  transition-all group overflow-hidden h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 "></div>

        <button className=" z-10 group-hover:block hidden transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <i className="fa-solid fa-play  bg-black bg-opacity-70 hover:bg-yellow-500 transition-colors  p-5 rounded-full text-white"></i>
        </button>
        <img
          loading="lazy"
          className="w-full sm:h-[300px] h-[250px] sm:h-[500px] object-cover group-hover:scale-110 transition-all"
          // src={film.thumb_url}
          src={`${APP_DOMAIN_CDN_IMAGE}/uploads/movies/${film?.thumb_url}`}
          alt=""
        />
        <div className="absolute bottom-0 sm:pb-6  p-[3%]   text-white   w-full ">
          <h1 className="text-xl line-clamp-1  sm:mb-4  mb-2 font-bold">
            {film.name}
          </h1>
          <div className="sm:flex flex-none sm:justify-start justify-center font-medium">
            {/* <div className="flex items-center mr-3 text-xs">
              <i className="fa-solid fa-star mr-2 text-red-500"></i>
              <p>9.5</p>
            </div> */}
            <div className="flex items-center mr-3 text-xs sm:text-sm">
              <i className="fa-solid fa-clock mr-2 text-red-500 "></i>
              <p>{film.time}</p>
            </div>
            {film.type === "single" ? (
              <div className="flex items-center mr-3 text-xs sm:text-sm">
                <i className="fa-solid fa-film mr-2 text-red-500"></i>
                <p className=" mr-2">{film.quality}</p>
                <p>{film.lang}+</p>
              </div>
            ) : (
              ""
            )}

            {film.type === "single" ? (
              ""
            ) : (
              <div className="flex items-center mr-3 text-xs sm:text-sm">
                <i className="fa-solid fa-film mr-2 text-red-500"></i>

                <p>{film.episode_current}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
