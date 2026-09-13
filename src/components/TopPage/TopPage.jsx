import NavBar from "./NavBar";
import TopContent from "./TopContent";

const TopPage = (props) => {
  return (
    <div className="px-12 py-2">
      <NavBar />
      <TopContent users={ props.users}/>
    </div>
  );
};

export default TopPage;
