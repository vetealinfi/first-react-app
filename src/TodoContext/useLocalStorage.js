import React from 'react';


function useLocalStorage(itenName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itenName);
          let parsedItem;
  
          if (!localStorageItem) {
            // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
            localStorage.setItem(itenName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            // Si existen TODOs en el localStorage los regresamos como nuestros todos
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
        }catch(error){
          setError(error);
        }finally{
          setLoading(false);
        }
  
      },1000);
  
    },[]);
    
  
    // Creamos la función en la que actualizaremos nuestro localStorage
    const saveItem = (newItem) => {
      // Convertimos a string nuestros TODOs
      const stringifiedItem = JSON.stringify(newItem);
      // Los guardamos en el localStorage
      localStorage.setItem(itenName, stringifiedItem);
      // Actualizamos nuestro estado
      setItem(newItem);
    };
  
    return{ 
      item, 
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage};