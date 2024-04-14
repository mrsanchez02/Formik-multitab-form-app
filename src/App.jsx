import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as Yup from 'yup';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';

const INITIALVALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4, 'Too Short!').required('Required')
});

const App = () => {
  const [values, setValues] = useState(null)
  const [initialValues] = useState(INITIALVALUES)

  return (
    <div className='mx-4 mt-5 d-flex justify-content-center flex-column'>
      <Card className='w-25 mb-4'>
        <Card.Body>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          setValues(values);
        }}
      >
        {({errors, touched, setFieldValue, values, setValues, resetForm}) => {
          const fillForm = () => {
            setValues({
              firstName: 'Sherlock',
              lastName: 'Holmes',
              email: 'sherlock@holmes.com',
              password: 'bakerstreet'
            })
          }
          return (<Form>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title={(errors.firstName || errors.lastName) ? "* Home" : "Home"}>
              <Card >
                <Card.Body>
                  <StepOne 
                    errors={errors} 
                    touched={touched} 
                    updateFields={(field, value) => {setFieldValue(field, value)}} 
                    values={values}
                  />
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="profile" title={(errors.email || errors.password) ? '* Profile' :'Profile' }>
              <Card>
                <Card.Body>
                  <StepTwo
                    errors={errors}
                    touched={touched}
                    updateFields={(field, value) => {setFieldValue(field, value)}}
                    values={values}
                  />
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
          <div className='d-flex justify-content-around'>
            <button className={'btn btn-primary mt-2'} type="submit">Submit</button>
            <button className={'btn btn-outline-secondary mt-2'} type="button" onClick={() => fillForm()}>Fill</button>
            <button className={'btn btn-outline-danger mt-2'} type="button" onClick={() => resetForm()}>Clear</button>
          </div>
        </Form>)}}
      </Formik>
      </Card.Body>
      </Card>
      <Card className='w-25'>
        <Card.Body>
          <h2>Values</h2>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App
