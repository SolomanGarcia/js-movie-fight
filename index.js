// Fetch movie data using Axios
const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '10d8c1c8',
      s: 'avengers'
    }
  });

  console.log(response.data);
}

fetchData();
