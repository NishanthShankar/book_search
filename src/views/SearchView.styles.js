import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    padding: 12,
    paddingBottom: 0
  },
  searchBar: {
    flex: 1,
    height: 44,
    borderRadius: 4,
    paddingRight: 12,
    marginHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 3
  },
  inputStyle: {
    flex: 1,
    marginLeft: 12
  },
  searchButton: {
    minWidth: 88,
    marginRight: 12,
    padding: 12,
    elevation: 3,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  resultsText: {
    textAlign: 'center',
    marginVertical: 12
  }
})

module.exports = styles
