// Fetch movie data using Axios
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '10d8c1c8',
      s: searchTerm
    }
  });

  console.log(response.data);
};

const input = document.querySelector('input');

// Delay fetchData from being called until user stops typing for 500ms (debounce)
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = debounce(event => {
  fetchData(event.target.value);
});
input.addEventListener('input', debounce(onInput, 500));
