import Button from "../../Button/Button";

function CardPricing() {
  return (
    <div className="relative  bg-[#221f1f] hover:transform hover:-translate-y-5 transition-all cursor-pointer  text-white py-[12%] px-[10%] ">
      <div className="absolute top-0 w-full h-[3px] left-0 bg-red-700"></div>
      <div className="flex justify-between px-5 text-2xl  ">
        <p>Basic</p>
        <strong>Free</strong>
      </div>
      <div className="flex flex-col text-xl  items-center py-[50px]">
        <p className="mt-2">Originals</p>
        <p className="mt-2">Swich plans anytime</p>
        <p className="mt-2">
          <del>65+ top Live</del>
        </p>
        <p className="mt-2">
          <del>TV Channels</del>
        </p>
      </div>
      <div className="text-center">
        <Button color="after:bg-red-700" text="Register now"></Button>
      </div>
    </div>
  );
}

export default CardPricing;
