import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FullMovie } from '../interfaces/FullMovie.interface';
import { Cast } from '../interfaces/Credits.interface';
import currencyFormater from 'currency-formatter';
import { FlatList } from 'react-native-gesture-handler';
import CastItem from './CastItem';

interface Props {
  fullMovie: FullMovie;
  cast: Cast[];
}

const MovieDetails = ({ fullMovie, cast }: Props) => {
  return (
    <>
      <View style={styles.detailsRoot}>
        <View style={styles.rating}>
          <Text>Rating: {fullMovie?.vote_average}</Text>
          <Text style={styles.genresText}>
            - {fullMovie?.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <Text style={styles.historyText}>Historia</Text>
        <Text style={styles.overviewText}>{fullMovie?.overview}</Text>
        <Text style={styles.historyText}>Presupuesto</Text>
        <Text style={styles.overviewText}>
          {currencyFormater.format(fullMovie?.budget ?? 0, { code: 'USD' })}
        </Text>
      </View>
      <View style={styles.castRoot}>
        <Text style={{ ...styles.historyText, ...styles.actorsText }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.castCarousel}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsRoot: { marginHorizontal: 20 },
  rating: { flexDirection: 'row' },
  genresText: { marginLeft: 5 },
  historyText: { fontSize: 25, marginTop: 10, fontWeight: 'bold' },
  actorsText: { marginLeft: 20 },
  overviewText: { fontSize: 16 },
  castRoot: { marginTop: 10, marginBottom: 100 },
  castCarousel: { marginTop: 10, height: 70 },
});

export default MovieDetails;
