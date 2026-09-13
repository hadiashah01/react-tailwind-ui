import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const TopContent = (props) => {
  return (
    <div className="flex gap-8 w-full py-1">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default TopContent;
