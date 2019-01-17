import {
  getMovies,
  getById,
  addMovie,
  deleteMovie,
  getMovie,
  getSuggestions
} from "../db/db.js";

const resolvers = {
  Query: {
    movies(_, { limit, rating }) {
      //_는 무슨이름이 들어가도 되지만, 여기서는 사용하지 않기 때문에 _를 사용
      return getMovies(limit, rating);
    },
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;
