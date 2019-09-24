import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, rating, title, summary, coverImage, genres }) {
  return (
    <div className="movie">
      <div className="column__left">
        <img
          className="movie__image"
          src={coverImage}
          alt={title}
          title={title}
        ></img>
      </div>
      <div className="column__right">
        <h3 className="movie__title">title: {title}</h3>
        <h5 className="movie__year">year: {year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">summary: {summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
