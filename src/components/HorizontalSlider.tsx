import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/MoviesResponse.interface';
import MovieCard from './MovieCard';

type Props = {
  title?: string;
  movies: Movie[];
};

const HorizontalSlider = (props: Props) => {
  const styles = StyleSheet.create({
    root: { height: props.title ? 260 : 220 },
    title: { fontSize: 40, fontWeight: 'bold', marginLeft: 10 },
  });
  return (
    <View style={styles.root}>
      {props.title && <Text style={styles.title}>{props.title}:</Text>}
      <FlatList
        data={props.movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
