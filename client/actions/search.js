export const SET_SEARCH = 'SET_SEARCH'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH,
    searchTerm
  }
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}