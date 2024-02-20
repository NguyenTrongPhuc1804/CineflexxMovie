import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import CardBanner from "./CardBanner/CardBanner";

function SlideBanner(props) {
  const { listFilm } = props;
  // for (let i in listFilm) {
  //   console.log(listFilm[i]);
  // }

  const handleRenderCard = () => {
    return listFilm?.slice(1, listFilm?.length).map((film, i) => (
      <SwiperSlide className="" key={i}>
        <CardBanner film={film} />
      </SwiperSlide>
    ));
  };

  return (
    <div className="w-full m-auto  ">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCoverflow,
        ]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
        pagination={{
          // dynamicBullets: true,
          clickable: true,
        }}
        speed={1000}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        // spaceBetween={0}
        // slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
        breakpoints={{
          640: {
            // slidesPerView: 2,
          },
          768: {
            // slidesPerView: 3,
          },
          1024: {
            // slidesPerView: 4,
          },
        }}
        //         navigation
        //         pagination={{ clickable: true }}
        //         scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="mySwiper "
      >
        {handleRenderCard()}
        {/* <div className="swiper-button-prev after:content-none text-sm transition h-[100px]  w-[100px] ">
          <i className="fa-solid fa-chevron-left text-3xl text-white hover:text-red-700 transition-all"></i>
        </div>
        <div className="swiper-button-next after:content-none text-sm transition h-[100px]  w-[100px] ">
          <i className="fa-solid fa-chevron-right text-3xl text-white hover:text-red-700 transition-all"></i>
        </div> */}
      </Swiper>
    </div>
  );
}

export default SlideBanner;
