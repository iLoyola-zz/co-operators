import React from 'react'
import { connect } from 'react-redux'

import Col from 'react-bootstrap/Col'

const Heading = (props) => (
  <Col className="il-coop-container-row-column">
    <h2 className="il-coop-container-row-column-heading">
      {props.questionCategory}
    </h2>
  </Col>
)

const mapStateToProps = (state) => {
  return {
    questionCategory: state.questionCategory
  }
}

export default connect(mapStateToProps)(Heading)