import React from 'react';

import './CreateTodoButton.css';

function CreateTodoButton(props) {

  // const onClickButton = () => {
  //   alert("React sí puede ejecutar esta arrow function cada que le de la gana OwO");
  // };

  const onClickButton2 = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button 
      className="CreateTodoButton" 
      // onClick={onClickButton}
      onClick={() => onClickButton2('mensaje de alert')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };