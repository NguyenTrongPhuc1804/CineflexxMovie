import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmHomePage } from "../../redux/reducer/ManagementFilmSlice";
import Card from "./Card/Card";
function SlideCard(props) {
  const { gap } = props;
  // const dispatch = useDispatch();
  // const { homeFilm } = useSelector((state) => state.ManagementFilmSlice);
  // const imageArray = homeFilm?.seoOnPage?.og_image;
  // useEffect(() => {
  //   dispatch(getFilmHomePage());
  // }, []);
  const { listFilm } = props;
  const handleRenderCard = () => {
    return listFilm?.map((film, i) => (
      <SwiperSlide key={i}>
        <Card film={film} />
      </SwiperSlide>
    ));
  };
  return (
    <div className="w-full m-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={gap}
        slidesPerView={2}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        //         navigation
        //         pagination={{ clickable: true }}
        //         scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        {handleRenderCard()}
        {/* <SwiperSlide>
          <Card img={imageArray} />
        </SwiperSlide> */}
        <div className="swiper-button-prev after:content-none z-50 text-sm transition h-[30px] sm:h-[100px]  w-[30px] sm:w-[100px] ">
          <i className="fa-solid fa-chevron-left text-3xl text-white hover:text-red-700 transition-all"></i>
        </div>
        <div className="swiper-button-next after:content-none z-50 text-sm transition h-[30px] sm:h-[100px]  w-[30px] sm:w-[100px] ">
          <i className="fa-solid fa-chevron-right text-3xl text-white hover:text-red-700 transition-all"></i>
        </div>
      </Swiper>
    </div>
  );
}

export default SlideCard;
