import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './src/reducers/'

import SearchView from './src/views/SearchView'
import NoInternetBar from './src/components/NoInternetBar'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))
export default class App extends Component {
  render() {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SearchView />
          <NoInternetBar />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec'
  }
})
