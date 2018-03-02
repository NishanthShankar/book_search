import React from 'react'
import {
  Image,
  Text,
  View
} from 'react-native'

import _ from 'lodash'

const BookItem = (props) => {
  const {title, imageLinks, authors, description} = props
  const thumbnail = _.get(imageLinks, 'smallThumbnail')
  const authorText = authors ? `by ${authors.join(', ')}` : ''
  return (
    <View style={[{
      borderRadius: 4,
      elevation: 3,
      padding: 12,
      margin: 12,
      backgroundColor: 'white',
      flexDirection: 'row'
    }]}>
      {thumbnail
        ? <Image source={{uri: thumbnail}} style={{height: 112, width: 72}} />
        : <View />
      }
      <View style={[{marginLeft: 16, flex: 1}]}>
        <Text style={{fontWeight: 'bold', color: '#303030'}}>{title}</Text>
        <Text>{authorText}</Text>
        <View style={[{height: 8}]} />
        <Text style={{fontStyle: 'italic'}}>{description}</Text>
      </View>
    </View>
  )
}

module.exports = BookItem
