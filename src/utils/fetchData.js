export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '683b8512f0msh355b429dcd5307dp1ba9fbjsnc6e76e4651c1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
