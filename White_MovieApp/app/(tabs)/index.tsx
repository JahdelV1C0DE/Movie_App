import { Image, StyleSheet, FlatList, View, Text } from 'react-native';
import { useState } from 'react';
import MovieItem from '@/components/MovieItem';

export default function HomeScreen() {
  //movieItems is declared as an array and set is used for possible updates made to the array
  const [movieItems, setMovieItems] = useState([
    {
      id: '1',
      name: 'Heat',
      image: require('@/assets/images/Heat.jpg'),
      rating: '9.4',
    },
    {
      id: '2',
      name: 'Drive (2011)',
      image: require('@/assets/images/Drive.jpg'),
      rating: '9.3',
    },
    {
      id: '3',
      name: 'The Departed',
      image: require('@/assets/images/Departed.jpg'),
      rating: '9.0',
    },
    {
      id: '4',
      name: 'Fight CLub',
      image: require('@/assets/images/FightClub.jpg'),
      rating: '9.3',
    },
    {
      id: '5',
      name: 'The Killer',
      image: require('@/assets/images/KillerMovie.jpg'),
      rating: '8.7',
    },
    {
      id: '6',
      name: 'Blood Diamond',
      image: require('@/assets/images/BloodDiamond.jpg'),
      rating: '8.7',
    },
    {
      id: '7',
      name: 'Pusher 2',
      image: require('@/assets/images/Pusher.jpg'),
      rating: '8.9',
    },
    {
      id: '8',
      name: 'Only God Forgives',
      image: require('@/assets/images/OnlyGForgive.jpg'),
      rating: '9.7',
    },
    {
      id: '9',
      name: 'Baby Driver',
      image: require('@/assets/images/Baby.jpg'),
      rating: '9.0',
    },

    {
      id: '10',
      name: 'Blade Runner',
      image: require('@/assets/images/BladeRunner.jpg'),
      rating: '9.1',
    },
    
  ]);

  return (


    <View style={styles.container}>
       <Text style={styles.title}>Movie List</Text>
      <FlatList
        data={movieItems}
        keyExtractor={(item) => item.id} // I researched and found that adding a key for data pulling makes the images appear way
        renderItem={({ item }) => <MovieItem name={item.name} image={item.image} rating={item.rating} />}
        showsVerticalScrollIndicator={false} // Hide scroll bar
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 25
  },
});
