const filtersReducersDefaultState = {
  setQuestion: '',
  questionIndex: 1
}

export default (state = filtersReducersDefaultState, action) => {
  switch (action.type) {
    case 'HANDLE_SET_QUESTION':
      return {

      }
    case 'HANDLE_QUESTION_INDEX':
      return 'hit'
    default:
      return state
  }
}