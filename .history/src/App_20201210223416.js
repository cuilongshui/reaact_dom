import "./App.css";
import ListItem from "./components/listItem";
// import ListItem from './components/listItemFunc'

const listData = [
  {
    id: 1,
    title: "sony 65寸高清电视",
    price: 4000,
  },
  {
    id: 2,
    title: "华为 Meta30",
    price: 6000,
  },
  {
    id: 3,
    title: "华硕 玩家国度笔记本",
    price: 10000,
  },
];

function App() {
  return (
    //  <React.Fragments></React.Fragments> 
    // 包含子元素无需生成多余的子节点  简写为---->  <></>
    <>
      <div className="container">
        <ListItem data={ listData[0]}/>
        <ListItem data={ listData[1]}/>
        <ListItem data={ listData[2]}/>
      </div>
    </>
  );
}

export default App;
