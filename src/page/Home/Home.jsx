import SlideBanner from "../../components/SlideBanner/SlideBanner";
import SlideCard from "../../components/SlideCard/SlideCard";
import SlidePricing from "../../components/SlidePricing/SlidePricing";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getFilmHomePage,
  getPhimBo,
  getPhimHoatHinh,
  getPhimLe,
} from "../../redux/reducer/ManagementFilmSlice";
import CardBanner from "../../components/SlideBanner/CardBanner/CardBanner";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MAIN_URL } from "../../util/setting";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filmNew = useSelector((state) => state.ManagementFilmSlice.homeFilm);
  const PhimMoi = useSelector((state) => state.ManagementFilmSlice.PhimMoi);
  const PhimLe = useSelector((state) => state.ManagementFilmSlice.PhimLe);
  const PhimBo = useSelector((state) => state.ManagementFilmSlice.PhimBo);
  const HoatHinh = useSelector((state) => state.ManagementFilmSlice.HoatHinh);
  useEffect(() => {
    dispatch(getFilmHomePage());
    dispatch(getPhimLe());
    dispatch(getPhimBo());
    dispatch(getPhimHoatHinh());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
        <meta
          name={PhimMoi?.seoOnPage?.titleHead}
          content={PhimMoi?.seoOnPage?.descriptionHead}
        />
        <link rel="canonical" href={`${MAIN_URL}`} />

        <meta property="og:type" content={PhimMoi?.seoOnPage?.og_type} />
        <meta property="og:url" content={`${MAIN_URL}`} />
      </Helmet>
      <div className="sm:mt-[5rem] mt-[5rem] lg:mt-[6.3rem]">
        <SlideBanner listFilm={filmNew} gap={0} />
      </div>
      <SlideCard listFilm={PhimMoi.items} gap={0} />
      <div className="body px-[4%]">
        <div className="mt-[80px]">
          <div className="flex items-center justify-between">
            <div className="relative px-5 py-2 text-2xl font-bold my-5 text-white">
              <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
              <p>Phim Lẻ</p>
            </div>
            <div className="">
              <button
                onClick={() => {
                  navigate("/phim/list/phim-le");
                }}
                className="text-white border hover:bg-white font-bold border-2 hover:text-red-600 transition-all py-1 px-2  border-white"
              >
                Xem tất cả
                <i className="fa-solid fa-caret-right ml-1 "></i>
              </button>
            </div>
          </div>

          <SlideCard listFilm={PhimLe.items} gap={20} />
        </div>
        <div className="mt-[80px]">
          <div className="flex items-center justify-between">
            <div className="relative px-5 py-2 text-2xl font-bold my-5 text-white">
              <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
              <p>Phim Bộ</p>
            </div>
            <div className="">
              <button
                onClick={() => {
                  navigate("/phim/list/phim-bo");
                }}
                className="text-white border hover:bg-white font-bold border-2 hover:text-red-600 transition-all py-1 px-2  border-white"
              >
                Xem tất cả
                <i className="fa-solid fa-caret-right ml-1 "></i>
              </button>
            </div>
          </div>
          <SlideCard listFilm={PhimBo.items} gap={10} />
        </div>
        <div className="mt-[80px]">
          <div className="flex items-center justify-between">
            <div className="relative px-5 py-2 text-2xl font-bold my-5 text-white">
              <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
              <p>Phim Hoạt Hình</p>
            </div>
            <div className="">
              <button
                onClick={() => {
                  navigate("/phim/list/hoat-hinh");
                }}
                className="text-white border hover:bg-white font-bold border-2 hover:text-red-600 transition-all py-1 px-2  border-white"
              >
                Xem tất cả
                <i className="fa-solid fa-caret-right ml-1 "></i>
              </button>
            </div>
          </div>
          <SlideCard listFilm={HoatHinh.items} gap={10} />
        </div>
      </div>
      <div className="mt-[80px]">
        <CardBanner film={filmNew[1]} />
      </div>
      <div className="mt-[80px]">
        <div className="relative px-5 py-2 text-2xl font-bold my-5 text-white">
          <p className="text-center">FLIX PRICING</p>
        </div>
        <SlidePricing />
      </div>
    </div>
  );
}

export default Home;
