import React from 'react';
import './TodoItem.css';


function TodoItem(props) {

  // const onTodoComplete = () => {
  //   alert('ya completaste todo: ' + props.text);
  // };

  // const onTodoDelete = () => {
  //   alert('Borraste el todo: ' + props.text);
  // };

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}
  
export { TodoItem };