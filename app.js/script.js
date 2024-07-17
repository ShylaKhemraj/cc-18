//U20026580
const movies = [
  { id: 1, title: 'Despicable Me' },
  { id: 2, title: 'Jaws' },
  { id: 3, title: 'Cinderella' },
];
const RateMovieButton = ({ selectedMovie }) => {
  const [rating, setRating] = useState(0);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    setConfirmationMessage(`You rated ${selectedMovie.title} ${rate} stars!`);
  };
  return (
    <div className="rate-movie-button">
      <h3>Rate {selectedMovie.title}</h3>
      {[1, 2, 3].map((star) => (
        <button key={star} onClick={() => handleRating(star)}>
          {star} ★
        </button>
      ))}
      {confirmationMessage & <p>{confirmationMessage}</p>}
    </div>
  );
};
const UploadButton = () => {
  const handleUpload = () => {
    alert('Image uploaded');
    // Implement actual upload logic here
  };

  return (
    <button onClick={handleUpload} className="upload-button">
      Upload Image
    </button>
  );
};
const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieSelect = (event) => {
    const movieId = parseInt(event.target.value, 10);
    const movie = movies.find((m) => m.id === movieId);
    setSelectedMovie(movie);
  };
  return (
    <div className="app">
      <div className="toolbar">
        <select onChange={handleMovieSelect} value={selectedMovie.id}>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
        <RateMovieButton selectedMovie={selectedMovie} />
        <UploadButton />
      </div>
    </div>
  );
};
export default App;