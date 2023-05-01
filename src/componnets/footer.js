import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

// כותרת תחתונה
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className= "text-center py-3" >
             Copyright &copy; Yacov Touati
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
