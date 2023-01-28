import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Cast } from '../interfaces/Credits.interface';

interface Props {
  actor: Cast;
}

const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.rootContainer}>
      {actor.profile_path && (
        <Image source={{ uri }} style={styles.actorImage} />
      )}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  rootContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
    height: 50,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
});
