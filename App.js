/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import Constants from 'expo-constants';


const mediaArray = [
  {
    'key': '0',
    'title': 'Title 1',
    // eslint-disable-next-line max-len
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Title 2',
    // eslint-disable-next-line max-len
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Title 3',
    // eslint-disable-next-line max-len
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusBar}>My First App</Text>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.profileContainer}>
              <Image
                style={styles.profileImg}
                source={{uri: item.thumbnails.w160}}
              />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}

      />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusBar: {
    backgroundColor: '#138d75',
    height: Constants.statusBarHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
  },

  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 3,
    height: 200,
    width: 450,
    borderRadius: 3,
    borderWidth: 1,
  },

});


export default App;
