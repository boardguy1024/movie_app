import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [Movie]
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => {
              return (
                <Movie
                  id={movie.id}
                  year={movie.year}
                  rating={movie.rating}
                  title={movie.title}
                  summary={movie.summary}
                  coverImage={movie.coverImage}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
