export const SEARCH_FILTER = 'SEARCH_FILTER';

export function search(term) {
  return {
    type: SEARCH_FILTER,
    payload: term,
  }
}
