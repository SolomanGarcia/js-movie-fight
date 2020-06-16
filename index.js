// Fetch movie data using Axios
const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '10d8c1c8',
      i: 'tt0848228'
    }
  });

  console.log(response.data);
}

fetchData();
