import { MoveRight } from "lucide-react";
const CardContent = (props) => {
  return (
    <>
      <p className="text-white mt-60 pr-2 text-shadow-2sm leading-7.5 text-[19px]">
        Prime customers <br /> that have access <br /> to bank credit and are
        not satisfied with the current service.
      </p>
      <div className="bottom justify-between flex mt-12">
        <div
          style={{ backgroundColor: `${props.color}` }}
          className="text-white text-[19px] py-0.5  px-4 rounded-4xl "
        >
          {props.tag}
        </div>
        <div
          style={{ backgroundColor: `${props.color}` }}
          className="rounded-full p-1.5"
        >
          <MoveRight color="#fff" strokeWidth={3} size={24} />
        </div>
      </div>
    </>
  );
};

export default CardContent;
