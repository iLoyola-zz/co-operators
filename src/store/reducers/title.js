const titleReducersDefaultState = {
  title: ''
}

export default (state = titleReducersDefaultState, action) => {
  switch (action.type) {
    case 'HANDLE_SET_TITLE':
      return {

      }
    default:
      return state
  }
}