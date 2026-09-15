import { MoveRight } from "lucide-react";
const CardContent = (props) => {
  return (
    <>
      <p className="text-white mt-50 pr-2 text-shadow-sm leading-6.5 text-[16px]">
        Prime customers <br /> that have access <br /> to bank credit and are
        not satisfied with the current service.
      </p>
      <div className="bottom  justify-between flex mt-7">
        <div
          style={{ backgroundColor: `${props.color}` }}
          className="text-white text-[15px] py-1.5   px-4 rounded-4xl "
        >
          {props.tag}
        </div>
        <div
          style={{ backgroundColor: `${props.color}` }}
          className="rounded-full p-1.5 shadow-lg"
        >
          <MoveRight  color="#fff" strokeWidth={2} size={24} />
        </div>
      </div>
    </>
  );
};

export default CardContent;
