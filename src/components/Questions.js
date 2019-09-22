import React from 'react';
import Rating from 'react-rating'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Questions = (props) => {
    const { questionIndex, questions } = props
    const initialRating = () => {
      if (questions[questionIndex - 1].Response === undefined) {
        return 0
      } else {
        return parseInt(questions[questionIndex - 1].Response)
      }
    }
    return (
      <article>
        <Container className="il-coop-container il-coop-container-2">
          <Row>
            <Col xs={12} className="il-coop-container-row-column">
              <h2 className="il-coop-container-row-column-heading">
                {questions[questionIndex - 1].QuestionCategory}
              </h2>
            </Col>
          </Row>
        </Container>
        <Container className="il-coop-container il-coop-container-3">
          <Row>
            <Col xs={12} className="il-coop-container-row-column">
              <p className="il-coop-container-row-column-text">
                {questions[questionIndex - 1].QuestionText}
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="il-coop-container il-coop-container-4">
          <Row className="il-coop-container-row">
            <Col xs={{ span: 6, order: 1 }} sm={{ span: 4, order: 1 }} md={4.5}  className="il-coop-container-row-column il-coop-rating-disagree">
              <span className="il-coop-rating-disagree-text">Strongly Disagree</span>
            </Col>
            <Col xs={{ span: 12, order: 3 }} sm={{ span: 4, order: 2 }} md={3} className="il-coop-container-row-column il-coop-rating-comp">
              <Rating
                onClick={(value) => props.handleRating(value)}
                start={0}
                stop={5}
                step={1}
                fractions={2}
                initialRating={initialRating()}
                className="il-coop-rating" />
            </Col>
            <Col xs={{ span: 6, order: 2 }} sm={{ span: 4, order: 3 }} md={4.5} className="il-coop-container-row-column il-coop-rating-agree">
              <span className="il-coop-rating-agree-text">Strongly Agree</span>
            </Col>
          </Row>
        </Container>
      </article>
    )
}

export default Questions