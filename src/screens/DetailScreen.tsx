import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './StackNavigationController';
import { ScrollView } from 'react-native-gesture-handler';
import useMovieDetail from '../hooks/useMovieDetail';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParamList, 'Detail'> {}

const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { isLoading, movieDetail } = useMovieDetail(movie.id);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator
          size={35}
          color="gray"
          style={styles.loadingIndicator}
        />
      ) : (
        !!movieDetail.fullMovie && (
          <MovieDetails
            fullMovie={movieDetail.fullMovie}
            cast={movieDetail.cast}
          />
        )
      )}
      <View style={styles.returnButton}>
        <Button title="Regresar" onPress={() => navigation.pop()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  loadingIndicator: { marginTop: 20 },
  returnButton: {
    position: 'absolute',
    zIndex: 900,
    elevation: 9,
    top: 30,
    left: 20,
  },
});

export default DetailScreen;
