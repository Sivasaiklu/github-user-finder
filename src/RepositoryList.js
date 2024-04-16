import React from 'react';

function RepositoryList({ userRepos }) {
    const repositoryListStyles = {
        backgroundColor: '#48A9A6',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '20px auto',
        border: '2.5px solid black',
      };
    
      const h3Styles = {
        fontSize: '24px',
        marginBottom: '10px',
        backgroundColor:'black',
        border: '1px solid black',
        borderRadius: '30px',
        color:'white',
    
      };
    
      const ulStyles = {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
      };
    
      const liStyles = {
        borderBottom: '1.5px solid black',
        padding: '10px 0',
      };
    
      const strongStyles = {
        fontSize: '18px',
        color: 'black',
      };
    
      const pStyles = {
        marginBottom: '5px',
      };
  return (
    <div style={repositoryListStyles}>
      <h3 style={h3Styles}>Repositories</h3>
      <ul style={ulStyles}>
        {userRepos.map(repo => (
          <li key={repo.id} style={liStyles}>
            <strong style={strongStyles}>{repo.name}</strong>
            <p style={pStyles}>{repo.description}</p>
            <p style={pStyles}>Stars: {repo.stargazers_count}</p>
            <p style={pStyles}>Forks: {repo.forks_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
