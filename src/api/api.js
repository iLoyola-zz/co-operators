import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080'
})


// const getAPI = async () => {
//   const response = await fetch('https://coop-eval.s3.us-east-2.amazonaws.com/data.json')
//   if (response.status === 200) {
//     const data = await response.json()
//     return data.api
//   } else {
//     throw new Error('Did not fetch API');
//   }
// }