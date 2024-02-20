import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function HomeThemePlate() {
  const detailFilm = useSelector((state) => state.DetailFilm.detailFilm);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [detailFilm]);
  return (
    <div className="bg-[#181616]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeThemePlate;
