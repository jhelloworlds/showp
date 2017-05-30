import { SET_QUERY } from '../actions/types'

export function setQuery(query) {
  return {
    type: SET_QUERY,
    query
  };
}