import React from "react";
import { useSelector } from "react-redux";
import loading from "../../assets/Loading/loading1.gif";
function Loading() {
  const { loadingState } = useSelector((state) => state.LoadingSlice);
  if (loadingState) {
    return (
      <div className="   fixed top-0 inset-0 bg-[#181616]  z-[500]">
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={loading}
          alt=""
        />
      </div>
    );
  } else {
    return "";
  }
}

export default Loading;
