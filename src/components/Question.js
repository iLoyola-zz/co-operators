import React from 'react'
import { connect } from 'react-redux'

import Col from 'react-bootstrap/Col'

const Question = (props) => (
  <Col className="il-coop-container-row-column">
    <p className="il-coop-container-row-column-text">
      {props.questionText}
    </p>
  </Col>
)

const mapStateToProps = (state) => {
  return {
    questionText: state.questionText
  }
}

export default connect(mapStateToProps)(Question)