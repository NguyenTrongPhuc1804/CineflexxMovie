import CardPricing from "./CardPricing/CardPricing";

function SlidePricing() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 m-auto px-[5%] ">
      <div className="cols-1 ">
        <CardPricing />
      </div>
      <div className="cols-1">
        <CardPricing />
      </div>
      <div className="cols-1">
        <CardPricing />
      </div>
    </div>
  );
}

export default SlidePricing;
