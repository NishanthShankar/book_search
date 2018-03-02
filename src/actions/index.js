// UI actions
const showNoInternet = _ => ({
  type: 'SHOW_NO_INTERNET'
})

const hideNoInternet = _ => ({
  type: 'HIDE_NO_INTERNET'
})

// Search actions
const updateSearch = text => ({
  type: 'UPDATE_SEARCH',
  text
})

const parseResults = results => ({
  type: 'ON_SEARCH',
  results
})

const toggleSearching = _ => ({
  type: 'TOGGLE_SEARCHING'
})

const onSearch = () => {
  const base = `https://www.googlsseapis.com/books/v1/volumes`
  return (dispatch, getState) => {
    let { searchView: {searchPhrase, offset, searching, total} } = getState()
    if (searching || !searchPhrase || (total && total < offset)) {
      return
    }
    
    searchPhrase = encodeURI(searchPhrase)
    const url = `${base}?q=${searchPhrase}&maxResults=10&startIndex=${offset}`
    dispatch(hideNoInternet())
    dispatch(toggleSearching())
    fetch(url)
    .then(d => d.json())
    .then((results) => dispatch(parseResults(results)))
    .catch(_ => dispatch(showNoInternet()))
    .then(_ => dispatch(toggleSearching()))
  }
}

export {
  showNoInternet,
  hideNoInternet,
  updateSearch,
  onSearch
}
