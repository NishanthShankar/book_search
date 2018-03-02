import _ from 'lodash'

const initialState = {
  internetStatus: ''
}

export default function ui (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_NO_INTERNET':
      return {
        ...state,
        internetStatus: 'Seems like there is no internet'
      }

    case 'HIDE_NO_INTERNET':
      return {
        ...state,
        internetStatus: ''
      }

    default:
      return state
  }
}
