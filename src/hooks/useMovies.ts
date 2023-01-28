import { useEffect, useState } from 'react';
import movieDBBaseRequest from '../api/axios.config';
import { Movie, MoviesResponse } from '../interfaces/MoviesResponse.interface';

type MoviesList = {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
};

const useMovies = () => {
  const [moviesList, setMoviesList] = useState<MoviesList>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const getMovies = async () => {
    try {
      setIsLoading(true);
      const nowPlayingPromise =
        movieDBBaseRequest.get<MoviesResponse>('/now_playing');
      const popularPromise = movieDBBaseRequest.get<MoviesResponse>('/popular');
      const topRatedPromise =
        movieDBBaseRequest.get<MoviesResponse>('/top_rated');
      const upcomingPromise =
        movieDBBaseRequest.get<MoviesResponse>('/upcoming');
      const response = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

      setMoviesList({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      });
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 3));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { moviesList, isLoading };
};

export default useMovies;
