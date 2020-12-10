import "./App.css";
import ListItem from "./components/listItem";

function App() {
  return (
    //  <React.Fragments></React.Fragments> 包含子元素无需生成多余的子节点    简写为 ---->  <></>
    <>
      <div className="container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <div className="container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
}

export default App;
