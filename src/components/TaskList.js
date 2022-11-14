import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import Task from "./Task"
import { v4 as uuidv4 } from 'uuid';


function TaskList({taskData}) {
  const [items, changeItems] = useState([...taskData])
  
  function handleClickDelete(id) {
    console.log(id)
    const newList = items.filter((item) => item.text !== id);

    changeItems(newList);  }
  
  const taskList = items.map((item) => (
    <li>
      <Task 
        key={item.id} 
        text={item.text} 
        category={item.category}
        deleteMe={() => handleClickDelete(item.text)}
      />
    </li>
  ));
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
