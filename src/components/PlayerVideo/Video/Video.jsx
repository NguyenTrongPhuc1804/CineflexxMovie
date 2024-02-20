import React, { useEffect } from "react";

function Video(props) {
  let { link } = props;
  useEffect(() => {}, [link]);
  return (
    <div>
      <iframe
        className="sm:h-[62vh] h-[30vh] w-full sm:w-[80%] m-auto sm:mt-[5rem] mt-[5rem] lg:mt-[6.3rem]"
        title="video player"
        src={link}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    </div>
  );
}

export default Video;
