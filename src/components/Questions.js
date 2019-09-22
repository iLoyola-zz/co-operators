import React from 'react';
import Rating from 'react-rating'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Questions = (props) => {
    console.log(props);
    const { questionIndex, questions } = props
    return (
      <Container>
        <Row>
          <Col className="il-coop-container-row-column">
            <h2 className="il-coop-container-row-column-heading">
              {questions[questionIndex - 1].QuestionCategory}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="il-coop-container-row-column">
            <p className="il-coop-container-row-column-text">
              {questions[questionIndex - 1].QuestionText}
            </p>
          </Col>
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
      </Container>
    )
}

export default Questions