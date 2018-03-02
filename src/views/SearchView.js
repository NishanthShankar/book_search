import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
  TextInput
} from 'react-native'

import { connect } from 'react-redux'
import { updateSearch, onSearch } from '../actions/'

import BookItem from '../components/BookItem'
import styles from './SearchView.styles.js'

class SearchView extends Component {
  _keyExtractor = item => item.id
  onSearch = () => {
    Keyboard.dismiss()
    this.props.onSearch()
  }
  render () {
    const loading = this.props.loading
    return (
      <View style={{flex: 1, backgroundColor: '#ececec', padding: 12, paddingBottom: 0}}>
        <View style={[{flexDirection: 'row'}]}>
          <View style={styles.searchBar}>
            <TextInput
              underlineColorAndroid='transparent'
              style={{flex:1, marginLeft: 12}}
              placeholder='Search for books here'
              value={this.props.searchPhrase}
              onChangeText={this.props.updateSearch}
            />
            {loading?<ActivityIndicator animating={true} />:<View />}
          </View>
          <TouchableOpacity
            onPress={this.onSearch}
            activeOpacity={1}
            style={{
              marginRight: 12,
              padding: 12,
              elevation: 3,
              borderRadius: 4,
              justifyContent: 'center',
              backgroundColor:'white'}}>
            <Text>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          onEndReached={this.onSearch}
          data={this.props.results}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <BookItem {...item} />}
        />
        
      </View>
    )
  }
}

export default connect(
  state => {
    console.log("STATEL",state)
    return ({
    test: state.searchView.test,
    searchPhrase: state.searchView.searchPhrase,
    results: state.searchView.results,
    loading: state.searchView.searching
  })},
  dispatch => ({
    updateSearch: (text) => dispatch(updateSearch(text)),
    onSearch: (phrase) => dispatch(onSearch(phrase))
  })
)(SearchView)
