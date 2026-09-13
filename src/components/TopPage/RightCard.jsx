
import CardContent from "./CardContent";

const RightCard = (props) => {
  console.log(props);
  return (
    <div
      style={{ backgroundImage: `url(${props.img})` }}
      className="bg-blue-800  flex-wrap shrink-0 h-full rounded-3xl  bg-cover w-73 px-8 flex flex-col"
    >
      <div className="rounded-full font-bold bg-white h-9 w-9 relative top-8  text-center py-1 text-[17px]">
        {props.id + 1}
      </div>
      <CardContent  tag={props.tag} color={props.color} />
    </div>
  );
};

export default RightCard;
