import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  const styles = {
    form: {
      textAlign: 'center',
      margin: '20px auto',
      padding: '20px',
      maxWidth: '400px',
      backgroundColor: '#48A9A6',
      borderRadius: '10px',
      border: '2.5px solid black'
    },
    heading: {
      color: 'black',
      fontSize: '36px',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '10px',
      boxSizing: 'border-box',
      border: 'none',
      color: 'black',
      fontSize: '16px',
    },
    button: {
      width: '50%',
      padding: '10px',
      backgroundColor: 'black',
      color: 'white',
      fontSize: '16px',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
    },
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
    <h1 style={styles.heading}>GitHub User Finder</h1>
    <input
      type="text"
      placeholder="Enter GitHub username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      style={styles.input}
    />
    <button type="submit" style={styles.button}>Search</button>

    
  </form>
  );
}

export default SearchForm;
