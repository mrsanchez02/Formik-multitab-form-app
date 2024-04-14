/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap"

export const StepOne = ({
  errors,
  touched,
  updateFields,
  values
}) => {

  return (
    <>
      <Row>
        <Col>
        <label htmlFor="firstName">First Name</label>
        </Col>
        <Col>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={({target}) => updateFields(target.name, target.value)} value={values.firstName} />
        {errors.firstName && touched.firstName ? (
          <div className="text-danger" style={{fontSize: '12px'}}>* {errors.firstName}</div>
        ) : null}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
      <label htmlFor="lastName">Last Name</label>
        </Col>
        <Col>
      <input id="lastName" name="lastName" placeholder="Doe" onChange={({target}) => updateFields(target.name, target.value)} value={values.lastName} />
      {errors.lastName && touched.lastName ? (
        <div className="text-danger" style={{fontSize: '12px'}}>* {errors.lastName}</div>
      ) : null}
        </Col>
      </Row>
    </>
  )
}