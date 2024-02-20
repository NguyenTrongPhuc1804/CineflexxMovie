import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/LogoCinema/cinema.png";
import { getAllQuocGia, getAllTheLoai } from "../../redux/reducer/HeaderSlice";
import { getFilmSearch } from "../../redux/reducer/ManagementFilmSlice";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allTheLoai } = useSelector((state) => state.HeaderSlice);
  const { allQuocGia } = useSelector((state) => state.HeaderSlice);
  const { AllCategoryFilm } = useSelector((state) => state.ManagementFilmSlice);
  const myRef = useRef(null);
  const [state, setState] = useState({
    openMenuMobile: false,
    openSearch: false,
    openTheLoai: false,
    openQuocGia: false,
    searchFilm: "",
  });
  const handleChange = (e) => {
    setState({ ...state, searchFilm: e.target.value });
  };
  const handleSubmit = (e) => {
    navigate(`/phim/search/${state.searchFilm}`);
    setState({ ...state, openMenuMobile: false, searchFilm: "" });
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getAllTheLoai());
    dispatch(getAllQuocGia());

    window.addEventListener("click", function () {
      setState({
        ...state,
        openTheLoai: false,
        openQuocGia: false,
      });
    });
  }, []);

  return (
    <>
      <header className="bg-[#121212] z-[1000] text-white w-full fixed top-0">
        <nav
          className="mx-auto flex max-w-full items-center justify-between p-6  lg:px-8 text-white"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-[150px] object-cover"
                src="/icon/iconMlem.png"
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setState({ ...state, openMenuMobile: !state.openMenuMobile });
              }}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative ">
              <button
                onClick={() => {
                  navigate(`/phim/list/phim-moi`);
                  setState({
                    ...state,
                    openProduct: !state.openProduct,
                  });
                }}
                type="button"
                className="flex items-center gap-x-1 text-base font-semibold leading-6 "
                aria-expanded="false"
              >
                Phim Mới
              </button>{" "}
              {/*
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  */}{" "}
            </div>
            <div className="relative ">
              <button
                onClick={() => {
                  navigate(`/phim/list/phim-le`);

                  setState({
                    ...state,
                    openProduct: !state.openProduct,
                  });
                }}
                type="button"
                className="flex items-center gap-x-1 text-base font-semibold leading-6 "
                aria-expanded="false"
              >
                Phim Lẻ
              </button>{" "}
              {/*
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  */}{" "}
            </div>
            <div className="relative ">
              <button
                onClick={() => {
                  navigate(`/phim/list/phim-bo`);

                  setState({
                    ...state,
                    openProduct: !state.openProduct,
                  });
                }}
                type="button"
                className="flex items-center gap-x-1 text-base font-semibold leading-6 "
                aria-expanded="false"
              >
                Phim Bộ
              </button>{" "}
              {/*
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  */}{" "}
            </div>
            <div className="relative ">
              <button
                onClick={() => {
                  navigate(`/phim/list/hoat-hinh`);

                  setState({
                    ...state,
                    openProduct: !state.openProduct,
                  });
                }}
                type="button"
                className="flex items-center gap-x-1 text-base font-semibold leading-6 "
                aria-expanded="false"
              >
                Phim Hoạt Hình
              </button>{" "}
              {/*
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  */}{" "}
            </div>
            <div className="relative ">
              <button
                onClick={() => {
                  navigate(`/phim/list/phim-long-tieng`);

                  setState({
                    ...state,
                    openProduct: !state.openProduct,
                  });
                }}
                type="button"
                className="flex items-center gap-x-1 text-base font-semibold leading-6 "
                aria-expanded="false"
              >
                Phim Lồng tiếng
              </button>{" "}
              {/*
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  */}{" "}
            </div>
            <div
              className="relative  "
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <button
                onClick={() => {
                  setState({
                    ...state,
                    openTheLoai: !state.openTheLoai,
                    openQuocGia: false,
                  });
                }}
                type="button"
                className="flex items-center gap-x-1 text-base font-semibold leading-6 "
                aria-expanded="false"
              >
                Thể Loại
                <svg
                  className="h-5 w-5 flex-none "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>{" "}
              {/*
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  */}{" "}
              <div
                ref={myRef}
                className={`${
                  state.openTheLoai ? "" : "hidden"
                } absolute left-[-10rem] top-full z-10 mt-3 w-screen max-w-md h-[500px] overflow-y-scroll scrollbar-thin  scrollbar-thumb-red-700  scrollbar-track-gray-700 rounded-3xl bg-[#333] text-white shadow-lg ring-1 ring-gray-900/5`}
              >
                <div className="p-4 grid grid-cols-2">
                  {allTheLoai?.map((categ, i) => (
                    <div
                      onClick={() => {
                        navigate(`/phim/list/${categ.slug}`);
                      }}
                      key={i}
                      className="group cursor-pointer relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50 hover:text-red-600"
                    >
                      <div className="flex-auto">
                        <p href="#" className="block font-semibold ">
                          {categ.name}
                          <span className="absolute inset-0" />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative"
              ref={myRef}
            >
              <button
                onClick={() => {
                  setState({
                    ...state,
                    openQuocGia: !state.openQuocGia,
                    openTheLoai: false,
                  });
                }}
                type="button"
                className="flex items-center gap-x-1 text-base font-semibold leading-6 "
                aria-expanded="false"
              >
                Quốc Gia
                <svg
                  className="h-5 w-5 flex-none "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>{" "}
              {/*
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  */}{" "}
              <div
                onClick={() => {}}
                ref={myRef}
                className={`${
                  state.openQuocGia ? "" : "hidden"
                } absolute left-[-10rem] top-full z-10 mt-3 w-screen max-w-md overflow-y-scroll overflow-y-scroll scrollbar-thin  scrollbar-thumb-red-700  scrollbar-track-gray-700 h-[500px] rounded-3xl bg-[#333] text-white shadow-lg ring-1 ring-gray-900/5`}
              >
                <div className="p-4 grid grid-cols-3 ">
                  {allQuocGia.map((quocGia, i) => (
                    <div
                      onClick={() => {
                        navigate(`/phim/list/country/${quocGia.slug}`);
                      }}
                      key={i}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50 hover:text-red-600"
                    >
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold ">
                          {quocGia.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <form onSubmit={handleSubmit} className="w-[90%]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  value={state.searchFilm}
                  onChange={handleChange}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="VD: Nàng tiên cá"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        <div
          className={`lg:hidden ${state.openMenuMobile ? "" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          {" "}
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-10 " />
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            ref={myRef}
            className="bg-[#121212]   fixed inset-y-0 right-0 z-10 w-full overflow-y-auto text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-[150px] object-cover"
                  src="./icon/iconMlem.png"
                />
              </NavLink>
              <button
                onClick={() => {
                  setState({ ...state, openMenuMobile: false });
                }}
                type="button"
                className="-m-2.5 rounded-md p-2.5 "
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      onClick={() => {
                        navigate(`/phim/list/phim-moi`);

                        setState({
                          ...state,
                          openProduct: !state.openProduct,
                          openMenuMobile: false,
                        });
                      }}
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Phim Mới{" "}
                      {/*
            Expand/collapse icon, toggle classes based on menu open state.

            Open: "rotate-180", Closed: ""
          */}{" "}
                    </button>{" "}
                    {/* 'Product' sub-menu, show/hide based on menu state. */}{" "}
                  </div>
                  <div className="-mx-3">
                    <button
                      onClick={() => {
                        navigate(`/phim/list/phim-le`);

                        setState({
                          ...state,
                          openProduct: !state.openProduct,
                          openMenuMobile: false,
                        });
                      }}
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Phim Lẻ{" "}
                      {/*
            Expand/collapse icon, toggle classes based on menu open state.

            Open: "rotate-180", Closed: ""
          */}{" "}
                    </button>{" "}
                    {/* 'Product' sub-menu, show/hide based on menu state. */}{" "}
                  </div>
                  <div className="-mx-3">
                    <button
                      onClick={() => {
                        navigate(`/phim/list/phim-bo`);

                        setState({
                          ...state,
                          openProduct: !state.openProduct,
                          openMenuMobile: false,
                        });
                      }}
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Phim Bộ{" "}
                      {/*
            Expand/collapse icon, toggle classes based on menu open state.

            Open: "rotate-180", Closed: ""
          */}{" "}
                    </button>{" "}
                    {/* 'Product' sub-menu, show/hide based on menu state. */}{" "}
                  </div>
                  <div className="-mx-3">
                    <button
                      onClick={() => {
                        navigate(`/phim/list/hoat-hinh`);

                        setState({
                          ...state,
                          openProduct: !state.openProduct,
                          openMenuMobile: false,
                        });
                      }}
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Phim Hoạt Hình{" "}
                      {/*
            Expand/collapse icon, toggle classes based on menu open state.

            Open: "rotate-180", Closed: ""
          */}{" "}
                    </button>{" "}
                    {/* 'Product' sub-menu, show/hide based on menu state. */}{" "}
                  </div>
                  <div className="-mx-3">
                    <button
                      onClick={() => {
                        navigate(`/phim/list/phim-long-tieng`);

                        setState({
                          ...state,
                          openProduct: !state.openProduct,
                          openMenuMobile: false,
                        });
                      }}
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Phim Lồng Tiếng{" "}
                      {/*
            Expand/collapse icon, toggle classes based on menu open state.

            Open: "rotate-180", Closed: ""
          */}{" "}
                    </button>{" "}
                    {/* 'Product' sub-menu, show/hide based on menu state. */}{" "}
                  </div>
                  <div className="-mx-3">
                    <button
                      onClick={() => {
                        setState({
                          ...state,
                          openTheLoai: !state.openTheLoai,
                          openQuocGia: false,
                        });
                      }}
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Thể Loại{" "}
                      {/*
            Expand/collapse icon, toggle classes based on menu open state.

            Open: "rotate-180", Closed: ""
          */}{" "}
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>{" "}
                    {/* 'Product' sub-menu, show/hide based on menu state. */}{" "}
                    <div
                      className={`${
                        state.openTheLoai ? "" : "hidden"
                      } mt-2 space-y-2 grid grid-cols-2`}
                      id="disclosure-1"
                    >
                      {allTheLoai.map((catl, i) => (
                        <a
                          onClick={(e) => {
                            setState({ openMenuMobile: false });
                            navigate(`/phim/list/${catl.slug}`);
                          }}
                          key={i}
                          className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-red-600"
                        >
                          {catl.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="-mx-3">
                    <button
                      onClick={() => {
                        setState({
                          ...state,
                          openQuocGia: !state.openQuocGia,
                          openTheLoai: false,
                        });
                      }}
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Quốc Gia{" "}
                      {/*
            Expand/collapse icon, toggle classes based on menu open state.

            Open: "rotate-180", Closed: ""
          */}{" "}
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>{" "}
                    {/* 'Product' sub-menu, show/hide based on menu state. */}{" "}
                    <div
                      className={`${
                        state.openQuocGia ? "" : "hidden"
                      } mt-2 space-y-2 grid grid-cols-2`}
                      id="disclosure-1"
                    >
                      {allQuocGia.map((catl, i) => (
                        <a
                          onClick={(e) => {
                            navigate(`/phim/list/country/${catl.slug}`);
                            setState({ openQuocGia: false });
                          }}
                          key={i}
                          className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-red-600"
                        >
                          {catl.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="py-6">
                  <form onSubmit={handleSubmit}>
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <input
                        value={state.searchFilm}
                        onChange={handleChange}
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
