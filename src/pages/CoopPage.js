import React from 'react'
import Rating from 'react-rating'

import Header from '../components/Header'
import { Question } from '../components/Question'

import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class CoopPage extends React.Component {
  state = {
    title: undefined,
    questions: []
  }
  componentDidMount() {
    fetch('https://coop-eval.s3.us-east-2.amazonaws.com/data.json').then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Unable to fetch JSON')
      }
    }).then((data) => {
      let questions = []
      Object.entries(data).forEach(([key, val]) => {
        if (typeof val === 'object') {
          questions.push(val)
        }
      });
      this.setState({
        title: data.AssessmentName,
        questions
      })
    }).catch((error) => {
      console.log(`Error: ${error}`);
    })
  }
  handleSetQuestions = () => {

  }
  handleRating = (props) => {

  }
  handleNextQuestion = () => {

  }
  handlePreviousQuestion = () => {

  }
  handleProgessBar = () => {

  }
  render() {
    return (
      <Container className="il-coop-container">
        <Row className="il-coop-container-row">
          <Col className="il-coop-container-row-column"><Header title={this.state.title} /></Col>
        </Row>
        <Row className="il-coop-container-row">
          <Col className="il-coop-container-row-column"><h2 className="il-coop-container-row-column-heading"></h2></Col>
        </Row>
        <Row className="il-coop-container-row">
          <Col className="il-coop-container-row-column"><p className="il-coop-container-row-column-text"></p></Col>
        </Row>
        <Row className="il-coop-container-row">
          <Col className="il-coop-container-row-column"><Rating
            start={0}
            stop={10}
            step={1}
            fractions={2} /></Col>
        </Row>
        <Row className="il-coop-container-row">
          <Col xs={3} md={2} className="il-coop-container-row-column il-coop-col-previous-button"><Button variant="primary" className="il-coop-button">Previous</Button></Col>
          <Col xs={12} md={8} className="il-coop-container-row-column"><ProgressBar now={12} /></Col>
          <Col xs={3} md={2} className="il-coop-container-row-column il-coop-col-next-button"><Button variant="primary" className="il-coop-button">Next</Button></Col>
        </Row>
      </Container>
    )
  }
}

export default CoopPage
