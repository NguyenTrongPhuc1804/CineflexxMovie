import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchPath, useNavigate, useParams } from "react-router-dom";
import SlideCard from "../../components/SlideCard/SlideCard";
import { getDetailFilm, getTheLoai } from "../../redux/reducer/DetailFilmSlice";
import ReactHtmlParser from "react-html-parser";
import Button from "../../components/Button/Button";
import { Link, Element } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { APP_DOMAIN_CDN_IMAGE, MAIN_URL } from "../../util/setting";
function DetailFiml() {
  const navigate = useNavigate();
  const { name } = useParams();
  const dispatch = useDispatch();
  const detailFilm = useSelector((state) => state.DetailFilm.detailFilm);
  const { listTheLoai } = useSelector((state) => state.DetailFilm);
  const videoId = detailFilm?.item?.trailer_url.split("v=")[1];
  console.log(
    `${APP_DOMAIN_CDN_IMAGE}/uploads/movies/${detailFilm?.item?.poster_url}`
  );
  useEffect(() => {
    dispatch(getDetailFilm({ name }));
    dispatch(getTheLoai(localStorage.getItem("randomCategory")));
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <div className="">
      <Helmet>
        <title>{detailFilm?.seoOnPage?.titleHead}</title>
        <meta
          name={detailFilm?.seoOnPage?.titleHead}
          content={detailFilm?.seoOnPage?.descriptionHead}
        />
        <link rel="canonical" href={`${MAIN_URL}/phim/${name}`} />
        <meta property="og:type" content={detailFilm?.seoOnPage?.og_type} />
        <meta property="og:url" content={`${MAIN_URL}/phim/${name}`} />
        <meta property="og:title" content={detailFilm?.seoOnPage?.titleHead} />
        <meta
          property="og:description"
          content={detailFilm?.seoOnPage?.descriptionHead}
        />
        <meta
          property="og:image"
          content={`${APP_DOMAIN_CDN_IMAGE}/uploads/movies/${detailFilm?.item?.poster_url}`}
        />
      </Helmet>
      <div className="w-full text-white">
        <div
          className="h-[80vh] w-full relative "
          style={{
            backgroundImage: `url("${APP_DOMAIN_CDN_IMAGE}/uploads/movies/${detailFilm?.item?.poster_url}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 flex justify-center pt-[50%] sm:pt-[15%] bg-gradient-to-t from-[#181616] ">
            <div className="grid grid-cols-12 sm:grid-cols-3 sm:w-[80%] h-fit w-full pl-[5%]  ">
              <div className="col-1 flex px-4 sm:block hidden w-[350px] h-[450px] ">
                <img
                  className="rounded-2xl w-full h-full "
                  src={`${APP_DOMAIN_CDN_IMAGE}/uploads/movies/${detailFilm?.item?.thumb_url}`}
                  alt=""
                />
              </div>
              <div className="sm:col-span-2 col-span-full text-white ">
                <h1 className="sm:text-4xl text-3xl font-bold">
                  {detailFilm?.item?.name}
                </h1>
                <div className="flex-wrap my-5 ">
                  {detailFilm?.item?.category.map((item, i) => {
                    return (
                      <button
                        key={i}
                        className="px-4 text-xs py-1 border-[2px] border-white font-bold hover:bg-white hover:text-red-600 transition-all  rounded-full mr-2  mb-2"
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
                <div className="mb-4 line-clamp-4 sm:line-clamp-6  ">
                  <h1 className="">
                    {ReactHtmlParser(detailFilm?.item?.content)}
                  </h1>
                </div>
                <div className="grid sm:grid-cols-1 grid-cols-2">
                  <div className="sm:flex flex-none sm:mb-4">
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Trạng thái :</h3>
                      <p className="ml-2  font-bold text-red-500">Full</p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Số tập :</h3>
                      <p className="ml-2  font-bold text-red-500">
                        {detailFilm?.item?.episode_current}
                      </p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Năm sản xuất :</h3>
                      <p className="ml-2  font-bold text-red-500">
                        {detailFilm?.item?.year}
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex flex-none sm:mb-4">
                    <div className="flex items-center mr-2 flex-wrap ">
                      <h3 className=" font-bold">Đạo diễn :</h3>
                      <p className="ml-2  font-bold text-red-500">
                        {detailFilm?.item?.director[0].slice(0, 8)}...
                      </p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Quốc gia :</h3>
                      <p className="ml-2  font-bold text-red-500">
                        {detailFilm?.item?.country[0].name}
                      </p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Lượt xem :</h3>
                      <p className="ml-2  font-bold text-red-500">
                        {detailFilm?.item?.view}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex items-center flex-wrap ">
                    <h3 className=" font-bold">Diễn viên :</h3>
                    {detailFilm?.item?.actor.slice(0, 4).map((actor, i) => {
                      return (
                        <h5 key={i} className="ml-2 text-white">
                          {actor}
                        </h5>
                      );
                    })}
                    ...
                  </div>
                </div>
                <div className="mt-[20px] flex">
                  <div
                    onClick={() => {
                      navigate(`/phim/xem/${detailFilm?.item?.slug}`);
                    }}
                    className="mr-2"
                  >
                    {detailFilm?.item?.status === "trailer" ||
                    detailFilm?.item?.status === "Trailer" ? (
                      ""
                    ) : (
                      <Button color="after:bg-[#b91c1c]" text="xem ngay" />
                    )}
                  </div>
                  <Link to="section1" smooth={true}>
                    <Button color="after:bg-[#537188]" text="trailer" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Element
        name="section1"
        className="bg-[#181616] text-white w-full px-[5%] pt-[10%] "
      >
        <h3 className="text-3xl font-bold mb-5">Trailer </h3>
        {!videoId ? (
          <p className="text-xl font-extrabold">
            Phim hiện chưa có trailer. Chúng tôi sẽ thêm trailer sớm nhất có thể
            !!
          </p>
        ) : (
          <iframe
            className="w-full sm:h-[600px] h-[300px]"
            // height={600}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}

        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>CÓ THỂ BẠN CŨNG MUỐN XEM</p>
          </div>
          <SlideCard listFilm={listTheLoai.items} gap={10} />
        </div>
      </Element>
    </div>
  );
}

export default DetailFiml;
