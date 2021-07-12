const FOLLOW_URL = 'https://api.github.com/users/vicaescorcio/followers'

export const fetchFollowers = async (setFollowers) => {
    const response = await fetch(FOLLOW_URL);
    const data = await response.json();
    setFollowers(data);
};