/*
 * @Author: cui
 * @Date: 2020-12-10 22:12:38
 * @LastEditors: cui
 * @LastEditTime: 2020-12-11 00:38:45
 * @Description: 
 */
import React from "react";
import ListItem from "./components/listItem";

const listData = [
  {
    id: 1,
    title: "sony 65寸高清电视11111",
    prize: 4000,
  },
  {
    id: 2,
    title: "华为 Meta30",
    prize: 6000,
  },
  {
    id: 3,
    title: "华硕 玩家国度笔记本",
    prize: 10000,
  },
];

function App() {
  return (
    <div className="container">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}

export default App;
