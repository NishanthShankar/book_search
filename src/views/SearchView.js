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
import {search} from '../actions/index.js'

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
    const noResults = this.props.totalResults === 0
    const EOR = this.props.totalResults < this.props.offset
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.searchBar}>
            <TextInput
              underlineColorAndroid='transparent'
              style={styles.inputStyle}
              placeholder='Search for books here'
              value={this.props.searchPhrase}
              onSubmitEditing={this.onSearch}
              onChangeText={this.props.updateSearch}
            />
          </View>
          <TouchableOpacity
            onPress={this.onSearch}
            activeOpacity={1}
            style={styles.searchButton}>
            {loading?<ActivityIndicator animating={true} />:<Text>SEARCH</Text>}
          </TouchableOpacity>
        </View>
        {noResults?<Text style={styles.resultsText}>No results</Text>:null}
        <FlatList
          onEndReached={this.onSearch}
          data={this.props.results}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <BookItem {...item} />}
        />
        {EOR?<Text style={styles.resultsText}>No more results</Text>:null}
        
      </View>
    )
  }
}

export default connect(
  state =>  ({
    test: state.searchView.test,
    searchPhrase: state.searchView.searchPhrase,
    results: state.searchView.results,
    offset: state.searchView.offset,
    totalResults: state.searchView.total,
    loading: state.searchView.searching,
  }),
  dispatch => ({
    updateSearch: (text) => dispatch(search.updateSearch(text)),
    onSearch: (phrase) => dispatch(search.onSearch(phrase))
  })
)(SearchView)
