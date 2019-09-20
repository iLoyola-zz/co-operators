import API from '../../api/api'

// HANDLE_SET_QUESTION
export const handleSetQuestion = ({}) => ({
  type: 'HANDLE_SET_QUESTION'
})

// HANDLE_QUESTION_INDEX
export const handleQuestionIndex = ({sequence = 1}) => ({
  type: 'HANDLE_QUESTION_INDEX',
  filter: {
    sequence
  }
})
