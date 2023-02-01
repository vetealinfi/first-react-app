import React from 'react';
import {TodoCounter} from '../TodoCounter'; 
import {TodoList} from '../TodoList'; 
import {TodoSearch} from '../TodoSearch/index.js'; 
import {TodoItem} from '../TodoItem';  
import {TodoForm} from '../TodoForm';
import {CreateTodoButton} from '../CreateTodoButton'; 
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';




function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            
            <TodoSearch />
         
            <TodoList>
                {error && 
                    <p>Hubo un error</p>
                }
                {loading && 
                    <p>Cargando listado</p>
                }
                {(!loading && !searchedTodos.length) && 
                    <p>Crea tu primer To Do</p>
                }
                
                {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}  
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            
            

            {!!openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            >

            </CreateTodoButton>
       
        </React.Fragment>
    );
}


export {AppUI}