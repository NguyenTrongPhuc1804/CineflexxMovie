function Button(props) {
  const { text } = props;
  const { color } = props;
  return (
    <>
      <button
        className={`text-xs z-20 sm:text-lg  font-bold px-7 py-2  after:transition-all group  after:hover:translate-x-0 overflow-hidden relative after:content-[''] after:w-full after:h-full sm:after:translate-x-[-50%] after:absolute after:top-0 after:left-0 ${color} after:-z-10 `}
      >
        {text.toUpperCase() === "WATCH NOW" ? (
          <i className="fa-solid fa-play mr-2"></i>
        ) : (
          ""
        )}
        {text.toUpperCase()}
      </button>
    </>
  );
}

export default Button;
