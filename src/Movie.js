import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, rating, title, summary, coverImage }) {
  return (
    <div>
      <h3>id: {id}</h3>
      <h3>year: {year}</h3>
      <h3>rating: {rating}</h3>
      <h3>title: {title}</h3>
      <h3>summary: {summary}</h3>
      ===========================
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired
};

export default Movie;
