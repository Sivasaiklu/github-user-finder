import axios from 'axios';
import githubToken from './GitToken';

const fetchUserRepositories = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${githubToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};

export default fetchUserRepositories;
