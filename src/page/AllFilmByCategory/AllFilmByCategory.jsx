import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/SlideCard/Card/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  getAllCategoryFilm,
  getAllCountry,
  getFilmHomePage,
  getFilmSearch,
  getListFilm,
  getPhimLe,
} from "../../redux/reducer/ManagementFilmSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MAIN_URL } from "../../util/setting";
function AllFilmByCategory() {
  //get data list new film
  const dispatch = useDispatch();
  const { catg, ctry, search } = useParams();
  const { list } = useParams();
  const { AllCategoryFilm } = useSelector((state) => state.ManagementFilmSlice);
  const [page, setPage] = useState(1);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const totalPage = Math.floor(
    AllCategoryFilm?.params?.pagination?.totalItems /
      AllCategoryFilm?.params?.pagination?.totalItemsPerPage
  );
  const handleRenderFilm = () => {
    if (AllCategoryFilm?.items?.length === 0) {
      return (
        <p className="text-xl font-bold text-white">Không tìm thấy phim ....</p>
      );
    }
    return AllCategoryFilm?.items?.map((item, i) => (
      <div key={i} className="sm:h-[350px] rounded-md overflow-hidden">
        <Card film={item} />
      </div>
    ));
  };
  const handleChange = (event, value) => {
    if (catg) {
      switch (catg) {
        case "phim-moi":
          dispatch(getListFilm({ catg, page: value }));
          setPage(value);

          break;
        case "phim-le":
          dispatch(getListFilm({ catg, page: value }));
          setPage(value);

          break;
        case "phim-bo":
          dispatch(getListFilm({ catg, page: value }));
          setPage(value);

          break;
        case "hoat-hinh":
          dispatch(getListFilm({ catg, page: value }));
          setPage(value);

          break;
        case "tv-shows":
          dispatch(getListFilm({ catg, page: value }));
          setPage(value);

          break;
        case "phim-long-tieng":
          dispatch(getListFilm({ catg, page: value }));
          setPage(value);

          break;
        default:
          dispatch(getAllCategoryFilm({ catg, page: value }));

          setPage(value);

          break;
      }
      setPage(value);
    } else if (ctry) {
      dispatch(getAllCountry({ ctry, page: value }));
      setPage(value);
    } else if (search) {
      dispatch(getFilmSearch({ search, page: value }));
      setPage(value);
    }
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    dispatch(getFilmHomePage());
    if (catg) {
      switch (catg) {
        case "phim-moi":
          dispatch(getListFilm({ catg }));
          break;
        case "phim-le":
          dispatch(getListFilm({ catg }));
          break;
        case "phim-bo":
          dispatch(getListFilm({ catg }));
          break;
        case "hoat-hinh":
          dispatch(getListFilm({ catg }));
          break;
        case "tv-shows":
          dispatch(getListFilm({ catg }));
          break;
        case "phim-long-tieng":
          dispatch(getListFilm({ catg }));
          break;
        default:
          dispatch(getAllCategoryFilm({ catg }));
          break;
      }
    } else if (ctry) {
      dispatch(getAllCountry({ ctry }));
    } else if (search) {
      dispatch(getFilmSearch({ search, page: 1 }));
    }
    setPage(1);
    window.scrollTo(0, 0);
  }, [catg, ctry, search]);
  return (
    <>
      <Helmet>
        <title>{AllCategoryFilm?.titlePage}</title>
        <meta
          name={AllCategoryFilm?.titlePage}
          content={AllCategoryFilm?.seoOnPage?.descriptionHead}
        />
        <link rel="canonical" href={`${MAIN_URL}/phim/list/${catg}`} />
        <meta
          property="og:type"
          content={AllCategoryFilm?.seoOnPage?.og_type}
        />
        <meta
          property="og:description"
          content={AllCategoryFilm?.seoOnPage?.descriptionHead}
        />
        <meta property="og:url" content={`${MAIN_URL}/phim/list/${catg}`} />
      </Helmet>
      <div className="sm:px-[12%] px-[2%] sm:mt-[5rem] mt-[5rem] lg:mt-[6.3rem] ">
        <div className="pt-[2%]">
          <div className="relative px-5 py-2 text-xl sm:text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>{AllCategoryFilm?.seoOnPage?.descriptionHead}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-2  gap-4">
          {handleRenderFilm()}
        </div>
        <div className="flex justify-center mt-[2%]">
          <ThemeProvider theme={darkTheme}>
            <Stack spacing={2}>
              <Pagination
                onChange={handleChange}
                color="secondary"
                shape="rounded"
                count={totalPage}
                defaultValue={1}
                page={page}
                // showFirstButton
                // showLastButton
                variant="outlined"
              />
            </Stack>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

export default AllFilmByCategory;
