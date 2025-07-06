import { Image, View, Text, StyleSheet } from 'react-native';

type MovieItemProps = {
  name: string;
  image: any; 
  rating: string;
};

function MovieItem({ name, image, rating }: MovieItemProps) {
  return (
    <View style={styles.itemContainer}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{name}</Text>
      </View>

      
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={image} />
      </View>

      
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{rating} / 10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: 5,
  },
  itemImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  ratingContainer: {
    marginTop: 5,
  },
  itemRating: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MovieItem;
