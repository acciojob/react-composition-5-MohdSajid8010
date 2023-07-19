import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs"
const tab_arr = [
  { title: "Tab 1", content: "Content for Tab 1" },
  { title: "Tab 2", content: "Content for Tab 2" },
  { title: "Tab 3", content: "Content for Tab 3" },

]
const tab_arr2 = [
  { title: "Tab A", content: "Content for Tab A" },
  { title: "Tab B", content: "Content for Tab B" },
  { title: "Tab C", content: "Content for Tab C" },

]
const App = () => {
  return (
    <div>
      <Tabs tabs={tab_arr} />
      <Tabs tabs={tab_arr2} />
    </div>

  )
}

export default App