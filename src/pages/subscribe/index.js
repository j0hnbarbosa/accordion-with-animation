import React, { useState } from 'react';
import {
  Card, Grid, Radio, Button,
} from 'semantic-ui-react';
import {
  Formik, Form, ErrorMessage, Field,
} from 'formik';
import { subscribeValidate } from '../../validadeSchema';
import { ContainerRadio, Checkbox } from './styles';
import FieldDatepicker from '../../components/fieldDatepicker';
import FieldInput from '../../components/fieldInput';

const Subscribe = () => {
  const [fruit, setFruit] = useState('');
  const initialValues = {
    email: '',
    password: '',
    groupRadio: '',
    birthday: '',
  };
  const onSignin = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    // eslint-disable-next-line no-debugger
    debugger;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <Card fluid style={{ width: '520px', padding: '15px' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={subscribeValidate}
          onSubmit={onSignin}
        >
          {({ values, setFieldValue }) => {
            const { groupRadio } = values;
            return (
              <Form>
                <Grid columns="equal">
                  <Grid.Row>
                    <Grid.Column>
                      <FieldInput name="email" fluid />
                      <ErrorMessage name="email" />
                    </Grid.Column>
                    <Grid.Column>
                      <FieldInput name="password" fluid />
                      <ErrorMessage name="password" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <ErrorMessage name="groupRadio" />
                      <ContainerRadio>
                        <Field
                          as={Radio}
                          name="groupRadio"
                          label="apple"
                          value="apple"
                          checked={fruit === 'apple'}
                          onChange={(e, { value }) => {
                            setFieldValue('groupRadio', value, true);
                            setFruit(value);
                          }}
                        />
                        <Field
                          as={Radio}
                          name="groupRadio"
                          label="blackberry"
                          value="blackberry"
                          checked={groupRadio === 'blackberry'}
                          onChange={(e, { value }) => {
                            setFieldValue('groupRadio', value, true);
                            setFruit(value);
                          }}
                        />
                      </ContainerRadio>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <FieldDatepicker setFieldValue={setFieldValue} name="birthday" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Checkbox setFieldValue={setFieldValue} name="status" toggle label="done" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button type="submit" primary circular>PRESS</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
};

export default Subscribe;
