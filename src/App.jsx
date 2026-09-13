import TopPage from "./components/TopPage/TopPage";

const users = [
  {
    img: "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c2luZXNzfGVufDB8MXwwfHx8Mg%3D%3D",
    tag: "Satisfied",
    color: "blue",
  },
  {
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Underserved",
    color: "lightseagreen",
  },
  {
    img: "https://images.unsplash.com/photo-1571365689578-618663443bd7?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Underbanked",
    color: "orange",
  },
  {
    img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfDF8MHx8fDI%3D",
    tag: "Satisfied",
    color: "green",
  },
];
const App = () => {
  return (
    <>
      <TopPage users={users} />
    </>
  );
};

export default App;
