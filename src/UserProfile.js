import React from 'react';

function UserProfile({ userData }) {
    const userProfileStyles = {
        textAlign: 'center',
        backgroundColor: '#48A9A6',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
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
      const imgStyles = {
        width: '150px',
        height: '150px',
        borderRadius: '10px',
        marginBottom: '20px',
        border: '2.5px solid black',
        cursor: 'pointer',
      };
    
      const h2Styles = {
        fontSize: '24px',
        marginBottom: '10px',
      };
    
      const pStyles = {
        fontSize: '16px',
        marginBottom: '5px',
      };

  return (
    <div style={userProfileStyles}>
    <h3 style={h3Styles}>User Profile</h3>
    <img src={userData.avatar_url} alt="User Avatar" style={imgStyles} />
    <h2 style={h2Styles}>{userData.login}</h2>
    <p style={pStyles}>{userData.bio}</p>
    <p style={pStyles}>Followers: {userData.followers}</p>
    <p style={pStyles}>Following: {userData.following}</p>
  </div>
  );
}

export default UserProfile;
