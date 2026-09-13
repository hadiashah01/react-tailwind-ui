import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-[85vh] rounded-4xl w-[75%] flex gap-5  overflow-x-scroll"
    >
      {props.users.map((elem, idx) => (
        <RightCard
          img={elem.img}
          key={idx}
          id={idx}
          tag={elem.tag}
          color={elem.color}
        />
      ))}
    </div>
  );
};

export default RightContent;
