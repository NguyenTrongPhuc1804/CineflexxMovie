import logo from "../../assets/LogoCinema/cinema.png";
import googlePLay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";

export default function Footer() {
  return (
    <div className="px-6 mt-[5%] py-3 bg-[#221f1f] text-white text-xs sm:text-base py-[80px]">
      <div className="grid  grid-cols-2 grid-rows-3 sm:grid-rows-1 sm:grid-cols-6 items-center">
        <div className=" col-span-2 px-6 ">
          <img
            className="w-[150px] m-auto  sm:ml-0 object-cover h-[70px]"
            src="./icon/iconMlem.png"
            alt=""
          />
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim minus
            laboriosam distinctio mollitia a corporis culpa in repudiandae ea
            sequi, cum aperiam omnis nihil animi totam maxime quae aliquid
            porro.
          </p>
          <div className="">
            <button className="px-2 mr-3 py-1 text-red-700 rounded-full bg-[#fff]">
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button className="px-2 mr-3 py-1 text-red-700 rounded-full bg-[#fff]">
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button className="px-2 mr-3 py-1 text-red-700 rounded-full bg-[#fff]">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
        <div className="col-1 px-6">
          <strong className="">Flix</strong>
          <ul>
            <li className="mt-3">About us</li>
            <li className="mt-3">My profile</li>
            <li className="mt-3">Pricing plans</li>
            <li className="mt-3">Contacts</li>
          </ul>
        </div>
        <div className="col-1 px-6">
          <strong className="">Browse</strong>
          <ul>
            <li className="mt-3">About us</li>
            <li className="mt-3">My profile</li>
            <li className="mt-3">Pricing plans</li>
            <li className="mt-3">Contacts</li>
          </ul>
        </div>
        <div className="col-1 px-6">
          <strong className="">Help</strong>
          <ul>
            <li className="mt-3">About us</li>
            <li className="mt-3">My profile</li>
            <li className="mt-3">Pricing plans</li>
            <li className="mt-3">Contacts</li>
          </ul>
        </div>
        <div className="col-1 px-6">
          <strong>Download app</strong>
          <img className="my-3" src={googlePLay} alt="" />
          <img src={appStore} alt="" />
        </div>
      </div>
    </div>
  );
}
