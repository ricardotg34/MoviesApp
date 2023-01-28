import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/MoviesResponse.interface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/StackNavigationController';

type Props = {
  movie: Movie;
  height?: number;
  width?: number;
};

type NavProps = StackScreenProps<RootStackParamList, 'Home'>;

const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {
  const uri = 'https://image.tmdb.org/t/p/w500';

  const navigation = useNavigation<NavProps['navigation']>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        ...styles.cardRoot,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `${uri}${movie.poster_path}`,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardRoot: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
});
