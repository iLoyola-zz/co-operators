const fetchReducersDefaultState = {}

export default (state = fetchReducersDefaultState, action) => {
  switch (action.type) {
    case 'HANDLE_FETCH_DATA':
      return action.payload
    default:
      return state
  }
}