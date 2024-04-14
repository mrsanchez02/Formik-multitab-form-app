/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap"

export const StepTwo = ({
  errors,
  touched,
  updateFields,
  values
}) => {
  return (
    <>
      <Row>
        <Col>
          <label htmlFor='email' className="form-label">Email</label>
          <input id='email' name='email' placeholder='email'  onChange={({target}) => updateFields(target.name, target.value)} value={values.email} className="form-control" />
          {errors.email && touched.email ? (
            <div className="text-danger" style={{ fontSize: '12px' }}>* {errors.email}</div>
          ) : null}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <label htmlFor='password' className="form-label">Password</label>
          <input id='password' name='password' placeholder='password'  onChange={({target}) => updateFields(target.name, target.value)} value={values.password} className="form-control" />
          {errors.password && touched.password ? (
            <div className="text-danger" style={{ fontSize: '12px' }}>* {errors.password}</div>
          ) : null}
        </Col>
      </Row>
    </>
  )
}