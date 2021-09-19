import { combineReducers } from "redux"

const navbarStatusReducer = (state = 'initial', action) => {
    switch(action.type) {
      case "OPEN":
        return true
      case "CLOSE": 
        return false
      default: 
        return state
    }
}

const gamesReducer = (state = [], action) => {
  switch(action.type) {
    case "SET": 
      return action.payload
    case "WIPE": 
      return []
    default:
      return state
  }
}

const genresReducer = (state = [], action) => {
  switch(action.type) {
    case "SET_GENRES": 
      return action.payload
    case "WIPE_GENRES": 
      return []
    default:
      return state
  }
}

const selectedGenreReducer = (state = null, action) => {
  switch(action.type) {
    case "SELECT_GENRE":
      return action.payload
    case "UNSET_GENRE": 
      return null
    default:
      return state
  }
}

const categoryReducer = (state = 'popular', action) => {
  switch(action.type) {
    case "CHOOSE": 
      return action.payload
    case "UNSET_CAT":
      return ''
    default:
      return state
  }
}

const genreStatusReducer = (state = 'initial', action) => {
  switch(action.type) {
    case "OPEN_GENRES":
      return true
    case "CLOSE_GENRES":
      return false
    default:
      return state
  }
}

const paginationReducer = (state = 1, action) => {
  switch(action.type) {
    case "NEXT":
      return state + 1
    case "PREV":
      if(state > 1) {
        return state - 1
      } else {
        return state
      }
    case "JUMP_TO":
      return action.payload
    default:
      return state
  }
}

const searchtermReducer = (state = "portal", action) => {
  switch(action.type) {
    case "SET_TERM":
      return action.payload
    case "UNSET_TERM":
      return ""
    default:
      return state
  }
}

const gameReducer = (state = {}, action) => {
  switch(action.type) {
    case "SET_GAME": 
      return action.payload
    case "UNSET_GAME":
      return {}
    default:
      return state
  }
}

// Combine all reducers before sending to store.
const combinedReducers = combineReducers({
    navbarStatus: navbarStatusReducer,
    games: gamesReducer,
    genres: genresReducer,
    category: categoryReducer,
    page: paginationReducer,
    genreStatus: genreStatusReducer,
    selectedGenre: selectedGenreReducer,
    searchterm: searchtermReducer,
    game: gameReducer,
})

export default combinedReducers;
