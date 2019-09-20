const questionsReducersDefaultState = []

export default(state = questionsReducersDefaultState, action) => {
  switch(action.type) {
    case 'HANDLE_HEADING_TEXT':
      return {

      }
    case 'HANDLE_QUESTION_TEXT':
      return {

      }
    case 'HANDLE_RATING':
      return {

      }
    case 'HANDLE_NEXT_QUESTION':
      return {

      }
    case 'HANDLE_PREVIOUS_QUESTION':
      return {

      }
    case 'HANDLE_PROGRESS_BAR':
      return {

      }
    default:
      return state
  }
}