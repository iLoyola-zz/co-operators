import React from 'react'
import Rating from 'react-rating'
import { connect } from 'react-redux'

import { fetchAPI } from '../store/actions/fetch'

import Header from '../components/Header'
import Heading from '../components/Heading'
import Question from '../components/Question'

import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class IndexPage extends React.Component {
  componentDidMount() {
    this.props.fetchAPI()
  }
  render() {
    return (
      <Container className="il-coop-container">
        <Row className="il-coop-container-row">
          <Col className="il-coop-container-row-column">
            <Header />
          </Col>
        </Row>
        <Row className="il-coop-container-row">
          <Heading />
        </Row>
        <Row className="il-coop-container-row">
          <Question />
        </Row>
        <Row className="il-coop-container-row">
          <Col className="il-coop-container-row-column">
            <Rating
              onClick={(value) => this.handleRating(value)}
              start={0}
              stop={10}
              step={1}
              fractions={2} />
          </Col>
        </Row>
        <Row className="il-coop-container-row">
          <Col xs={3} md={2} className="il-coop-container-row-column il-coop-col-previous-button">
            <Button variant="primary" className="il-coop-button">Previous</Button>
          </Col>
          <Col xs={12} md={8} className="il-coop-container-row-column">
            <ProgressBar now={12} />
          </Col>
          <Col xs={3} md={2} className="il-coop-container-row-column il-coop-col-next-button">
            <Button variant="primary" className="il-coop-button">Next</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {question: state.question}
}

export default connect(mapStateToProps)(IndexPage)
