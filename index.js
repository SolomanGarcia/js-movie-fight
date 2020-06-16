// Fetch movie data using Axios
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '10d8c1c8',
      s: searchTerm
    }
  });

  // Handling if no movie found
  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

// Dropdown menu
const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

// Display search results
const onInput = async event => {
  const movies = await fetchData(event.target.value);
  
  for (let movie of movies) {
    const div = document.createElement('div');

    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;

    document.querySelector('#target').appendChild(div);
  }
};
input.addEventListener('input', debounce(onInput, 500));
