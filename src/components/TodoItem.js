import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <ul className="todo-item">
      <li style={{
        display: "block"
      }}>
        <input
          type="checkbox"
          checked={props.elem.completed}
          onChange={() => props.handleChange(props.elem.id)}/>
        <span style={props.elem.completed
          ? completedStyle
          : null}>{props.elem.text}</span>
      </li>
    </ul>
  )
}
export default TodoItem;