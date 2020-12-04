export const SET_SEARCH = 'SET_SEARCH'

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH,
    searchTerm
  }
}