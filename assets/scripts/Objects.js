
// const userChose = "Helelo";
// const person = {
//     name: 'Max',
//     age: 30,
//     [userChose]: "...",
//     hobbies:["Sports","hi"],
//     greet: function() {
//         console.log('Hi, I am ' + this.name);
//     },
//     1.5: "hello"
// };
// delete person.age;
// person.greet();

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const hobbies = ['Sports','Cooking'];
// const copiedArray = [...hobbies];

// console.log(copiedArray);
// const numbers = [12,-456789,'asdasd']
// console.log(numbers);
//
// const toArray = (...args) => {
//     return args;
// }



const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];



const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter? movies: movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    let {getFormattedTitle} = movie;
    getFormattedTitle = getFormattedTitle.bind(movie);
    let newtext = getFormattedTitle.call(movie);
    let newText2 = getFormattedTitle.apply(movie,[]);
    console.log(newtext);
    if('info' in movie){
        console.log('yes');
    }
    for (const key in movie.info) {
        console.log(key)
      if (key !== 'title') {
        text = text + `Data: ${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;
  
  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') { return; }

  const newMovie = {
    info: { title,
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormattedTitle(){
        console.log(this);
        return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
    console.log(this)
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);


// Object.assign()

const person =  {"ss":"aa"};
const person2 = Object.assign({},person);

// Object destruc...
