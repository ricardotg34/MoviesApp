import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Movie } from '../interfaces/MoviesResponse.interface';
import MovieCard from './MovieCard';

const window = Dimensions.get('window');

type Props = {
  movies: Movie[];
};

const MoviesCarousel = (props: Props) => {
  return (
    <View style={styles.root}>
      <Carousel
        mode="parallax"
        pagingEnabled={false}
        windowSize={2}
        style={styles.carousel}
        data={props.movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        snapEnabled
        modeConfig={{
          // How the "main" item will look
          parallaxScrollingScale: 0.9,
          // How separate the adjacent items will be
          parallaxScrollingOffset: 40,
          // How big the adjacent items will look compared to the "main" item
          parallaxAdjacentItemScale: 0.75,
        }}
        width={300}
        height={420}
      />
    </View>
  );
};

export default MoviesCarousel;

const styles = StyleSheet.create({
  root: { height: 440 },
  carousel: { width: window.width, justifyContent: 'center' },
});
