import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import _ from 'lodash'

const BookItem = (props) => {
  const {title, imageLinks, authors, description} = props
  const thumbnail = _.get(imageLinks, 'smallThumbnail')
  const authorText = authors ? `by ${authors.join(', ')}` : ''
  console.log("IMg:", thumbnail)
  return (
    <View style={styles.container}>
      {thumbnail
        ? <Image source={{uri: thumbnail}} style={styles.image} />
        : <View />
      }
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{authorText}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.24,
    shadowRadius: 2,
    padding: 12,
    margin: 12,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  image: {
    backgroundColor: '#ececec',
    height: 112,
    width: 72
  },
  textContainer: {
    marginLeft: 16,
    flex: 1
  },
  titleText: {
    fontWeight: 'bold',
    color: '#303030'
  },
  descriptionText: {
    marginTop: 8,
    fontStyle: 'italic'
  }
})

module.exports = BookItem
