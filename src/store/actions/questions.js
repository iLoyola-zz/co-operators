import API from '../../api/api'

console.log(API);


// HANDLE_HEADING_TEXT
export const handleSetHeading = () => ({
  type: 'HANDLE_HEADING_TEXT'
})

// HANDLE_QUESTION_TEXT
export const handleSetQuestion = () => ({
  type: 'HANDLE_QUESTION_TEXT'
})

// HANDLE_RATING
export const handleRating = () => ({
  type: 'HANDLE_RATING'
})