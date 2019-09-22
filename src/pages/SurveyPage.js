import React from 'react'

import Header from '../components/Header'
import Questions from '../components/Questions'

import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SurveyPage extends React.Component {
  state = {
    title: undefined,
    questions: [],
    questionIndex: 1
  }
  async componentDidMount() {
    const response = await fetch('https://coop-eval.s3.us-east-2.amazonaws.com/data.json')
    const data = await response.json()
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
  }
  handleRating = (props) => {

  }
  handlePreviousQuestion = () => {
    this.setState((prevState) => ({
      questionIndex: prevState.questionIndex - 1
    }))
  }
  handleNextQuestion = () => {
    this.setState((prevState) => ({
      questionIndex: prevState.questionIndex + 1
    }))
  }
  render() {
    console.log(this.state.questionIndex > this.state.questions.length);

    return (
      <section className="il-coop-section">
        <Container className="il-coop-container">
          <Row className="il-coop-container-row">
            <Col className="il-coop-container-row-column">
              <Header title={this.state.title} />
            </Col>
          </Row>
        </Container>
        {this.state.questions.length ? (<Questions questionIndex={this.state.questionIndex} questions={this.state.questions} />) : ('Loading question...')}
        <Container>
          <Row className="il-coop-container-row">
            <Col xs={3} md={2} className="il-coop-container-row-column il-coop-col-previous-button">
              <Button onClick={this.handlePreviousQuestion} disabled={this.state.questionIndex === 1} variant="primary" className="il-coop-button" size="lg" block>Previous</Button>
            </Col>
            <Col xs={12} md={8} className="il-coop-container-row-column">
              <ProgressBar now={(100 / this.state.questions.length) * this.state.questionIndex} />
            </Col>
            <Col xs={3} md={2} className="il-coop-container-row-column il-coop-col-next-button">
              <Button onClick={this.handleNextQuestion} disabled={this.state.questionIndex === this.state.questions.length} variant="primary" className="il-coop-button" size="lg" block>Next</Button>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SurveyPage
