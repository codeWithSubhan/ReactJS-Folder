import { useEffect, useRef, useState } from 'react';
import './style.css';
import StartRating from './StartRating';
const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const average = (arr) =>
  arr?.reduce((acc, cur, i, arr) => acc + cur / arr?.length, 0);
const KEY = '53027a48';
const App = () => {
  console.log(document);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('Inception');
  const [selectedID, setSelectedID] = useState(null);

  const [watched, setWatched] = useState(function () {
    const storeValue = localStorage.getItem('watched');
    return JSON.parse(storeValue);
  });
  // we can also pass calback functo to initiz state but dont give parmeter
  // it should be pure func it'scall(lazy initial state)

  function handleMovieDetails(id) {
    setSelectedID(id === selectedID ? null : id);
  }
  function onCloseMovie() {
    setSelectedID(null);
  }
  function handleWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function deleteWatchedMovie(id) {
    setWatched(watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error('Opps! something went wrong with fetching movies');

          const data = await res.json();
          // console.log(data);
          if (data.Response === 'False') throw new Error('Movie Not Found');

          setMovies(data.Search);
          // console.log(data);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setError('');
        setMovies([]);
        return;
      }
      fetchMovie();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  // console.log(movies);

  // console.log("RENDER");
  // throw is like return keyword use to throw error which you already learn in c language

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              handleMovieDetails={handleMovieDetails}
            />
          )}
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={onCloseMovie}
              handleWatchedMovie={handleWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                deleteWatchedMovie={deleteWatchedMovie}
              />
            </>
          )}
        </Box>

        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */}
      </Main>
    </>
  );
};

function Navbar({ children }) {
  return <nav className='nav-bar'>{children}</nav>;
}
function Logo() {
  return (
    <div className='logo'>
      <span role='img'>🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
function Search({ query, setQuery }) {
  const inputRef = useRef(null);
  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputRef.current) return;
      if (e.code === 'Enter') {
        inputRef.current.focus();
        setQuery('');
      }
    }
    document.addEventListener('keydown', callback);
    return () => document.addEventListener('keydown', callback);
  }, [setQuery]);
  // it's imparative code
  // useEffect(() => {
  //   document.querySelector(".search").focus();
  // }, []);

  // it's declarative code with useRef
  // console.log(useRef(0));

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
}
function NumResults({ movies }) {
  return (
    <p className='num-results'>
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className='main'>{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}

function Loader() {
  return <p className='loader'>Loading...</p>;
}
function ErrorMessage({ message }) {
  return <p className='error'>{message}</p>;
}
function MovieList({ movies, handleMovieDetails }) {
  return (
    <ul className='list list-movies'>
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleMovieDetails={handleMovieDetails}
        />
      ))}
    </ul>
  );
}
function Movie({ movie, handleMovieDetails }) {
  return (
    <li onClick={() => handleMovieDetails(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
function MovieDetails({
  selectedID,
  onCloseMovie,
  handleWatchedMovie,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  // const [isTop, setIsTop] = useState(imdbRating > 8);
  // console.log(isTop, imdbRating);
  // isTop is always be false although imdbRating in increase by 8 because
  // whatever you pass in useState it's initial value
  // setIsTop is not update hence isTop will never update

  const countRef = useRef(0);
  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  console.log(countRef.current);
  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedID]);

  function handleAdd() {
    if (userRating <= 0) {
      alert('please Give some Rating 😥');
    } else {
      const newWatchMovie = {
        imdbID: selectedID,
        title,
        year,
        poster,
        runtime: Number(runtime.split(' ')[0]),
        imdbRating: Number(imdbRating),
        userRating,
        countUserRating: countRef.current,
      };
      handleWatchedMovie(newWatchMovie);
      onCloseMovie();
    }
  }

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
      // console.log("effect:", title);
      return function CleanUp() {
        document.title = `usePopcorn`;
        // console.log("cleanUp:", title);
      };
    },
    [title]
  );
  useEffect(
    function () {
      function callback(e) {
        if (e.code === 'Escape') {
          onCloseMovie();
          console.log('CLOSE');
        }
      }
      document.addEventListener('keydown', callback);

      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [onCloseMovie]
  );
  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className='btn-back' onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className='details-overview'>
              <h2>{title} </h2>
              <p>
                {released} {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className='rating'>
              {!isWatched ? (
                <>
                  <StartRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  <button className='btn-add' onClick={handleAdd}>
                    + Add to list
                  </button>
                </>
              ) : (
                <p>You rated with movie {watchedUserRating}⭐</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Director {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched?.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched?.map((movie) => movie.userRating));
  const avgRuntime = average(watched?.map((movie) => movie.runtime));
  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched?.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}
function WatchedMovieList({ watched, deleteWatchedMovie }) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          deleteWatchedMovie={deleteWatchedMovie}
        />
      ))}
    </ul>
  );
}
function WatchedMovie({ movie, deleteWatchedMovie }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className='btn-delete'
          onClick={() => deleteWatchedMovie(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default App;
