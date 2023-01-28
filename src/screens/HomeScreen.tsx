import { Text, ActivityIndicator, ScrollView } from 'react-native';
import React from 'react';
//import { useNavigation } from '@react-navigation/core';
//import { StackScreenProps } from '@react-navigation/stack';
//import { RootStackParamList } from './StackNavigationController';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useMovies from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviesCarousel from '../components/MoviesCarousel';

//type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  //const navigation = useNavigation<Props['navigation']>();
  const { isLoading, moviesList } = useMovies();
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView style={{ marginTop: top + 20 }}>
      {isLoading ? (
        <ActivityIndicator color="red" size={100} />
      ) : moviesList.nowPlaying.length > 0 ? (
        <>
          <MoviesCarousel movies={moviesList.nowPlaying} />
          <HorizontalSlider title="En cine" movies={moviesList.popular} />
          <HorizontalSlider title="En cine" movies={moviesList.topRated} />
          <HorizontalSlider title="En cine" movies={moviesList.upcoming} />
        </>
      ) : (
        <Text>Sin Resultados</Text>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
