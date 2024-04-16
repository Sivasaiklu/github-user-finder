import React, { useState } from 'react';
import SearchForm from './SearchForm';
import UserProfile from './UserProfile';
import RepositoryList from './RepositoryList';
import fetchUserData from './fetchUserData';
import FectchUserRepository from './FectchUserRepository';
import './index.css'

function App() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userData = await fetchUserData(username);
      const userRepos = await FectchUserRepository(username);
      setUserData(userData);
      setUserRepos(userRepos);
      setError(null);
    } catch (error) {
      setUserData(null);
      setUserRepos(null);
      setError('User not found');
    }
  };
  const appStyles = {
    textAlign: 'center',
    backgroundColor: 'grey',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '20px auto',
    border: '5px solid black',

  };

  return (
    <div className="app"  style={appStyles}>
      <SearchForm onSearch={handleSearch} />
      {userData && <UserProfile userData={userData}  />}
      {userRepos && <RepositoryList userRepos={userRepos} />}
      {error && <p style={{color:'gold', fontSize:'28px', fontWeight:'bold' }}>{error}</p>}
    </div>
    
  );
}

export default App;
