import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_CDN_CONFIG} from '../../configs/api.config'
const { width, height } = Dimensions.get('screen');




const MovieRender = ({ movie, navigation }) => {
  const [color, setColor] = useState('gray');
  return (
    <TouchableWithoutFeedback  
      onPress={() => navigation.navigate('DetailMovie', movie)}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.poster} source={{ uri: API_CDN_CONFIG.CDN_URL_W500 + `${movie.poster_path}` }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableWithoutFeedback
            onPressIn={() => setColor('red')}
            onLongPress={() => setColor('gray')}
          >
            <Icon name='heart' size={28} color={color} />
          </TouchableWithoutFeedback>

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingHorizontal: 30,
    borderBottomColor:'black',
    borderBottomWidth:0.2,
    padding:10,
    opacity:0.95

  },
  imageContainer: {
    paddingLeft: -20,

  },
  poster: {
    height: 100,
    width: 60,
    resizeMode: 'contain'
  },
  titleContainer: {
    marginRight: 20,
    width: width / 2,
    justifyContent: "center"

  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    textAlign: "center",


  },
  iconContainer: {
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default MovieRender