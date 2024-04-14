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
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={({target}) => updateFields(target.name, target.value)} value={values.firstName} className="form-control" />
        {errors.firstName && touched.firstName ? (
          <div className="text-danger" style={{fontSize: '12px'}}>* {errors.firstName}</div>
        ) : null}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
      <label htmlFor="lastName" className="form-label">Last Name</label>
      <input id="lastName" name="lastName" placeholder="Doe" onChange={({target}) => updateFields(target.name, target.value)} value={values.lastName} className="form-control"/>
      {errors.lastName && touched.lastName ? (
        <div className="text-danger" style={{fontSize: '12px'}}>* {errors.lastName}</div>
      ) : null}
        </Col>
      </Row>
    </>
  )
}