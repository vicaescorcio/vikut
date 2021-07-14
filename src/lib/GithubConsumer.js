const FOLLOW_URL = 'https://api.github.com/users/vicaescorcio/followers';
const MEME_URL = 'https://api.imgflip.com/get_memes';

export const fetchFollowers = async (setFollowers) => {
  const response = await fetch(FOLLOW_URL);
  const data = await response.json();
  setFollowers(data);
};

export const fetchMeme = async () => {
  const response = await fetch(MEME_URL);
  const data =  await response.json();

  return data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
}