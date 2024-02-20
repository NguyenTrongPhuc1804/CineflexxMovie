import Card from "../Card/Card";

function GirdFiml() {
  return (
    <div className="grid sm:grid-cols-4  grid-cols-2 sm:grid-rows-3 gap-2 ">
      <div className="sm:col-span-2 sm:row-span-2 text-2xl col-span-full row-span-1">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
    </div>
  );
}

export default GirdFiml;
