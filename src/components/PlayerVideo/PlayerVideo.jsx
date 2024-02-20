import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailFilm, getTheLoai } from "../../redux/reducer/DetailFilmSlice";
import { getFilmHomePage } from "../../redux/reducer/ManagementFilmSlice";
import HtmlParser from "react-html-parser";
import Button from "../Button/Button";
import SlideCard from "../SlideCard/SlideCard";
import Loading from "../Loading/Loading";
import { displayPlayer, hiddenPlayer } from "../../redux/reducer/LoadingSlice";
import LoadingPlayer from "../Loading/LoadingPlayer";
import Video from "./Video/Video";

function PlayerVideo() {
  const navigate = useNavigate();
  const { name } = useParams();
  const dispatch = useDispatch();
  const detailFilm = useSelector((state) => state.DetailFilm.detailFilm);
  const PhimMoi = useSelector((state) => state.ManagementFilmSlice.PhimMoi);
  const { linkFilm } = useSelector((state) => state.DetailFilm);

  const { listTheLoai } = useSelector((state) => state.DetailFilm);
  const [loading, setLoading] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [episode, setEpisode] = useState(
    detailFilm?.item?.episodes[0]?.server_data[0]?.link_embed
  );

  const [changeServe, setChangeServe] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    dispatch(getDetailFilm({ name }))
      .then((data) => {
        if (!data.error) {
          setLoading(false);
          dispatch(getTheLoai(localStorage.getItem("randomCategory")));
          dispatch(getFilmHomePage());
        }
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return LoadingPlayer;
  }
  return (
    <div className="bg-[#181616]  text-white pt-[1%]">
      <div className="relative w-full">
        <Video link={linkFilm} />
      </div>
      <div className="sm:max-w-[80%] m-auto   p-3 border-[1px] max-h-[300px] overflow-y-scroll scrollbar-thin  scrollbar-thumb-red-700  scrollbar-track-gray-700  border-white mt-[3%] flex">
        <div className="">
          <div className="text-xs sm:text-lg font-bold ">Server :</div>
          <div className="flex-wrap ">
            {detailFilm?.item?.episodes.map((server, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    const index = detailFilm?.item?.episodes.findIndex(
                      (se) => se.server_name === server.server_name
                    );
                    setChangeServe(index);

                    dispatch(getDetailFilm({ name, server: index }));
                  }}
                  className=" mr-2 mb-2"
                >
                  <Button
                    text={server.server_name}
                    color=" after:bg-[#537188]"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h1 className="text-xs sm:text-lg font-bold ">
            Danh sách tập phim :{" "}
          </h1>
          <div className="flex-wrap  text-center">
            {detailFilm?.item?.episodes[changeServe]?.server_data.map(
              (link, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      const index = detailFilm?.item?.episodes[
                        changeServe
                      ]?.server_data.findIndex((ep) => ep.slug === link?.slug);
                      dispatch(
                        getDetailFilm({
                          name,
                          sever: changeServe,
                          episodes: index,
                        })
                      );
                    }}
                    className={` mr-2 my-2 text-xs border-[2px] border-red-700 rounded-md z-20  text-white font-bold px-3 py-1  after:transition-all group  after:hover:translate-x-0 overflow-hidden relative after:content-[''] after:w-full after:h-full ${
                      linkFilm === link.link_embed
                        ? " sm:after:translate-x-[0%] after:bg-red-600 "
                        : " sm:after:translate-x-[-100%] after:bg-none "
                    }  after:absolute after:top-0 after:left-0 after:-z-10`}
                  >
                    Tập {link.name}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="mt-[2%]  px-[5%] sm:px-[10%]">
        <div className="">
          <div className="relative  py-2 text-3xl font-bold mt-5 text-white">
            {/* <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div> */}
            <p>{detailFilm?.item?.name}</p>
          </div>
        </div>
        <h3 className="text-lg font-bold text-red-700">
          {detailFilm?.item?.origin_name}
        </h3>
        <div className="mt-[20px] p-5 border-[1px] border-gray-500">
          <h3 className="text-lg font-bold">Nội dung phim :</h3>
          <h5 className="text-base ">
            {!seeMore
              ? HtmlParser(detailFilm?.item?.content.slice(0, 150))
              : HtmlParser(detailFilm?.item?.content)}

            {!seeMore ? (
              <span
                onClick={() => {
                  setSeeMore(true);
                }}
                className="text-blue-500 cursor-pointer ml-2"
              >
                xem thêm ....
              </span>
            ) : (
              ""
            )}
          </h5>
          <div className="mt-[20px]">
            <div className="mb-2 font-bold">Tags</div>
            {detailFilm?.item?.category.map((category, i) => (
              <button
                key={i}
                className="px-3 py-1 bg-black text-gray-400 mr-2 hover:bg-red-700 hover:text-white transition-all "
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>CÓ THỂ BẠN CŨNG MUỐN XEM</p>
          </div>
          <SlideCard listFilm={listTheLoai.items} gap={10} />
        </div>

        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>PHIM MỚI CẬP NHẬT</p>
          </div>
          <SlideCard listFilm={PhimMoi.items} gap={10} />
        </div>
      </div>
    </div>
  );
}

export default PlayerVideo;
