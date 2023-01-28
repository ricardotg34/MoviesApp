import { useEffect, useState } from 'react';
import movieDBBaseRequest from '../api/axios.config';
import { Cast, CreditsResponse } from '../interfaces/Credits.interface';
import { FullMovie } from '../interfaces/FullMovie.interface';

interface MovieDetail {
  fullMovie?: FullMovie;
  cast: Cast[];
}

const useMovieDetail = (movieId: number) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>({
    cast: [],
    fullMovie: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getMovieDetail = async () => {
    try {
      setIsLoading(true);
      const movieDetailPromise = movieDBBaseRequest.get<FullMovie>(
        `/${movieId}`,
      );
      const creditsPromise = movieDBBaseRequest.get<CreditsResponse>(
        `/${movieId}/credits`,
      );

      const [movieDetailsResponse, castResponse] = await Promise.all([
        movieDetailPromise,
        creditsPromise,
      ]);

      setMovieDetail({
        fullMovie: movieDetailsResponse.data,
        cast: castResponse.data.cast,
      });
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 3));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { movieDetail, isLoading };
};

export default useMovieDetail;
