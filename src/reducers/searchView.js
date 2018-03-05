import _ from 'lodash'

const initialState = {
  test: 'Hello World',
  results: [],
  searchPhrase: '',
  searching: false,
  offset: 0
}

export default function searchView (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchPhrase: action.text,
        total: null,
        offset: 0,
        results: []
      }
    case 'ON_SEARCH':
      const total = action.results.totalItems
      const newResults = _.map(action.results.items, (book) => {
        book.volumeInfo.id = `${book.id}_${book.etag}`
        return book.volumeInfo
      })
      const results = _.concat(state.results, newResults)
      const offset = state.offset + 10
      console.log("RESULTS:", results)
      console.log("OFFSET:", offset)
      console.log("TOTAL:", total)
      return {
        ...state,
        results,
        offset,
        total
      }
    case 'TOGGLE_SEARCHING':
      const searching = !state.searching
      return {
        ...state,
        searching
      }
    default:
      return state
  }
}
