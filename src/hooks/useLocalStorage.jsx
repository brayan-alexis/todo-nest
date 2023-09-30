import React from 'react';

function useLocalStorage(itemName, initialValue) {
  // const [item, setItem] = React.useState(storedData);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // If there is no data in localStorage, then use initialValue 
        const storedData = JSON.parse(localStorage.getItem(itemName)) || initialValue;
        
        setItem(storedData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      // setLoading(false);
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    loading,
    error,
    item, 
    saveItem,
  };
}

export { useLocalStorage };

// ✔ Default todos
// const defaultTodos = [
//   { text: 'Create a new project 🚀', completed: true },
//   { text: 'Improve my skills 🤓', completed: false },
//   { text: 'Write a new article 📝', completed: false },
//   { text: 'Share with community 🌎', completed: false },
//   { text: 'Contribute to Open Source 🤖', completed: false },
// ];

// localStorage.setItem('TODONEST_V1.0', JSON.stringify(defaultTodos));