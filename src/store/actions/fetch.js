import API from '../../api/api'

// HANDLE_FETCH_DATA
export const fetchAPI = () => {
  return async dispatch => {
    const response = await API.get()
    dispatch({
      type: 'HANDLE_FETCH_DATA',
      payload: response.data
    })
  }
}